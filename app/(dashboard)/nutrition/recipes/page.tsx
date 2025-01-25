export default function NutritionRecipesPage() {
  const mockRecipes = [
    {
      id: 1,
      name: "Protein-Packed Quinoa Bowl",
      category: "Main Course",
      prepTime: "25 min",
      difficulty: "Easy",
      servings: 4,
      nutrition: {
        calories: 420,
        protein: 28,
        carbs: 45,
        fats: 18,
      },
      ingredients: [
        "Quinoa",
        "Grilled Chicken",
        "Mixed Vegetables",
        "Avocado",
        "Olive Oil",
      ],
      tags: ["High Protein", "Gluten Free", "Meal Prep Friendly"],
    },
    {
      id: 2,
      name: "Green Smoothie Bowl",
      category: "Breakfast",
      prepTime: "10 min",
      difficulty: "Easy",
      servings: 2,
      nutrition: {
        calories: 310,
        protein: 15,
        carbs: 52,
        fats: 8,
      },
      ingredients: [
        "Spinach",
        "Banana",
        "Greek Yogurt",
        "Almond Milk",
        "Chia Seeds",
      ],
      tags: ["Vegetarian", "Breakfast", "Quick"],
    },
    {
      id: 3,
      name: "Baked Salmon with Roasted Vegetables",
      category: "Main Course",
      prepTime: "35 min",
      difficulty: "Intermediate",
      servings: 3,
      nutrition: {
        calories: 480,
        protein: 35,
        carbs: 25,
        fats: 28,
      },
      ingredients: [
        "Salmon Fillet",
        "Sweet Potato",
        "Broccoli",
        "Lemon",
        "Herbs",
      ],
      tags: ["High Protein", "Omega 3", "Low Carb"],
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Recipe Library</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Create Recipe
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockRecipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{recipe.name}</h3>
                  <p className="text-sm text-gray-500">{recipe.category}</p>
                </div>
                <span className="px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
                  {recipe.difficulty}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Prep Time: {recipe.prepTime}</span>
                  <span>Servings: {recipe.servings}</span>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Nutrition (per serving)</h4>
                  <div className="grid grid-cols-4 gap-2 text-sm">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="font-medium">{recipe.nutrition.calories}</div>
                      <div className="text-xs text-gray-500">kcal</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="font-medium">{recipe.nutrition.protein}g</div>
                      <div className="text-xs text-gray-500">Protein</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="font-medium">{recipe.nutrition.carbs}g</div>
                      <div className="text-xs text-gray-500">Carbs</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="font-medium">{recipe.nutrition.fats}g</div>
                      <div className="text-xs text-gray-500">Fats</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {recipe.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end space-x-2">
                  <button className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded hover:bg-blue-100">
                    View Details
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