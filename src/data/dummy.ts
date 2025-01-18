import { BloodBank, Hospital } from "@/types/medical";

export const dummyHospitals: Hospital[] = [
  {
    id: "1",
    name: "City General Hospital",
    address: "123 Healthcare Ave, Medical District",
    phone: "+1 (555) 123-4567",
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    beds: [
      { type: "ICU", available: 5, total: 20 },
      { type: "General", available: 25, total: 100 },
      { type: "Emergency", available: 3, total: 10 },
      { type: "Pediatric", available: 8, total: 15 }
    ]
  },
  {
    id: "2",
    name: "Memorial Medical Center",
    address: "456 Health Street, Care Zone",
    phone: "+1 (555) 987-6543",
    location: {
      lat: 40.7580,
      lng: -73.9855
    },
    beds: [
      { type: "ICU", available: 2, total: 15 },
      { type: "General", available: 15, total: 80 },
      { type: "Emergency", available: 4, total: 12 },
      { type: "Pediatric", available: 5, total: 20 }
    ]
  }
];

export const dummyBloodBanks: BloodBank[] = [
  {
    id: "1",
    name: "Central Blood Bank",
    address: "789 Donation Road, Life Square",
    phone: "+1 (555) 246-8135",
    location: {
      lat: 40.7282,
      lng: -74.0776
    },
    inventory: [
      { bloodGroup: "A+", units: 50 },
      { bloodGroup: "A-", units: 20 },
      { bloodGroup: "B+", units: 45 },
      { bloodGroup: "B-", units: 15 },
      { bloodGroup: "AB+", units: 10 },
      { bloodGroup: "AB-", units: 5 },
      { bloodGroup: "O+", units: 75 },
      { bloodGroup: "O-", units: 30 }
    ]
  },
  {
    id: "2",
    name: "LifeSaver Blood Center",
    address: "321 Vital Street, Health Park",
    phone: "+1 (555) 369-1470",
    location: {
      lat: 40.7549,
      lng: -73.9840
    },
    inventory: [
      { bloodGroup: "A+", units: 40 },
      { bloodGroup: "A-", units: 15 },
      { bloodGroup: "B+", units: 35 },
      { bloodGroup: "B-", units: 10 },
      { bloodGroup: "AB+", units: 8 },
      { bloodGroup: "AB-", units: 3 },
      { bloodGroup: "O+", units: 60 },
      { bloodGroup: "O-", units: 25 }
    ]
  }
];