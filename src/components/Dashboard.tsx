import React from 'react';
import { Camera, AlertTriangle, CheckCircle2, TreePine } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { icon: Camera, label: 'Active Cameras', value: '124' },
    { icon: AlertTriangle, label: 'Active Alerts', value: '3' },
    { icon: CheckCircle2, label: 'Compliance Rate', value: '94%' },
    { icon: TreePine, label: 'Green Score', value: '87%' },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Divisional Office Dashboard</h1>
        <p className="text-gray-600">Monitor Swachhta and LiFE practices across post offices</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="h-6 w-6 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
            </div>
            <h3 className="text-gray-600">{stat.label}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
          <div className="space-y-4">
            {[
              { office: 'Bangalore GPO', issue: 'Cleanliness standards not met', time: '2 hours ago' },
              { office: 'Mumbai Central', issue: 'Waste segregation alert', time: '4 hours ago' },
              { office: 'Delhi HPO', issue: 'Energy usage above threshold', time: '6 hours ago' },
            ].map((alert) => (
              <div key={alert.office} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{alert.office}</h3>
                  <p className="text-sm text-gray-600">{alert.issue}</p>
                </div>
                <span className="text-sm text-gray-500">{alert.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Top Performing Offices</h2>
          <div className="space-y-4">
            {[
              { office: 'Chennai GPO', score: 98, trend: '+2.3%' },
              { office: 'Kolkata Central', score: 96, trend: '+1.8%' },
              { office: 'Hyderabad HPO', score: 95, trend: '+1.5%' },
            ].map((office) => (
              <div key={office.office} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{office.office}</h3>
                  <p className="text-sm text-gray-600">Compliance Score: {office.score}%</p>
                </div>
                <span className="text-sm text-green-600">{office.trend}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}