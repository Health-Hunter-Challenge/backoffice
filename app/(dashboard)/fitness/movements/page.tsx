export default function FitnessMovementsPage() {
  const mockMovements = [
    {
      id: 1,
      name: "Hip Hinge",
      description: "Fundamental movement pattern for deadlifts and kettlebell exercises",
      relatedExercises: ["Deadlift", "Romanian Deadlift", "Good Morning"],
      cues: ["Push hips back", "Keep chest up", "Maintain neutral spine"],
    },
    {
      id: 2,
      name: "Squat Pattern",
      description: "Basic movement pattern for lower body exercises",
      relatedExercises: ["Back Squat", "Front Squat", "Goblet Squat"],
      cues: ["Knees track toes", "Keep chest up", "Weight in heels"],
    },
    {
      id: 3,
      name: "Horizontal Push",
      description: "Upper body pushing movement in horizontal plane",
      relatedExercises: ["Push-up", "Bench Press", "Dumbbell Press"],
      cues: ["Retract shoulder blades", "Elbows at 45°", "Full range of motion"],
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Movement Patterns</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Movement
        </button>
      </div>
      <div className="space-y-4">
        {mockMovements.map((movement) => (
          <div key={movement.id} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{movement.name}</h3>
            <p className="text-gray-600 mb-4">{movement.description}</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Related Exercises:</h4>
                <div className="flex flex-wrap gap-2">
                  {movement.relatedExercises.map((exercise, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {exercise}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Coaching Cues:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {movement.cues.map((cue, index) => (
                    <li key={index}>{cue}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
                Edit
              </button>
              <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 