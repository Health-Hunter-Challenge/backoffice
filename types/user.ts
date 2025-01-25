export interface User {
	id: string;
	email: string;
	name: string;
	document: string;
	birthday: string;
	role: "admin" | "user";
	createdAt: string;
	updatedAt: string;
	address?: {
		street: string;
		number: string;
		complement?: string;
		neighborhood: string;
		city: string;
		state: string;
		zipCode: string;
	};
}

export interface AuthResponse {
	user: User;
	token: string;
}
