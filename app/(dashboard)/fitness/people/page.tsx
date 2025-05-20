export default function FitnessPeoplePage() {
  const mockPeople = [
    {
      id: 1,
      name: "John Doe",
      status: "Active",
      plan: "Premium",
      joinDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      status: "Active",
      plan: "Basic",
      joinDate: "2024-01-10",
    },
    {
      id: 3,
      name: "Mike Johnson",
      status: "Inactive",
      plan: "Premium",
      joinDate: "2023-12-20",
    },
  ];

  return (
    <div className="">
      <h1 className="mb-4 text-2xl font-bold">Fitness Members</h1>
      <div className="rounded-lg bg-white shadow">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Plan</th>
              <th className="px-6 py-3 text-left">Join Date</th>
            </tr>
          </thead>
          <tbody>
            {mockPeople.map((person) => (
              <tr key={person.id} className="border-b">
                <td className="px-6 py-4">{person.name}</td>
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-2 py-1 text-sm ${
                      person.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {person.status}
                  </span>
                </td>
                <td className="px-6 py-4">{person.plan}</td>
                <td className="px-6 py-4">{person.joinDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

