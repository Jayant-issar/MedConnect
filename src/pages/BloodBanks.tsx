import { useState } from "react";
import { BloodBankCard } from "@/components/BloodBankCard";
import { dummyBloodBanks } from "@/data/dummy";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const BloodBanks = () => {
  const [search, setSearch] = useState("");
  const [bloodBanks, setBloodBanks] = useState(dummyBloodBanks);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = dummyBloodBanks.filter((bank) =>
      bank.name.toLowerCase().includes(search.toLowerCase())
    );
    setBloodBanks(filtered);
  };

  return (
    <div className="min-h-screen bg-medical-light p-4">
      <div className="container mx-auto max-w-4xl animate-fade-in">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-medical-purple to-medical-blue bg-clip-text text-transparent mb-8">
          Find Blood Banks
        </h1>

        <form onSubmit={handleSearch} className="flex gap-2 mb-8">
          <Input
            type="text"
            placeholder="Search blood banks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-white/50 backdrop-blur-sm"
          />
          <Button type="submit" className="bg-medical-red hover:bg-medical-red/90">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </form>

        <div className="space-y-4">
          {bloodBanks.map((bloodBank) => (
            <div key={bloodBank.id} className="animate-scale-in">
              <BloodBankCard bloodBank={bloodBank} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloodBanks;