import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowUp, ArrowDown } from 'lucide-react';

const data = [
  { name: 'Jan', cleanliness: 85, greenScore: 78 },
  { name: 'Feb', cleanliness: 88, greenScore: 82 },
  { name: 'Mar', cleanliness: 87, greenScore: 85 },
  { name: 'Apr', cleanliness: 90, greenScore: 88 },
  { name: 'May', cleanliness: 92, greenScore: 90 },
  { name: 'Jun', cleanliness: 94, greenScore: 92 },
];

export function Analytics() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="text-gray-600">Performance metrics and trends analysis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Average Cleanliness Score', value: '89%', change: '+5%', positive: true },
          { label: 'Green Practices Score', value: '86%', change: '+8%', positive: true },
          { label: 'Compliance Rate', value: '94%', change: '-2%', positive: false },
        ].map((metric) => (
          <div key={metric.label} className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-600 mb-2">{metric.label}</h3>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
              <div className={`flex items-center ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                {metric.positive ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                <span className="text-sm">{metric.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Performance Trends</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="cleanliness" stroke="#4F46E5" strokeWidth={2} />
              <Line type="monotone" dataKey="greenScore" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Top Issues</h2>
          <div className="space-y-4">
            {[
              { issue: 'Waste Segregation', count: 24, change: '+12%' },
              { issue: 'Energy Usage', count: 18, change: '-8%' },
              { issue: 'Water Conservation', count: 15, change: '+5%' },
            ].map((issue) => (
              <div key={issue.issue} className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{issue.issue}</h3>
                  <p className="text-sm text-gray-600">{issue.count} incidents</p>
                </div>
                <span className={`text-sm ${
                  issue.change.startsWith('+') ? 'text-red-600' : 'text-green-600'
                }`}>
                  {issue.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recommendations</h2>
          <div className="space-y-4">
            {[
              { title: 'Implement Waste Management Training', priority: 'High' },
              { title: 'Upgrade to Energy Efficient Lighting', priority: 'Medium' },
              { title: 'Install Water Conservation Systems', priority: 'Medium' },
            ].map((rec) => (
              <div key={rec.title} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{rec.title}</h3>
                  <p className="text-sm text-gray-600">Priority: {rec.priority}</p>
                </div>
                <button className="px-3 py-1 text-sm text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}