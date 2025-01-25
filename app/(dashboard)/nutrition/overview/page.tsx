export default function NutritionOverviewPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Nutrition Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-4">Active Meal Plans</h2>
          <div className="text-3xl font-bold text-blue-600">156</div>
          <p className="text-gray-600 mt-2">+12% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-4">Total Recipes</h2>
          <div className="text-3xl font-bold text-green-600">432</div>
          <p className="text-gray-600 mt-2">+8 new this week</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-4">Active Clients</h2>
          <div className="text-3xl font-bold text-purple-600">89</div>
          <p className="text-gray-600 mt-2">+5 this month</p>
        </div>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="font-semibold mb-4">Popular Recipes This Week</h2>
        <div className="space-y-4">
          {[
            { name: "Protein Smoothie Bowl", views: 245 },
            { name: "Chicken Quinoa Bowl", views: 198 },
            { name: "Greek Yogurt Parfait", views: 167 },
          ].map((recipe, index) => (
            <div key={index} className="flex justify-between items-center">
              <span>{recipe.name}</span>
              <span className="text-gray-600">{recipe.views} views</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 