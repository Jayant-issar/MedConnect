export interface BloodInventory {
    id: string;
    bloodGroup: string;
    units: number;
    updatedAt: string;
}
  
export interface BloodBank {
    id: string;
    name: string;
    address: string;
    phone: string;
    latitude: number;
    longitude: number;
    createdAt: string;
    updatedAt: string;
    inventory: BloodInventory[];
}
export type BloodBanksResponse = BloodBank[];

export interface Bed {
    id: string;
    type: string;
    available: number;
    total: number;
    updatedAt: string; // ISO timestamp
  }
  
export interface Hospital {
id: string;
name: string;
address: string;
phone: string;
latitude: number;
longitude: number;
createdAt: string; // ISO timestamp
updatedAt: string; // ISO timestamp
beds: Bed[];
}
  