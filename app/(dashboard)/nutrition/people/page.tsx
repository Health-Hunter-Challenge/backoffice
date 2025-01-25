export default function NutritionPeoplePage() {
  const mockClients = [
    {
      id: 1,
      name: "Sarah Johnson",
      plan: "Weight Loss",
      dietaryRestrictions: ["Gluten-free", "Dairy-free"],
      startDate: "2024-01-10",
      progress: "On Track",
    },
    {
      id: 2,
      name: "Michael Chen",
      plan: "Muscle Gain",
      dietaryRestrictions: ["Vegetarian"],
      startDate: "2024-01-15",
      progress: "Ahead",
    },
    {
      id: 3,
      name: "Emma Wilson",
      plan: "Maintenance",
      dietaryRestrictions: [],
      startDate: "2024-01-05",
      progress: "Behind",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Nutrition Clients</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Client
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Plan</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Dietary Restrictions</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Start Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Progress</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockClients.map((client) => (
              <tr key={client.id}>
                <td className="px-6 py-4">{client.name}</td>
                <td className="px-6 py-4">{client.plan}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {client.dietaryRestrictions.length > 0 ? (
                      client.dietaryRestrictions.map((restriction, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                        >
                          {restriction}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-400">None</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">{client.startDate}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      client.progress === "On Track"
                        ? "bg-green-100 text-green-800"
                        : client.progress === "Ahead"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {client.progress}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
                      View
                    </button>
                    <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 