import { useState } from "react";
import { HospitalCard } from "@/components/HospitalCard";
import { dummyHospitals } from "@/data/dummy";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { BedType } from "@/types/medical";
import SearchBar from "@/components/hospitals/Search-Bar";

const Hospitals = () => {
  const [search, setSearch] = useState("");
  const [hospitals, setHospitals] = useState(dummyHospitals);
  const [selectedBedType, setSelectedBedType] = useState<BedType | "">("");
  const [minAvailable, setMinAvailable] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    let filtered = dummyHospitals;

    // Filter by name
    if (search) {
      filtered = filtered.filter((hospital) =>
        hospital.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by bed type and availability
    if (selectedBedType && minAvailable) {
      filtered = filtered.filter((hospital) => {
        const bedInfo = hospital.beds.find((bed) => bed.type === selectedBedType);
        return bedInfo && bedInfo.available >= parseInt(minAvailable || "0");
      });
    }

    setHospitals(filtered);
  };

  return (
    <div className="min-h-screen bg-medical-light p-4">
      <div className="container mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-medical-purple to-medical-blue bg-clip-text text-transparent mb-8">
          Find Hospital Beds
        </h1>

        
        <SearchBar handleSearch={handleSearch} search={search} setSearch={setSearch} selectedBedType={selectedBedType} setSelectedBedType={setSelectedBedType} minAvailable={minAvailable} setMinAvailable={setMinAvailable} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="animate-scale-in">
              <HospitalCard hospital={hospital} />
            </div>
          ))}
          {hospitals.length === 0 && (
            <p className="text-center text-gray-500 py-8">
              No hospitals found matching your criteria
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hospitals;