"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import useSWR from "swr";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";
import { Trash } from "lucide-react";

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

export default function FitnessMovementsPage() {
  const { data, error, isLoading, mutate } = useSWR<ApiResponse>(
    "http://localhost:3000/videos",
    fetcher,
  );

  if (error)
    return (
      <div className="p-4 text-red-500">
        Error loading videos: {error.message}
      </div>
    );
  if (isLoading) return <div>Loading...</div>;

  // Check if the API returned an error
  if (data && !data.success) {
    return (
      <div className="p-4 text-red-500">
        API error: {data.error}
        {data.details && (
          <div className="mt-2 text-sm">Details: {data.details}</div>
        )}
      </div>
    );
  }

  const videos = data?.videos || [];

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

  const handleDelete = async (id: string) => {
    if (!id) return;
    
    if (confirm("Are you sure you want to delete this movement?")) {
      try {
        const response = await fetch(`http://localhost:3000/videos/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        if (!response.ok) {
          throw new Error(`Failed to delete: ${response.status} ${response.statusText}`);
        }
        
        mutate();
      } catch (error) {
        console.error("Error deleting movement:", error);
        alert("Failed to delete movement");
      }
    }
  };

  return (
    <section className="">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Video list</h1>
        <Link href="/fitness/movements/add">
          <Button>Add a movement</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos.length > 0 ? (
          videos.map((video) => (
            <Card
              key={video.key || video.id}
              className="relative overflow-clip border transition-all duration-300 hover:!z-10 hover:scale-[105%] hover:shadow-md group"
            >
              <div className="relative w-full overflow-clip bg-black">
                <Button 
                  variant="destructive" 
                  size="icon" 
                  className="absolute right-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(video.id || '');
                  }}
                >
                  <Trash className="h-4 w-4" />
                </Button>
                <video
                  src={video.url}
                  className="h-auto w-full object-cover"
                  ref={(el) => {
                    if (el) {
                      el.onmouseenter = () => handleMouseEnter(el);
                      el.onmouseleave = () => handleMouseLeave(el);
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
                <div className="absolute bottom-0 flex h-fit w-full flex-col justify-end border-t border-white/40 bg-black/50 p-4 backdrop-blur-sm transition-all">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="truncate text-lg font-bold capitalize text-white">
                        {video.name || "Unnamed Movement"}
                      </h3>
                      {video.level && (
                        <Badge
                          variant="outline"
                          className="border-white/20 bg-black/40 text-xs text-white"
                        >
                          {video.level.charAt(0) +
                            video.level.slice(1).toLowerCase()}
                        </Badge>
                      )}
                    </div>
                    {video.description && (
                      <p className="line-clamp-2 text-xs text-white/80">
                        {video.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-white/60">
                        ID: {video.id?.substring(0, 20) || "N/A"}...
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="col-span-full flex items-center justify-center py-12 text-muted-foreground">
            <p>No videos found</p>
          </div>
        )}
      </div>
    </section>
  );
}
