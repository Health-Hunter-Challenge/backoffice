"use client";

import { ChangeEvent, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

interface VideoForm {
  file: File;
  name: string;
  description: string;
  level: string;
}

export default function AddMovementPage() {
  const [videos, setVideos] = useState<VideoForm[]>([]);
  const [uploadStatus, setUploadStatus] = useState<string[]>([]);
  const router = useRouter();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newVideos = Array.from(e.target.files).map((file) => ({
        file,
        name: "",
        description: "",
        level: "",
      }));
      setVideos([...videos, ...newVideos]);
    }
  };

  const updateVideoForm = (
    index: number,
    field: keyof Omit<VideoForm, "file">,
    value: string,
  ) => {
    const updatedVideos = [...videos];
    updatedVideos[index] = { ...updatedVideos[index], [field]: value };
    setVideos(updatedVideos);
  };

  const uploadVideos = async () => {
    setUploadStatus(Array(videos.length).fill("Uploading..."));
    const results: string[] = [];
    let allSuccess = true;
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];
      const formData = new FormData();
      formData.append("file", video.file);
      formData.append("name", video.name);
      formData.append("description", video.description);
      formData.append("level", video.level);
      try {
        const res = await fetch("http://localhost:3000/videos/upload", {
          method: "POST",
          body: formData,
        });
        if (!res.ok) throw new Error("Upload failed");
        const data = await res.json();
        
        // Handle new response format
        if (data.success && data.movement) {
          results[i] = data.movement.url;
          setUploadStatus((prev) => {
            const next = [...prev];
            next[i] = "Uploaded and saved to database!";
            return next;
          });
        } else {
          throw new Error("Upload response format invalid");
        }
      } catch (err) {
        results[i] = "";
        allSuccess = false;
        setUploadStatus((prev) => {
          const next = [...prev];
          next[i] = "Failed";
          return next;
        });
      }
    }
    // Redirect if all uploads succeeded
    if (allSuccess) {
      router.push("/fitness/movements");
    }
  };

  return (
    <div className="container">
      <h1 className="mb-6 text-2xl font-bold">Add New Movements</h1>

      <div className="mb-4">
        <Input
          type="file"
          accept="video/*"
          multiple
          onChange={handleFileChange}
          className="w-full"
        />
      </div>

      <button
        className="mb-4 rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        onClick={uploadVideos}
        disabled={videos.length === 0}
      >
        Upload All Videos
      </button>

      <div className="grid grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Video {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <video
                  src={URL.createObjectURL(video.file)}
                  controls
                  className="w-full rounded-md bg-black object-contain"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <Label htmlFor={`name-${index}`}>Name</Label>
                  <Input
                    id={`name-${index}`}
                    value={video.name}
                    onChange={(e) =>
                      updateVideoForm(index, "name", e.target.value)
                    }
                    placeholder="Movement name"
                  />
                </div>

                <div>
                  <Label htmlFor={`description-${index}`}>Description</Label>
                  <Textarea
                    id={`description-${index}`}
                    value={video.description}
                    onChange={(e) =>
                      updateVideoForm(index, "description", e.target.value)
                    }
                    placeholder="Movement description"
                  />
                </div>

                <div>
                  <Label htmlFor={`level-${index}`}>Level</Label>
                  <Select
                    value={video.level}
                    onValueChange={(value) =>
                      updateVideoForm(index, "level", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BEGINNER">Beginner</SelectItem>
                      <SelectItem value="INTERMEDIATE">Intermediate</SelectItem>
                      <SelectItem value="ADVANCED">Advanced</SelectItem>
                      <SelectItem value="SPECIAL">Special</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {uploadStatus[index] && (
                  <div className="text-sm text-gray-600">{uploadStatus[index]}</div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
