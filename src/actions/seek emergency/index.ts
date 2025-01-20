import { Emergency } from "@/types/all-types";

// Simulated user emergency requests
let userEmergencies: Emergency[] = [
  {
    id: '1',
    bloodType: 'A+',
    location: 'City General Hospital',
    hospitalName: 'City General Hospital',
    contactName: 'John Doe',
    contactPhone: '123-456-7890',
    urgency: 'high',
    status: 'pending',
    createdAt: '2023-05-01T10:00:00Z',
  },
  {
    id: '2',
    bloodType: 'O-',
    location: 'County Medical Center',
    hospitalName: 'County Medical Center',
    contactName: 'Jane Smith',
    contactPhone: '987-654-3210',
    urgency: 'medium',
    status: 'inProgress',
    createdAt: '2023-04-28T14:30:00Z',
  },
];

export async function getUserEmergencyRequests(): Promise<Emergency[]> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return userEmergencies;
}

export async function createEmergencyRequest(emergencyData: Omit<Emergency, 'id' | 'status'>): Promise<Emergency> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const newEmergency: Emergency = {
    ...emergencyData,
    id: Math.random().toString(36).substr(2, 9),
    status: 'pending',
  };

  userEmergencies = [newEmergency, ...userEmergencies];
  return newEmergency;
}

