import { useEffect, useState } from "react";
import { BloodBankCard } from "@/components/BloodBankCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Loader2 } from "lucide-react";
import { BloodGroup } from "@/types/medical";
import { getBloodBanks } from "@/actions/bloodbank";
import { BloodBank } from "@/types/all-types";

const CACHE_KEY = 'bloodBanksData';
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes

const BloodBanks = () => {
  const [search, setSearch] = useState("");
  const [bloodBanks, setBloodBanks] = useState<BloodBank[]>([]);
  const [filteredBanks, setFilteredBanks] = useState<BloodBank[]>([]);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<BloodGroup | "">("");
  const [minUnits, setMinUnits] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Check cache first
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          const isExpired = Date.now() - timestamp > CACHE_DURATION;
          
          if (!isExpired) {
            setBloodBanks(data);
            setFilteredBanks(data);
            setIsLoading(false);
            return;
          }
        }

        // Fetch fresh data if cache is missing or expired
        const bloodBankRes = await getBloodBanks();
        if (bloodBankRes) {
          setBloodBanks(bloodBankRes.data);
          setFilteredBanks(bloodBankRes.data);
          // Cache the new data
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            data: bloodBankRes.data,
            timestamp: Date.now()
          }));
        }
      } catch (error) {
        console.error('Failed to fetch blood banks:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (bloodBanks.length === 0) return;

    let filtered = bloodBanks;

    // Filter by name
    if (search) {
      filtered = filtered.filter((bank) =>
        bank.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by blood group and minimum units
    if (selectedBloodGroup && minUnits) {
      filtered = filtered.filter((bank) => {
        const bloodInfo = bank.inventory.find(
          (blood) => blood.bloodGroup === selectedBloodGroup
        );
        return bloodInfo && bloodInfo.units >= parseInt(minUnits || "0");
      });
    }

    setFilteredBanks(filtered);
  };

  return (
    <div className="min-h-screen bg-medical-light p-4">
      <div className="container mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-medical-purple to-medical-blue bg-clip-text text-transparent mb-8">
          Find Blood Banks
        </h1>

        <form onSubmit={handleSearch} className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              type="text"
              placeholder="Search blood banks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-white/50 backdrop-blur-sm"
            />
            <select
              value={selectedBloodGroup}
              onChange={(e) => setSelectedBloodGroup(e.target.value as BloodGroup)}
              className="h-10 rounded-md border border-input bg-white/50 px-3 text-base md:text-sm"
            >
              <option value="">Any Blood Group</option>
              <option value="A_POSITIVE">A+</option>
              <option value="A_NEGATIVE">A-</option>
              <option value="B_POSITIVE">B+</option>
              <option value="B_NEGATIVE">B-</option>
              <option value="AB_POSITIVE">AB+</option>
              <option value="AB_NEGATIVE">AB-</option>
              <option value="O_POSITIVE">O+</option>
              <option value="O_NEGATIVE">O-</option>
            </select>
            <Input
              type="number"
              placeholder="Min. units required"
              value={minUnits}
              onChange={(e) => setMinUnits(e.target.value)}
              className="w-full md:w-48 bg-white/50 backdrop-blur-sm"
              min="0"
            />
          </div>
          <Button type="submit" className="w-full md:w-auto bg-medical-red hover:bg-medical-red/90">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </form>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <Loader2 className="w-8 h-8 animate-spin text-medical-red" />
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBanks.map((bloodBank) => (
              <div key={bloodBank.id} className="animate-scale-in">
                <BloodBankCard bloodBank={bloodBank} />
              </div>
            ))}
            {filteredBanks.length === 0 && (
              <p className="text-center text-gray-500 py-8">
                No blood banks found matching your criteria
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BloodBanks;