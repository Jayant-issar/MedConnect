import React from 'react';
import { Drive } from '@/types/all-types';
import { Calendar, Clock, MapPin, AlertCircle, Users, CalendarCheck } from 'lucide-react';

interface DriveCardProps {
  drive: Drive;
  onRegister: (drive: Drive) => void;
}

export function DriveCard({ drive, onRegister }: DriveCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img
        src={drive.image || "/placeholder.svg"}
        alt={drive.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{drive.title}</h3>
            <p className="text-sm text-gray-600">{drive.organizer}</p>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {drive.distance}
          </span>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            {drive.date}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            {drive.time}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            {drive.location}
          </div>
        </div>

        {drive.urgentTypes.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center">
              <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
              <span className="text-sm font-medium text-red-600">Urgent need for:</span>
            </div>
            <div className="mt-2 flex gap-2">
              {drive.urgentTypes.map((type: string) => (
                <span
                  key={type}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {drive.registered}/{drive.spots} spots filled
            </span>
            <span>{Math.round((drive.registered / drive.spots) * 100)}% full</span>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 rounded-full h-2"
              style={{ width: `${(drive.registered / drive.spots) * 100}%` }}
            ></div>
          </div>
        </div>

        <button
          onClick={() => onRegister(drive)}
          className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <CalendarCheck className="h-4 w-4 mr-2" />
          Register Now
        </button>
      </div>
    </div>
  );
}

