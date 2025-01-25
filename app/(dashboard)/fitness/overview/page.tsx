export default function FitnessOverviewPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Fitness Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="font-semibold mb-2">Active Members</h2>
          <p className="text-3xl font-bold">245</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="font-semibold mb-2">Total Workouts</h2>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="font-semibold mb-2">Active Programs</h2>
          <p className="text-3xl font-bold">12</p>
        </div>
      </div>
    </div>
  );
} 