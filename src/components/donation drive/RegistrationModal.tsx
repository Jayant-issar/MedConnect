import React, { useState } from 'react';
import { Drive } from '@/types/all-types';

interface RegistrationModalProps {
  drive: Drive;
  onClose: () => void;
  onConfirm: (bloodType: string, timeSlot: string) => void;
}

export function RegistrationModal({ drive, onClose, onConfirm }: RegistrationModalProps) {
  const [bloodType, setBloodType] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Register for Blood Donation</h3>
        <div className="mb-4">
          <h4 className="font-medium text-gray-900">{drive.title}</h4>
          <p className="text-sm text-gray-600">{drive.date} • {drive.time}</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Blood Type</label>
            <select
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
            >
              <option value="">Select your blood type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Time Slot</label>
            <select
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
            >
              <option value="">Select a time slot</option>
              <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
              <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
              <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
              <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
              <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
              <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
            </select>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(bloodType, timeSlot)}
            className="flex-1 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Confirm Registration
          </button>
        </div>
      </div>
    </div>
  );
}

