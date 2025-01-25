export default function NutritionFoodsPage() {
  const mockFoods = [
    {
      id: 1,
      name: "Chicken Breast",
      category: "Protein",
      servingSize: "100g",
      nutrition: {
        calories: 165,
        protein: 31,
        carbs: 0,
        fats: 3.6,
        fiber: 0,
      },
      tags: ["Lean Protein", "Low Fat", "High Protein"],
    },
    {
      id: 2,
      name: "Sweet Potato",
      category: "Carbohydrates",
      servingSize: "100g",
      nutrition: {
        calories: 86,
        protein: 1.6,
        carbs: 20,
        fats: 0.1,
        fiber: 3,
      },
      tags: ["Complex Carbs", "High Fiber", "Vitamin A"],
    },
    {
      id: 3,
      name: "Avocado",
      category: "Fats",
      servingSize: "100g",
      nutrition: {
        calories: 160,
        protein: 2,
        carbs: 8.5,
        fats: 14.7,
        fiber: 6.7,
      },
      tags: ["Healthy Fats", "High Fiber", "Potassium"],
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Food Database</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Food
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Food
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Serving
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nutrition (per serving)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tags
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockFoods.map((food) => (
              <tr key={food.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{food.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100">
                    {food.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {food.servingSize}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    <div>Calories: {food.nutrition.calories}</div>
                    <div className="text-xs text-gray-500">
                      P: {food.nutrition.protein}g | C: {food.nutrition.carbs}g | F:{" "}
                      {food.nutrition.fats}g
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {food.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
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