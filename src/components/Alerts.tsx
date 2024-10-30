import React from 'react';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const alerts = [
  {
    id: 1,
    office: 'Bangalore GPO',
    issue: 'Cleanliness standards not met in sorting area',
    severity: 'high',
    time: '2 hours ago',
    status: 'pending',
  },
  {
    id: 2,
    office: 'Mumbai Central',
    issue: 'Waste segregation guidelines not followed',
    severity: 'medium',
    time: '4 hours ago',
    status: 'resolved',
  },
  {
    id: 3,
    office: 'Delhi HPO',
    issue: 'Energy usage above threshold',
    severity: 'low',
    time: '6 hours ago',
    status: 'in-progress',
  },
];

export function Alerts() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Alert Management</h1>
        <p className="text-gray-600">Monitor and manage Swachhta and LiFE alerts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Active Alerts', value: '12', color: 'text-red-600' },
          { label: 'In Progress', value: '8', color: 'text-yellow-600' },
          { label: 'Resolved Today', value: '15', color: 'text-green-600' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-600 mb-2">{stat.label}</h3>
            <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold">Recent Alerts</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Office
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Severity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {alerts.map((alert) => (
                <tr key={alert.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{alert.office}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{alert.issue}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      alert.severity === 'high' 
                        ? 'bg-red-100 text-red-800'
                        : alert.severity === 'medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {alert.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {alert.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 text-sm ${
                      alert.status === 'resolved'
                        ? 'text-green-600'
                        : alert.status === 'in-progress'
                        ? 'text-yellow-600'
                        : 'text-red-600'
                    }`}>
                      {alert.status === 'resolved' ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : alert.status === 'in-progress' ? (
                        <Clock className="h-4 w-4" />
                      ) : (
                        <AlertTriangle className="h-4 w-4" />
                      )}
                      {alert.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">View Details</button>
                    {alert.status !== 'resolved' && (
                      <button className="text-green-600 hover:text-green-900">Resolve</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}