import { Hospital } from "@/types/medical";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HospitalCardProps {
  hospital: Hospital;
}

export const HospitalCard = ({ hospital }: HospitalCardProps) => {
  const handleCall = () => {
    window.location.href = `tel:${hospital.phone}`;
  };

  const handleNavigate = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${hospital.location.lat},${hospital.location.lng}`,
      "_blank"
    );
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{hospital.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">{hospital.address}</p>
          
          <div className="grid grid-cols-2 gap-2">
            {hospital.beds.map((bed) => (
              <div key={bed.type} className="bg-medical-light p-2 rounded-lg">
                <p className="text-sm font-semibold">{bed.type}</p>
                <p className="text-medical-blue">
                  {bed.available}/{bed.total} available
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-4">
            <Button
              onClick={handleCall}
              className="flex-1 bg-medical-blue hover:bg-medical-blue/90"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
            <Button
              onClick={handleNavigate}
              variant="outline"
              className="flex-1"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Navigate
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};