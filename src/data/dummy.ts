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
  },
  {
    id: "3",
    name: "Community Health Clinic",
    address: "789 Wellness Lane, Wellness Hub",
    phone: "+1 (555) 555-5555",
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    beds: [
      { type: "ICU", available: 3, total: 15 },
      { type: "General", available: 20, total: 100 },
      { type: "Emergency", available: 2, total: 10 },
      { type: "Pediatric", available: 7, total: 25 }
    ]
  },
  {
    id: "4",
    name: "Heart Care Hospital",
    address: "321 Heart Street, Heart Zone",
    phone: "+1 (555) 246-8135",
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
    id: "5",
    name: "Mind Care Hospital",
    address: "654 Mind Avenue, Mind Zone",
    phone: "+1 (555) 369-1470",
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    beds: [
      { type: "ICU", available: 2, total: 15 },
      { type: "General", available: 15, total: 80 },
      { type: "Emergency", available: 4, total: 12 },
      { type: "Pediatric", available: 5, total: 20 }
    ]
  },
  {
    id: "6",
    name: "Body Care Hospital",
    address: "987 Body Street, Body Zone",
    phone: "+1 (555) 369-1470",
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    beds: [
      { type: "ICU", available: 3, total: 15 },
      { type: "General", available: 20, total: 100 },
      { type: "Emergency", available: 2, total: 10 },
      { type: "Pediatric", available: 7, total: 25 }
    ]
  },
  {
    id: "7",
    name: "Dental Care Hospital",
    address: "123 Dental Avenue, Dental Zone",
    phone: "+1 (555) 369-1470",
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
  },
  {
    id: "3",
    name: "Heart Care Blood Bank",
    address: "654 Heart Avenue, Heart Zone",
    phone: "+1 (555) 246-8135",
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    inventory: [
      { bloodGroup: "A+", units: 55 },
      { bloodGroup: "A-", units: 22 },
      { bloodGroup: "B+", units: 48 },
      { bloodGroup: "B-", units: 17 },
      { bloodGroup: "AB+", units: 12 },
      { bloodGroup: "AB-", units: 6 },
      { bloodGroup: "O+", units: 80 },
      { bloodGroup: "O-", units: 35 }
    ]
  },{
    id: "4",
    name: "Heart Care Blood Bank",
    address: "654 Heart Avenue, Heart Zone",
    phone: "+1 (555) 246-8135",
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    inventory: [
      { bloodGroup: "A+", units: 55 },
      { bloodGroup: "A-", units: 22 },
      { bloodGroup: "B+", units: 48 },
      { bloodGroup: "B-", units: 17 },
      { bloodGroup: "AB+", units: 12 },
      { bloodGroup: "AB-", units: 6 },
      { bloodGroup: "O+", units: 80 },
      { bloodGroup: "O-", units: 35 }
    ]
  },
  {
    id: "5",
    name: "Heart Care Blood Bank",
    address: "654 Heart Avenue, Heart Zone",
    phone: "+1 (555) 246-8135",
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    inventory: [
      { bloodGroup: "A+", units: 55 },
      { bloodGroup: "A-", units: 22 },
      { bloodGroup: "B+", units: 48 },
      { bloodGroup: "B-", units: 17 },
      { bloodGroup: "AB+", units: 12 },
      { bloodGroup: "AB-", units: 6 },
      { bloodGroup: "O+", units: 80 },
      { bloodGroup: "O-", units: 35 }
    ]
  },
  {
    id: "6",
    name: "Heart Care Blood Bank",
    address: "654 Heart Avenue, Heart Zone",
    phone: "+1 (555) 246-8135",
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    inventory: [
      { bloodGroup: "A+", units: 55 },
      { bloodGroup: "A-", units: 22 },
      { bloodGroup: "B+", units: 48 },
      { bloodGroup: "B-", units: 17 },
      { bloodGroup: "AB+", units: 12 },
      { bloodGroup: "AB-", units: 6 },
      { bloodGroup: "O+", units: 80 },
      { bloodGroup: "O-", units: 35 }
    ]
  },
  {
    id: "7",
    name: "Heart Care Blood Bank",
    address: "654 Heart Avenue, Heart Zone",
    phone: "+1 (555) 246-8135",
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    inventory: [
      { bloodGroup: "A+", units: 55 },
      { bloodGroup: "A-", units: 22 },
      { bloodGroup: "B+", units: 48 },
      { bloodGroup: "B-", units: 17 },
      { bloodGroup: "AB+", units: 12 },
      { bloodGroup: "AB-", units: 6 },
      { bloodGroup: "O+", units: 80 },
      { bloodGroup: "O-", units: 35 }
    ]
  },
  {
    id: "8",
    name: "Heart Care Blood Bank",
    address: "654 Heart Avenue, Heart Zone",
    phone: "+1 (555) 246-8135",
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    inventory: [
      { bloodGroup: "A+", units: 55 },
      { bloodGroup: "A-", units: 22 },
      { bloodGroup: "B+", units: 48 },
      { bloodGroup: "B-", units: 17 },
      { bloodGroup: "AB+", units: 12 },
      { bloodGroup: "AB-", units: 6 },
      { bloodGroup: "O+", units: 80 },
      { bloodGroup: "O-", units: 35 }
    ]
  }
];