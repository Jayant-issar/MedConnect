import { useState } from "react";
import { dummyHospitals, dummyBloodBanks } from "@/data/dummy";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Navigation, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const nearestHospital = dummyHospitals[0];
  const nearestBloodBank = dummyBloodBanks[0];

  return (
    <div className="min-h-screen bg-medical-light p-4">
      <div className="container mx-auto max-w-4xl space-y-8 animate-fade-in">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-medical-purple to-medical-blue bg-clip-text text-transparent">
          Welcome to MedFind
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-soft">
            <CardHeader>
              <CardTitle className="text-xl text-medical-purple">Nearest Hospital</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-medical-purple mt-1" />
                  <div>
                    <h3 className="font-semibold">{nearestHospital.name}</h3>
                    <p className="text-sm text-medical-neutral-gray">{nearestHospital.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-medical-purple" />
                  <span className="text-sm">Open 24/7</span>
                </div>
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-medical-purple hover:bg-medical-purple/90"
                    onClick={() => window.location.href = `tel:${nearestHospital.phone}`}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-medical-purple text-medical-purple hover:bg-medical-purple/10"
                    onClick={() => window.open(
                      `https://www.google.com/maps/dir/?api=1&destination=${nearestHospital.location.lat},${nearestHospital.location.lng}`,
                      "_blank"
                    )}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Navigate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-soft">
            <CardHeader>
              <CardTitle className="text-xl text-medical-red">Nearest Blood Bank</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-medical-red mt-1" />
                  <div>
                    <h3 className="font-semibold">{nearestBloodBank.name}</h3>
                    <p className="text-sm text-medical-neutral-gray">{nearestBloodBank.address}</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {nearestBloodBank.inventory.slice(0, 4).map((blood) => (
                    <div key={blood.bloodGroup} className="bg-white/50 p-2 rounded-lg text-center">
                      <p className="text-sm font-semibold">{blood.bloodGroup}</p>
                      <p className="text-medical-red">{blood.units}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-medical-red hover:bg-medical-red/90"
                    onClick={() => window.location.href = `tel:${nearestBloodBank.phone}`}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-medical-red text-medical-red hover:bg-medical-red/10"
                    onClick={() => window.open(
                      `https://www.google.com/maps/dir/?api=1&destination=${nearestBloodBank.location.lat},${nearestBloodBank.location.lng}`,
                      "_blank"
                    )}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Navigate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;