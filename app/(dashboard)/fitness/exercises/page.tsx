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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Exercises Library</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Exercise
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockExercises.map((exercise) => (
          <div key={exercise.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">{exercise.name}</h3>
            <div className="space-y-2 text-gray-600">
              <p>Category: {exercise.category}</p>
              <p>Equipment: {exercise.equipment}</p>
              <p>Difficulty: {exercise.difficulty}</p>
              <p>Target Muscles: {exercise.muscles.join(", ")}</p>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
                Edit
              </button>
              <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 