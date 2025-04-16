export default function FitnessExercisesPage() {
  const mockExercises = [
    {
      id: 1,
      name: "Barbell Squat",
      category: "Legs",
      equipment: "Barbell",
      difficulty: "Intermediate",
      muscles: ["Quadriceps", "Glutes", "Hamstrings"],
    },
    {
      id: 2,
      name: "Push-up",
      category: "Upper Body",
      equipment: "Bodyweight",
      difficulty: "Beginner",
      muscles: ["Chest", "Shoulders", "Triceps"],
    },
    {
      id: 3,
      name: "Deadlift",
      category: "Full Body",
      equipment: "Barbell",
      difficulty: "Advanced",
      muscles: ["Back", "Glutes", "Hamstrings"],
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Exercises Library</h1>
        <button
          type="button"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add Exercise
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockExercises.map((exercise) => (
          <div key={exercise.id} className="rounded-lg bg-white p-4 shadow">
            <h3 className="mb-2 text-lg font-semibold">{exercise.name}</h3>
            <div className="space-y-2 text-gray-600">
              <p>Category: {exercise.category}</p>
              <p>Equipment: {exercise.equipment}</p>
              <p>Difficulty: {exercise.difficulty}</p>
              <p>Target Muscles: {exercise.muscles.join(", ")}</p>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="rounded bg-gray-100 px-3 py-1 hover:bg-gray-200">
                Edit
              </button>
              <button className="rounded bg-gray-100 px-3 py-1 hover:bg-gray-200">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

