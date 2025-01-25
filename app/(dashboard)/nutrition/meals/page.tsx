export default function NutritionMealsPage() {
  const mockMeals = [
    {
      id: 1,
      name: "High-Protein Breakfast",
      type: "Breakfast",
      calories: 450,
      macros: {
        protein: 35,
        carbs: 45,
        fats: 15,
      },
      ingredients: ["Eggs", "Oatmeal", "Greek Yogurt", "Berries"],
      prepTime: "15 min",
    },
    {
      id: 2,
      name: "Lean Lunch Bowl",
      type: "Lunch",
      calories: 550,
      macros: {
        protein: 40,
        carbs: 55,
        fats: 20,
      },
      ingredients: ["Chicken Breast", "Quinoa", "Mixed Vegetables", "Avocado"],
      prepTime: "20 min",
    },
    {
      id: 3,
      name: "Recovery Dinner",
      type: "Dinner",
      calories: 650,
      macros: {
        protein: 45,
        carbs: 65,
        fats: 25,
      },
      ingredients: ["Salmon", "Sweet Potato", "Broccoli", "Olive Oil"],
      prepTime: "25 min",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Meal Library</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Create Meal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockMeals.map((meal) => (
          <div key={meal.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{meal.name}</h3>
                <span className="text-sm text-gray-500">{meal.type}</span>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {meal.calories} kcal
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Macronutrients</h4>
                <div className="flex justify-between text-sm">
                  <span>Protein: {meal.macros.protein}g</span>
                  <span>Carbs: {meal.macros.carbs}g</span>
                  <span>Fats: {meal.macros.fats}g</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Ingredients</h4>
                <div className="flex flex-wrap gap-2">
                  {meal.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Prep Time: {meal.prepTime}</span>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 