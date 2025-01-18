export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export type BedType = 'ICU' | 'General' | 'Emergency' | 'Pediatric';

export interface Hospital {
  id: string;
  name: string;
  address: string;
  phone: string;
  location: {
    lat: number;
    lng: number;
  };
  beds: {
    type: BedType;
    available: number;
    total: number;
  }[];
}

export interface BloodBank {
  id: string;
  name: string;
  address: string;
  phone: string;
  location: {
    lat: number;
    lng: number;
  };
  inventory: {
    bloodGroup: BloodGroup;
    units: number;
  }[];
}