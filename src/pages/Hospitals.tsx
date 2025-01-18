import { useState } from "react";
import { HospitalCard } from "@/components/HospitalCard";
import { dummyHospitals } from "@/data/dummy";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hospitals = () => {
  const [search, setSearch] = useState("");
  const [hospitals, setHospitals] = useState(dummyHospitals);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = dummyHospitals.filter((hospital) =>
      hospital.name.toLowerCase().includes(search.toLowerCase())
    );
    setHospitals(filtered);
  };

  return (
    <div className="min-h-screen bg-medical-light p-4">
      <div className="container mx-auto max-w-4xl animate-fade-in">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-medical-purple to-medical-blue bg-clip-text text-transparent mb-8">
          Find Hospital Beds
        </h1>

        <form onSubmit={handleSearch} className="flex gap-2 mb-8">
          <Input
            type="text"
            placeholder="Search hospitals..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-white/50 backdrop-blur-sm"
          />
          <Button type="submit" className="bg-medical-blue hover:bg-medical-blue/90">
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
        </div>
      </div>
    </div>
  );
};

export default Hospitals;