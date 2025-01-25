"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";
import { getStoredToken, getStoredUser, storeAuthData, clearAuthData } from "@/lib/auth";
import { API_ENDPOINTS } from "@/config/api";

interface AuthContextType {
	user: User | null;
	login: (email: string, password: string) => Promise<void>;
	logout: () => void;
	isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const initializeAuth = async () => {
			const token = getStoredToken();
			const storedUser = getStoredUser();

			if (token && storedUser) {
				try {
					const response = await fetch(API_ENDPOINTS.verify, {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});

					if (!response.ok) {
						throw new Error("Token verification failed");
					}

					const data = await response.json();
					setUser(data.user);
				} catch (error) {
					console.error("Auth initialization failed:", error);
					clearAuthData();
				}
			}
			setIsLoading(false);
		};

		initializeAuth();
	}, []);

	const login = async (email: string, password: string) => {
		try {
			const response = await fetch(API_ENDPOINTS.login, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.message || "Login failed");
			}

			const { token, user: authUser } = await response.json();

			if (authUser.role !== "ADMIN") {
				throw new Error("Only administrators can access the dashboard");
			}

			storeAuthData(token, authUser);
			setUser(authUser);
			router.push("/dashboard");
		} catch (error) {
			clearAuthData();
			throw error;
		}
	};

	const logout = () => {
		clearAuthData();
		setUser(null);
		router.push("/login");
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, isLoading }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
