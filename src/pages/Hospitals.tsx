import { useState, useEffect } from "react";
import { HospitalCard } from "@/components/HospitalCard";
import { dummyHospitals } from "@/data/dummy";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hospitals = () => {
  const navigate = useNavigate();
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
      <div className="container mx-auto max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <h1 className="text-3xl font-bold text-medical-blue mb-8">
          Find Hospital Beds
        </h1>

        <form onSubmit={handleSearch} className="flex gap-2 mb-8">
          <Input
            type="text"
            placeholder="Search hospitals..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" className="bg-medical-blue hover:bg-medical-blue/90">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </form>

        <div className="space-y-4">
          {hospitals.map((hospital) => (
            <HospitalCard key={hospital.id} hospital={hospital} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hospitals;