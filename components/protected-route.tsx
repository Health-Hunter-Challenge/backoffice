"use client";

import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Skeleton } from "./ui/skeleton";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
	const { user, isLoading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!isLoading) {
			if (!user) {
				router.push("/login");
			} else if (user.role !== "ADMIN") {
				router.push("/unauthorized");
			}
		}
	}, [user, isLoading, router]);

	if (isLoading) {
		return (
			<div className="flex flex-col gap-4 p-4">
				<Skeleton className="h-8 w-full max-w-sm" />
				<Skeleton className="h-32 w-full" />
			</div>
		);
	}

	if (!user || user.role !== "ADMIN") {
		return null;
	}

	return <>{children}</>;
}
