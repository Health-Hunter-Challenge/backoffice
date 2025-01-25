export default function FitnessWorkoutsPage() {
  const mockWorkouts = [
    {
      id: 1,
      name: "Full Body Strength",
      type: "Strength",
      duration: "60 min",
      difficulty: "Intermediate",
      exercises: 8,
    },
    {
      id: 2,
      name: "HIIT Cardio",
      type: "Cardio",
      duration: "30 min",
      difficulty: "Advanced",
      exercises: 6,
    },
    {
      id: 3,
      name: "Beginner Yoga",
      type: "Flexibility",
      duration: "45 min",
      difficulty: "Beginner",
      exercises: 10,
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Workouts</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Create Workout
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockWorkouts.map((workout) => (
          <div key={workout.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">{workout.name}</h3>
            <div className="space-y-2 text-gray-600">
              <p>Type: {workout.type}</p>
              <p>Duration: {workout.duration}</p>
              <p>Difficulty: {workout.difficulty}</p>
              <p>Exercises: {workout.exercises}</p>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
                Edit
              </button>
              <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 