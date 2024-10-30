import React, { useState } from 'react';
import { Camera, RefreshCw } from 'lucide-react';

export function Monitoring() {
  const [selectedOffice, setSelectedOffice] = useState('all');

  const cameras = [
    {
      id: 1,
      location: 'Bangalore GPO - Main Entrance',
      image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=800&q=80',
      status: 'active',
    },
    {
      id: 2,
      location: 'Bangalore GPO - Sorting Area',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      status: 'active',
    },
    {
      id: 3,
      location: 'Mumbai Central - Lobby',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
      status: 'active',
    },
    {
      id: 4,
      location: 'Delhi HPO - Main Hall',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
      status: 'active',
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Live Monitoring</h1>
          <p className="text-gray-600">Real-time surveillance of post office facilities</p>
        </div>
        <div className="flex gap-4">
          <select
            value={selectedOffice}
            onChange={(e) => setSelectedOffice(e.target.value)}
            className="rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">All Offices</option>
            <option value="bangalore">Bangalore GPO</option>
            <option value="mumbai">Mumbai Central</option>
            <option value="delhi">Delhi HPO</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cameras.map((camera) => (
          <div key={camera.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative aspect-video">
              <img
                src={camera.image}
                alt={camera.location}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 text-white px-3 py-1 rounded-full">
                <Camera className="h-4 w-4" />
                <span className="text-sm">Live</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900">{camera.location}</h3>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-600">Status: {camera.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}