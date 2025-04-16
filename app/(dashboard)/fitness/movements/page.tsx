"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import useSWR from "swr";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Movement {
  id: string;
  name: string;
  description: string | null;
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "SPECIAL";
  url: string;
  createdAt: string;
  updatedAt: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function FitnessMovementsPage() {
  const {
    data: movements,
    error,
    isLoading,
  } = useSWR<Movement[]>("http://localhost:3000/movements", fetcher);

  if (error) return <div>Failed to load movements</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Movement list</h1>
        <Link href="/fitness/movements/add">
          <Button>Add a movement</Button>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {movements?.map((movement) => (
          <Card key={movement.id} className="p-4">
            <CardContent className="flex gap-4 p-0">
              <div className="h-[10rem] w-[40%]">
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src={movement.url}
                    alt={movement.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between gap-2">
                <span>
                  <p className="text-2xl font-bold text-gray-900">
                    {movement.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {movement.description}
                  </p>
                </span>
                <Badge className="w-fit rounded-sm">{movement.level}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
