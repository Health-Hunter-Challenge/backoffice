import { Apple, BicepsFlexed, LayoutDashboard } from "lucide-react";

export const SIDEBAR_DATA = {
	user: {
		name: "Átila de Freitas",
		email: "contact@atiladefreitas.co",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "Fitness",
			url: "/fitness",
			icon: BicepsFlexed,
			isActive: true,
			items: [
				{
					title: "Overview",
					url: "/fitness/overview",
				},
				{
					title: "People",
					url: "/fitness/people",
				},
				{
					title: "Workouts",
					url: "/fitness/workouts",
				},
				{
					title: "Exercises",
					url: "/fitness/exercises",
				},
				{
					title: "Movements",
					url: "/fitness/movements",
				},
			],
		},
		{
			title: "Nutrition",
			url: "/nutrition",
			icon: Apple,
			isActive: true,
			items: [
				{
					title: "Overview",
					url: "/nutrition/overview",
				},
				{
					title: "People",
					url: "/nutrition/people",
				},
				{
					title: "Meals",
					url: "/nutrition/meals",
				},
				{
					title: "Foods",
					url: "/nutrition/foods",
				},
				{
					title: "Recipes",
					url: "/nutrition/recipes",
				},
				{
					title: "Settings",
					url: "/nutrition/settings",
				},
			],
		},
		{
			title: "Settings",
			url: "/settings",
			icon: LayoutDashboard,
			isActive: true,
			items: [],
		},
	],
};
