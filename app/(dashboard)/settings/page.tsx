export default function SettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">System Settings</h1>

      <div className="space-y-6">
        {/* Account Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value="contact@atiladefreitas.co"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Change Password
              </label>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Update Password
              </button>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Appearance</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Theme
              </label>
              <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sidebar Compact Mode
              </label>
              <button
                type="button"
                className="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                role="switch"
                aria-checked="false"
              >
                <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700">Email Notifications</h3>
                <p className="text-sm text-gray-500">
                  Receive email updates about your account
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

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700">Push Notifications</h3>
                <p className="text-sm text-gray-500">
                  Receive push notifications in your browser
                </p>
              </div>
              <button
                type="button"
                className="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                role="switch"
                aria-checked="false"
              >
                <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-red-600">Danger Zone</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700">Delete Account</h3>
              <p className="text-sm text-gray-500 mb-3">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Delete Account
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
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