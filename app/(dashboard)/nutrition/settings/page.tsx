export default function NutritionSettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Nutrition Settings</h1>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Measurement Units</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Weight Units
              </label>
              <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                <option>Grams (g)</option>
                <option>Ounces (oz)</option>
                <option>Pounds (lbs)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Volume Units
              </label>
              <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                <option>Milliliters (ml)</option>
                <option>Fluid Ounces (fl oz)</option>
                <option>Cups</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Nutritional Goals</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Calorie Goal
              </label>
              <input
                type="number"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                placeholder="2000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Macro Split (%)
              </label>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Protein</label>
                  <input
                    type="number"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    placeholder="30"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Carbs</label>
                  <input
                    type="number"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    placeholder="40"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Fats</label>
                  <input
                    type="number"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    placeholder="30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700">Daily Reminders</h3>
                <p className="text-sm text-gray-500">
                  Get notifications for meal tracking
                </p>
              </div>
              <button
                type="button"
                className="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                role="switch"
                aria-checked="true"
              >
                <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700">Weekly Reports</h3>
                <p className="text-sm text-gray-500">
                  Receive weekly nutrition summaries
                </p>
              </div>
              <button
                type="button"
                className="bg-blue-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                role="switch"
                aria-checked="true"
              >
                <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Cancel
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
} 