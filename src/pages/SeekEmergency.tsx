import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { Emergency } from '@/types/all-types';
import { getUserEmergencyRequests } from '@/actions/seek emergency';
import { EmergencyRequestList } from '@/components/seek emergency/EmergencyRequestList';
import { EmergencyRequestModal } from '@/components/seek emergency/EmergencyRequestModal';
import { Button } from "@/components/ui/button";

export default function EmergencyRequests() {
  const [emergencies, setEmergencies] = useState<Emergency[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchEmergencyRequests();
  }, []);

  const fetchEmergencyRequests = async () => {
    setIsLoading(true);
    try {
      const requests = await getUserEmergencyRequests();
      setEmergencies(requests);
    } catch (error) {
      console.error('Error fetching emergency requests:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewRequest = (newEmergency: Emergency) => {
    setEmergencies((prev) => [newEmergency, ...prev]);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Emergency Requests</h1>
          <Button onClick={() => setIsModalOpen(true)} className="bg-red-600 hover:bg-red-700">
            <Plus className="mr-2 h-4 w-4" /> Seek Emergency
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center">Loading emergency requests...</div>
        ) : (
          <EmergencyRequestList emergencies={emergencies} />
        )}

        <EmergencyRequestModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleNewRequest}
        />
      </div>
    </div>
  );
}

