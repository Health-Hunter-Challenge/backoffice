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
    <div className="">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Workouts</h1>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Create Workout
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockWorkouts.map((workout) => (
          <div key={workout.id} className="rounded-lg bg-white p-4 shadow">
            <h3 className="mb-2 text-lg font-semibold">{workout.name}</h3>
            <div className="space-y-2 text-gray-600">
              <p>Type: {workout.type}</p>
              <p>Duration: {workout.duration}</p>
              <p>Difficulty: {workout.difficulty}</p>
              <p>Exercises: {workout.exercises}</p>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="rounded bg-gray-100 px-3 py-1 hover:bg-gray-200">
                Edit
              </button>
              <button className="rounded bg-gray-100 px-3 py-1 hover:bg-gray-200">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

