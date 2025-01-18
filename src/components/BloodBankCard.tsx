import { BloodBank } from "@/types/medical";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BloodBankCardProps {
  bloodBank: BloodBank;
}

export const BloodBankCard = ({ bloodBank }: BloodBankCardProps) => {
  const handleCall = () => {
    window.location.href = `tel:${bloodBank.phone}`;
  };

  const handleNavigate = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${bloodBank.location.lat},${bloodBank.location.lng}`,
      "_blank"
    );
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{bloodBank.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">{bloodBank.address}</p>
          
          <div className="grid grid-cols-4 gap-2">
            {bloodBank.inventory.map((blood) => (
              <div key={blood.bloodGroup} className="bg-medical-light p-2 rounded-lg text-center">
                <p className="text-sm font-semibold">{blood.bloodGroup}</p>
                <p className="text-medical-blue">{blood.units}</p>
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