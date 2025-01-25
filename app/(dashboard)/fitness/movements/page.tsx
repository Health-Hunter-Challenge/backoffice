"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import useSWR from "swr";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

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
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Movement list</h1>
			</div>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{movements?.map((movement) => (
					<Card key={movement.id} className="p-4">
						<CardContent className="flex gap-4 p-0">
							<div className="w-[40%] h-[10rem]">
								<div className="relative w-full h-full overflow-hidden rounded-lg">
									<Image
										src={movement.url}
										alt={movement.name}
										fill
										className="object-cover"
									/>
								</div>
							</div>
							<div className="flex-1 gap-2 flex-col flex justify-between">
								<span>
									<p className="text-2xl font-bold text-gray-900">
										{movement.name}
									</p>
									<p className="text-sm text-gray-500">
										{movement.description}
									</p>
								</span>
								<Badge className="rounded-sm w-fit">{movement.level}</Badge>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
