import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Hospital, Droplet } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-medical-light">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-medical-blue mb-4">
            MedFind
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find available hospital beds and blood banks near you in real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Hospital className="w-16 h-16 text-medical-blue mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Find Hospital Beds</h2>
            <p className="text-gray-600 mb-8">
              Search for available hospital beds in your area, including ICU,
              general ward, and emergency beds.
            </p>
            <Button
              onClick={() => navigate("/hospitals")}
              className="w-full bg-medical-blue hover:bg-medical-blue/90"
              size="lg"
            >
              Search Hospitals
            </Button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Droplet className="w-16 h-16 text-medical-red mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Find Blood Banks</h2>
            <p className="text-gray-600 mb-8">
              Check blood availability in nearby blood banks and request the blood
              type you need.
            </p>
            <Button
              onClick={() => navigate("/blood-banks")}
              className="w-full bg-medical-red hover:bg-medical-red/90"
              size="lg"
            >
              Search Blood Banks
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;