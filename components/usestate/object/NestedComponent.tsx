"use client";

import { useState } from "react";

type UserSettings = {
  personal: {
    name: string;
    email: string;
  };
  address: {
    city: string;
    country: string;
    zipCode: string;
  };
  preferences: {
    theme: "light" | "dark";
    language: string;
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
    };
  };
};

export default function NestedComponent() {
  const initialSettings: UserSettings = {
    personal: {
      name: "",
      email: "",
    },
    address: {
      city: "",
      country: "",
      zipCode: "",
    },
    preferences: {
      theme: "light",
      language: "en",
      notifications: {
        email: false,
        push: false,
        sms: false,
      },
    },
  };

  const [settings, setSettings] = useState<UserSettings>(initialSettings);

  // TODO: Implement these functions

  const updateName = (name: string) => {
    setSettings({ ...settings, personal: { ...settings.personal, name } });
    // Update settings.personal.name
  };

  const updateEmail = (email: string) => {
    setSettings({ ...settings, personal: { ...settings.personal, email } });
    // Update settings.personal.email
  };

  const updateCity = (city: string) => {
    setSettings({ ...settings, address: { ...settings.address, city } });
    // Update settings.address.city
  };

  const updateCountry = (country: string) => {
    setSettings({ ...settings, address: { ...settings.address, country } });
    // Update settings.address.country
  };

  const updateZipCode = (zipCode: string) => {
    setSettings({ ...settings, address: { ...settings.address, zipCode } });
    // Update settings.address.zipCode
  };

  const updateTheme = (theme: "light" | "dark") => {
    setSettings({
      ...settings,
      preferences: { ...settings.preferences, theme },
    });
    // Update settings.preferences.theme
  };

  const updateLanguage = (language: string) => {
    setSettings({
      ...settings,
      preferences: { ...settings.preferences, language },
    });
    // Update settings.preferences.language
  };

  const toggleEmailNotification = () => {
    setSettings({
      ...settings,
      preferences: {
        ...settings.preferences,
        notifications: {
          ...settings.preferences.notifications,
          email: !settings.preferences.notifications.email,
        },
      },
    });
    // Toggle settings.preferences.notifications.email
  };

  const togglePushNotification = () => {
    setSettings({
      ...settings,
      preferences: {
        ...settings.preferences,
        notifications: {
          ...settings.preferences.notifications,
          push: !settings.preferences.notifications.push,
        },
      },
    });
    // Toggle settings.preferences.notifications.push
  };

  const toggleSmsNotification = () => {
    setSettings({
      ...settings,
      preferences: {
        ...settings.preferences,
        notifications: {
          ...settings.preferences.notifications,
          sms: !settings.preferences.notifications.sms,
        },
      },
    });
    // Toggle settings.preferences.notifications.sms
  };

  const resetPersonal = () => {
    setSettings({ ...settings, personal: { ...initialSettings.personal } });
    // Reset only personal section
  };

  const resetAddress = () => {
    setSettings({ ...settings, address: { ...initialSettings.address } });
    // Reset only address section
  };

  const resetPreferences = () => {
    setSettings({
      ...settings,
      preferences: { ...initialSettings.preferences },
    });
    // Reset only preferences section
  };

  const resetAll = () => {
    setSettings(initialSettings);
    // Reset everything
  };

  return (
    <div className="p-8 max-w-3xl mx-auto font-mono">
      <h1 className="text-3xl font-bold mb-6">⚙️ User Settings</h1>

      {/* ========================================
          PERSONAL SECTION
          ======================================== */}
      <div className="border-2 border-blue-500 p-4 mb-4">
        <h2 className="text-xl font-bold mb-3">👤 Personal Info</h2>

        <div className="space-y-3">
          <div>
            <label className="block font-bold">Name:</label>
            <input
              type="text"
              value={settings.personal.name}
              onChange={(e) => updateName(e.target.value)}
              placeholder="Enter name"
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-bold">Email:</label>
            <input
              type="email"
              value={settings.personal.email}
              onChange={(e) => updateEmail(e.target.value)}
              placeholder="Enter email"
              className="border p-2 w-full"
            />
          </div>
        </div>

        <button onClick={resetPersonal} className="border px-4 py-2 mt-3">
          Reset Personal Info
        </button>
      </div>

      {/* ========================================
          ADDRESS SECTION
          ======================================== */}
      <div className="border-2 border-green-500 p-4 mb-4">
        <h2 className="text-xl font-bold mb-3">🏠 Address</h2>

        <div className="space-y-3">
          <div>
            <label className="block font-bold">City:</label>
            <input
              type="text"
              value={settings.address.city}
              onChange={(e) => updateCity(e.target.value)}
              placeholder="Enter city"
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-bold">Country:</label>
            <input
              type="text"
              value={settings.address.country}
              onChange={(e) => updateCountry(e.target.value)}
              placeholder="Enter country"
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-bold">Zip Code:</label>
            <input
              type="text"
              value={settings.address.zipCode}
              onChange={(e) => updateZipCode(e.target.value)}
              placeholder="Enter zip code"
              className="border p-2 w-full"
            />
          </div>
        </div>

        <button onClick={resetAddress} className="border px-4 py-2 mt-3">
          Reset Address
        </button>
      </div>

      {/* ========================================
          PREFERENCES SECTION
          ======================================== */}
      <div className="border-2 border-purple-500 p-4 mb-4">
        <h2 className="text-xl font-bold mb-3">🎨 Preferences</h2>

        <div className="space-y-3">
          <div>
            <label className="block font-bold mb-2">Theme:</label>
            <div className="flex gap-2">
              <button
                onClick={() => updateTheme("light")}
                className={`border px-4 py-2 ${
                  settings.preferences.theme === "light"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
              >
                ☀️ Light
              </button>
              <button
                onClick={() => updateTheme("dark")}
                className={`border px-4 py-2 ${
                  settings.preferences.theme === "dark"
                    ? "bg-gray-800 text-white"
                    : ""
                }`}
              >
                🌙 Dark
              </button>
            </div>
          </div>

          <div>
            <label className="block font-bold">Language:</label>
            <select
              value={settings.preferences.language}
              onChange={(e) => updateLanguage(e.target.value)}
              className="border p-2 w-full"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>

          <div>
            <p className="font-bold mb-2">Notifications:</p>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={settings.preferences.notifications.email}
                  onChange={toggleEmailNotification}
                />
                <span>Email Notifications</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={settings.preferences.notifications.push}
                  onChange={togglePushNotification}
                />
                <span>Push Notifications</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={settings.preferences.notifications.sms}
                  onChange={toggleSmsNotification}
                />
                <span>SMS Notifications</span>
              </label>
            </div>
          </div>
        </div>

        <button onClick={resetPreferences} className="border px-4 py-2 mt-3">
          Reset Preferences
        </button>
      </div>

      {/* ========================================
          PREVIEW
          ======================================== */}
      <div className="border-2 p-4 mb-4">
        <h2 className="text-xl font-bold mb-3">📋 Settings Preview</h2>
        <pre className="text-sm overflow-auto">
          {JSON.stringify(settings, null, 2)}
        </pre>
      </div>

      {/* ========================================
          RESET ALL
          ======================================== */}
      <button
        onClick={resetAll}
        className="border-2 border-red-500 px-6 py-3 w-full text-lg font-bold"
      >
        Reset All Settings
      </button>
    </div>
  );
}
