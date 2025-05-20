"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Define the exercise type based on the API controller
interface Exercise {
  id: string;
  reps: number;
  load: number;
  sets: number;
  rest?: number;
  description?: string;
  movementId: string;
  createdAt?: string;
  updatedAt?: string;
}

// Define the movement type from API
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

// Form validation schema aligned with the controller
const exerciseFormSchema = z.object({
  reps: z.coerce.number().min(1, "Repetitions are required"),
  load: z.coerce.number().min(0, "Load must be 0 or greater"),
  sets: z.coerce.number().min(1, "Sets are required"),
  rest: z.coerce.number().optional(),
  description: z.string().optional(),
  movementId: z.string().min(1, "Movement is required"),
});

// Type for form values
type ExerciseFormValues = z.infer<typeof exerciseFormSchema>;

// API fetcher
const fetcher = async (url: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
};

// Format the difficulty level
const formatDifficulty = (level?: string) => {
  if (!level) return "Unknown";
  return level.charAt(0) + level.slice(1).toLowerCase();
};

export default function CreateExercisePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [movementDialogOpen, setMovementDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovement, setSelectedMovement] = useState<Video | null>(null);

  // Fetch movements from API
  const {
    data: movementData,
    error: movementError,
    isLoading: movementLoading,
  } = useSWR<ApiResponse>("http://localhost:3000/videos", fetcher);

  const form = useForm<ExerciseFormValues>({
    resolver: zodResolver(exerciseFormSchema),
    defaultValues: {
      reps: 10,
      load: 0,
      sets: 3,
      rest: 60,
      description: "",
      movementId: "",
    },
  });

  // Update form when a movement is selected
  useEffect(() => {
    if (selectedMovement?.id) {
      form.setValue("movementId", selectedMovement.id);
    }
  }, [selectedMovement, form]);

  const onSubmit = async (data: ExerciseFormValues) => {
    try {
      setIsSubmitting(true);

      // Call the exercise API to create a new exercise
      const response = await fetch("http://localhost:3000/exercises", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create exercise");
      }

      router.push("/fitness/exercises");
    } catch (error) {
      console.error("Error submitting exercise:", error);
      alert(
        `Failed to create exercise: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter movements based on search term
  const filteredMovements = movementData?.videos
    ? movementData.videos
        .filter((video) => video.id && video.name)
        .filter(
          (video) =>
            searchTerm === "" ||
            video.name?.toLowerCase().includes(searchTerm.toLowerCase()),
        )
    : [];

  // Handle video mouse events
  const handleMouseEnter = (videoElement: HTMLVideoElement) => {
    if (videoElement) {
      videoElement.muted = true;
      videoElement
        .play()
        .catch((e) => console.error("Error playing video:", e));
    }
  };

  const handleMouseLeave = (videoElement: HTMLVideoElement) => {
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };

  // Handle API data loading state
  if (movementLoading) {
    return <div className="p-6">Loading movements...</div>;
  }

  // Handle API errors
  if (movementError) {
    return (
      <div className="p-4 text-red-500">
        Error loading movements: {movementError.message}
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Create New Exercise</h1>
        <Button
          variant="outline"
          onClick={() => router.push("/fitness/exercises")}
        >
          Cancel
        </Button>
      </div>

      <div className="rounded-lg bg-white p-6 shadow">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="movementId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Movement</FormLabel>
                    <div className="space-y-2">
                      {selectedMovement ? (
                        <div className="flex items-center gap-2 rounded-md border p-2">
                          <div className="flex-1">
                            <div className="font-medium">
                              {selectedMovement.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {formatDifficulty(selectedMovement.level)}
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedMovement(null)}
                          >
                            <X size={16} />
                          </Button>
                        </div>
                      ) : (
                        <Dialog
                          open={movementDialogOpen}
                          onOpenChange={setMovementDialogOpen}
                        >
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              type="button"
                              className="w-full justify-start text-gray-600"
                            >
                              Select a movement
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[800px]">
                            <DialogHeader>
                              <DialogTitle>Select Movement</DialogTitle>
                              <DialogDescription>
                                Choose a movement from the library for this
                                exercise.
                              </DialogDescription>
                            </DialogHeader>

                            <div className="mb-4 flex items-center gap-2 border-b pb-4">
                              <Search size={18} className="text-gray-400" />
                              <input
                                className="flex-1 bg-transparent text-sm outline-none"
                                placeholder="Search movements..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                              />
                              {searchTerm && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 w-6 p-0"
                                  onClick={() => setSearchTerm("")}
                                >
                                  <X size={16} />
                                </Button>
                              )}
                            </div>

                            <div className="grid max-h-[30vh] grid-cols-1 gap-4 overflow-y-auto p-1 md:grid-cols-4">
                              {filteredMovements.length > 0 ? (
                                filteredMovements.map((video) => (
                                  <div
                                    key={video.id}
                                    className="relative cursor-pointer overflow-hidden rounded-md border transition-all hover:border-blue-500"
                                    onClick={() => {
                                      setSelectedMovement(video);
                                      setMovementDialogOpen(false);
                                    }}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setSelectedMovement(video);
                                        setMovementDialogOpen(false);
                                      }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                  >
                                    <div className="relative w-fit overflow-hidden bg-black">
                                      <video
                                        src={video.url}
                                        className="w-full"
                                        ref={(el) => {
                                          if (el) {
                                            el.onmouseenter = () =>
                                              handleMouseEnter(el);
                                            el.onmouseleave = () =>
                                              handleMouseLeave(el);
                                          }
                                        }}
                                        loop
                                        playsInline
                                      >
                                        <track
                                          kind="captions"
                                          src={`/captions/${video.id || "placeholder"}.vtt`}
                                          label="English captions"
                                          srcLang="en"
                                          default
                                        />
                                      </video>
                                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2">
                                        <h3 className="font-medium text-white">
                                          {video.name}
                                        </h3>
                                        {video.level && (
                                          <Badge
                                            variant="outline"
                                            className="mt-1 border-white/20 bg-black/40 text-xs text-white"
                                          >
                                            {formatDifficulty(video.level)}
                                          </Badge>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div className="col-span-full flex items-center justify-center py-8 text-gray-500">
                                  No movements found matching your search.
                                </div>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                      <FormControl>
                        <input type="hidden" {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sets"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sets</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="1"
                        placeholder="Number of sets"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reps"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repetitions</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="1"
                        placeholder="Number of repetitions"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="load"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Load (kg)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        step="0.5"
                        placeholder="Weight in kg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rest Time (seconds)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        placeholder="Rest time in seconds"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Brief description of the exercise"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-4">
              <Button
                variant="outline"
                type="button"
                onClick={() => router.push("/fitness/exercises")}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Exercise"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
