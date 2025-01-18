import { useState } from "react";
import { HospitalCard } from "@/components/HospitalCard";
import { dummyHospitals } from "@/data/dummy";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { BedType } from "@/types/medical";

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
      <div className="container mx-auto max-w-4xl animate-fade-in">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-medical-purple to-medical-blue bg-clip-text text-transparent mb-8">
          Find Hospital Beds
        </h1>

        <form onSubmit={handleSearch} className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              type="text"
              placeholder="Search hospitals..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-white/50 backdrop-blur-sm"
            />
            <select
              value={selectedBedType}
              onChange={(e) => setSelectedBedType(e.target.value as BedType)}
              className="h-10 rounded-md border border-input bg-white/50 px-3 text-base md:text-sm"
            >
              <option value="">Any Bed Type</option>
              <option value="ICU">ICU</option>
              <option value="General">General</option>
              <option value="Emergency">Emergency</option>
              <option value="Pediatric">Pediatric</option>
            </select>
            <Input
              type="number"
              placeholder="Min. beds available"
              value={minAvailable}
              onChange={(e) => setMinAvailable(e.target.value)}
              className="w-full md:w-48 bg-white/50 backdrop-blur-sm"
              min="0"
            />
          </div>
          <Button type="submit" className="w-full md:w-auto bg-medical-blue hover:bg-medical-blue/90">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </form>

        <div className="space-y-4">
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