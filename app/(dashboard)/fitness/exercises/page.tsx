"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useSWR from "swr";

// Define the exercise type based on the API controller
interface Exercise {
  id: string;
  reps: number;
  load: number;
  sets: number;
  rest?: number;
  description?: string;
  movementId: string;
  createdAt: string;
  updatedAt: string;
  movement?: Movement; // For when it's included in the response
}

// Define the movement type
interface Movement {
  id: string;
  name: string;
  description: string | null;
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "SPECIAL";
  url: string;
  createdAt: string;
  updatedAt: string;
}

interface Video {
  key: string;
  url: string;
  id?: string;
  name?: string;
  description?: string | null;
  level?: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "SPECIAL";
  createdAt?: string;
  updatedAt?: string;
}

interface ApiResponse {
  success: boolean;
  videos?: Video[];
  error?: string;
  details?: string;
}

// API fetcher
const fetcher = async (url: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // In a real app, you would include auth token
      // "Authorization": `Bearer ${localStorage.getItem('token')}`
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
};

export default function FitnessExercisesPage() {
  const router = useRouter();
  
  // Fetch movements from API
  const { data: movementData, error: movementError, isLoading: movementLoading } = useSWR<ApiResponse>(
    "http://localhost:3000/videos",
    fetcher
  );
   
  // Fetch exercises from API
  const { data: exercises, error: exercisesError, isLoading: exercisesLoading, mutate: refreshExercises } = useSWR<Exercise[]>(
    "http://localhost:3000/exercises",
    fetcher
  );

  // Function to get movement name by ID
  const getMovementName = (movementId: string): string => {
    if (!movementData?.videos) return "Unknown";
    
    const movement = movementData.videos.find(
      video => video.id === movementId
    );
    
    return movement?.name || "Unknown";
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this exercise?")) {
      try {
        // Call API to delete exercise
        const response = await fetch(`http://localhost:3000/exercises/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            // In a real app, you would include auth token
            // "Authorization": `Bearer ${localStorage.getItem('token')}`
          },
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to delete exercise");
        }
        
        // Refresh the exercise list
        refreshExercises();
      } catch (error) {
        console.error("Error deleting exercise:", error);
        alert(`Failed to delete exercise: ${error instanceof Error ? error.message : "Unknown error"}`);
      }
    }
  };

  // Handle API data loading states
  if (movementLoading || exercisesLoading) {
    return <div className="p-6">Loading...</div>;
  }

  // Handle API errors
  if (movementError) {
    return <div className="p-4 text-red-500">Error loading movements: {movementError.message}</div>;
  }
  
  if (exercisesError) {
    return <div className="p-4 text-red-500">Error loading exercises: {exercisesError.message}</div>;
  }

  return (
    <div className="">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Exercises Library</h1>
        <Button type="button" onClick={() => router.push("/fitness/exercises/create")}>
          Create Exercise
        </Button>
      </div>
       
      {!exercises || exercises.length === 0 ? (
        <div className="flex h-40 items-center justify-center rounded-lg bg-gray-50">
          <p className="text-gray-500">No exercises found. Create one to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="rounded-lg bg-white p-4 shadow">
              <h3 className="mb-2 text-lg font-semibold">
                {exercise.movement?.name || getMovementName(exercise.movementId)}
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Sets: {exercise.sets}</p>
                <p>Reps: {exercise.reps}</p>
                <p>Load: {exercise.load}kg</p>
                {exercise.rest && <p>Rest: {exercise.rest}s</p>}
                {exercise.description && (
                  <p>Notes: {exercise.description}</p>
                )}
              </div>
              <div className="mt-4 flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => router.push(`/fitness/exercises/edit/${exercise.id}`)}
                >
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push(`/fitness/exercises/${exercise.id}`)}
                >
                  Details
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-red-500 hover:bg-red-50"
                  onClick={() => handleDelete(exercise.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
