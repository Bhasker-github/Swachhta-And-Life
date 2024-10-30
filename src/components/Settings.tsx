import React from 'react';
import { Bell, Camera, Shield, Mail } from 'lucide-react';

export function Settings() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your dashboard preferences and notifications</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Notification Preferences</h2>
          <div className="space-y-6">
            {[
              { icon: Bell, label: 'Alert Notifications', description: 'Receive notifications for new alerts' },
              { icon: Camera, label: 'Camera Status', description: 'Get updates about camera status changes' },
              { icon: Shield, label: 'Security Alerts', description: 'Important security-related notifications' },
              { icon: Mail, label: 'Email Reports', description: 'Receive daily summary reports via email' },
            ].map((setting) => (
              <div key={setting.label} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <setting.icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{setting.label}</h3>
                    <p className="text-sm text-gray-600">{setting.description}</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Alert Thresholds</h2>
          <div className="space-y-6">
            {[
              { label: 'Cleanliness Score', value: 85, min: 0, max: 100 },
              { label: 'Energy Usage', value: 75, min: 0, max: 100 },
              { label: 'Water Conservation', value: 80, min: 0, max: 100 },
              { label: 'Waste Management', value: 90, min: 0, max: 100 },
            ].map((threshold) => (
              <div key={threshold.label} className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-700">{threshold.label}</label>
                  <span className="text-sm text-gray-600">{threshold.value}%</span>
                </div>
                <input
                  type="range"
                  min={threshold.min}
                  max={threshold.max}
                  defaultValue={threshold.value}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">System Settings</h2>
          <div className="space-y-4">
            {[
              { label: 'Data Retention Period', value: '30 days' },
              { label: 'Automatic Reports', value: 'Weekly' },
              { label: 'Camera Resolution', value: '1080p' },
              { label: 'Storage Location', value: 'Local Server' },
            ].map((setting) => (
              <div key={setting.label} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-900">{setting.label}</span>
                <select className="block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm">
                  <option>{setting.value}</option>
                </select>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Access Control</h2>
          <div className="space-y-4">
            {[
              { role: 'Administrator', access: 'Full access to all features' },
              { role: 'Supervisor', access: 'Can view and manage alerts' },
              { role: 'Operator', access: 'View-only access to dashboard' },
              { role: 'Auditor', access: 'Access to reports and analytics' },
            ].map((role) => (
              <div key={role.role} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{role.role}</h3>
                  <button className="text-sm text-indigo-600 hover:text-indigo-900">Edit</button>
                </div>
                <p className="text-sm text-gray-600">{role.access}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}