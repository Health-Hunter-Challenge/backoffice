export default function FitnessOverviewPage() {
  return (
    <div className="">
      <h1 className="mb-4 text-2xl font-bold">Fitness Overview</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="mb-2 font-semibold">Active Members</h2>
          <p className="text-3xl font-bold">245</p>
        </div>
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="mb-2 font-semibold">Total Workouts</h2>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="mb-2 font-semibold">Active Programs</h2>
          <p className="text-3xl font-bold">12</p>
        </div>
      </div>
    </div>
  );
}

