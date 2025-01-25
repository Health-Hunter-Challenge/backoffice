import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function UnauthorizedPage() {
	return (
		<div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
			<Card className="w-full max-w-md p-6">
				<div className="flex flex-col items-center gap-6 text-center">
					<h1 className="text-2xl font-bold">Access Denied</h1>
					<p className="text-muted-foreground">
						You do not have permission to access this page. Only administrators can access the dashboard.
					</p>
					<Button asChild>
						<Link href="/login">Back to Login</Link>
					</Button>
				</div>
			</Card>
		</div>
	);
} 