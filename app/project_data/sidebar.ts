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
			url: "#",
			icon: BicepsFlexed,
			isActive: true,
			items: [
				{
					title: "Overview",
					url: "#",
				},
				{
					title: "People",
					url: "#",
				},
				{
					title: "Workouts",
					url: "#",
				},
				{
					title: "Exercises",
					url: "#",
				},
				{
					title: "Movements",
					url: "#",
				},
			],
		},
		{
			title: "Nutrition",
			url: "#",
			icon: Apple,
			isActive: true,
			items: [
				{
					title: "Overview",
					url: "#",
				},
				{
					title: "People",
					url: "#",
				},
				{
					title: "Meals",
					url: "#",
				},
				{
					title: "Foods",
					url: "#",
				},
				{
					title: "Recipes",
					url: "#",
				},
				{
					title: "Settings",
					url: "#",
				},
			],
		},
		{
			title: "Settings",
			url: "#",
			icon: LayoutDashboard,
			isActive: true,
			items: [],
		},
	],
};
