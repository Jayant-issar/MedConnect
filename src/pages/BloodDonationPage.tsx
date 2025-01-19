import React, { useState } from 'react';
import { Drive } from '@/types/all-types';
import { getDrives } from '@/actions/Drives';
import { DriveCard } from '@/components/donation drive/DriveCard';
import { SearchBar } from '@/components/donation drive/SearchBar';
import { FilterBar } from '@/components/donation drive/FilterBar';
import { RegistrationModal } from '@/components/donation drive/RegistrationModal';

function DonationDrive() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [selectedDrive, setSelectedDrive] = useState<Drive | null>(null);
  const [drives, setDrives] = useState<Drive[]>([]);

  React.useEffect(() => {
    fetchDrives();
  }, []);

  const fetchDrives = async () => {
    const fetchedDrives = await getDrives();
    setDrives(fetchedDrives);
  };

  const handleFilterChange = (filter: string) => {
    const filteredDrives = drives.filter((drive) => drive.urgentTypes.includes(filter));
    setDrives(filteredDrives);
  };

  const handleSearch = (searchTerm: string) => {
    // You can add logic here to fetch searched drives from an API
  };

  const handleRegister = (drive: Drive) => {
    setSelectedDrive(drive);
    setShowRegisterModal(true);
  };

  const closeModal = () => {
    setShowRegisterModal(false);
    setSelectedDrive(null);
  };

  const confirmRegistration = (bloodType: string, timeSlot: string) => {
    // You can add logic here to submit the registration to an API
    console.log(`Registering for drive: ${selectedDrive?.title}`);
    console.log(`Blood Type: ${bloodType}, Time Slot: ${timeSlot}`);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Blood Donation Drives</h1>
          <p className="mt-2 text-gray-600">Find and register for upcoming blood donation drives in your area</p>
        </div>

        <SearchBar onSearch={handleSearch} />
        <FilterBar selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {drives.map((drive) => (
            <DriveCard key={drive.id} drive={drive} onRegister={handleRegister} />
          ))}
        </div>
      </div>

      {showRegisterModal && selectedDrive && (
        <RegistrationModal
          drive={selectedDrive}
          onClose={closeModal}
          onConfirm={confirmRegistration}
        />
      )}
    </div>
  );
}

export default DonationDrive;

