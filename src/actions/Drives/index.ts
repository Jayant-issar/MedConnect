import { Drive } from "@/types/all-types";

export async function getDrives(): Promise<Drive[]> {
  // This is where you would make an API call
  // For now, we'll return dummy data
  const events = [
    {
      id: 1,
      title: "City General Hospital Blood Drive",
      organizer: "City General Hospital",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "City General Hospital, Main Building",
      address: "123 Healthcare Ave, Medical District",
      distance: "0.8 km",
      spots: 50,
      registered: 32,
      urgentTypes: ["O-", "B+"],
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Red Cross Community Blood Drive",
      organizer: "Red Cross",
      date: "March 20, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Community Center Hall",
      address: "456 Elm Street, Downtown",
      distance: "1.5 km",
      spots: 40,
      registered: 18,
      urgentTypes: ["A+", "AB-"],
      image: "https://images.unsplash.com/photo-1563220377-0f2f64e9f532?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "University Blood Donation Camp",
      organizer: "University Health Services",
      date: "March 25, 2024",
      time: "8:00 AM - 2:00 PM",
      location: "Campus Auditorium",
      address: "789 College Ave, Campus Area",
      distance: "2.3 km",
      spots: 100,
      registered: 75,
      urgentTypes: ["O-", "A-"],
      image: "https://images.unsplash.com/photo-1551601651-024f485d7713?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Corporate Blood Donation Initiative",
      organizer: "Healthy Life Corp",
      date: "March 30, 2024",
      time: "11:00 AM - 6:00 PM",
      location: "Healthy Life Headquarters",
      address: "101 Innovation Drive, Business District",
      distance: "3.8 km",
      spots: 60,
      registered: 42,
      urgentTypes: ["B-", "AB+"],
      image: "https://images.unsplash.com/photo-1600077093152-112d3f7896f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Local Blood Drive for Cancer Patients",
      organizer: "Helping Hands Organization",
      date: "April 2, 2024",
      time: "9:30 AM - 3:00 PM",
      location: "Helping Hands Community Center",
      address: "321 Charity Lane, Suburbs",
      distance: "5.2 km",
      spots: 45,
      registered: 29,
      urgentTypes: ["O+", "A-"],
      image: "https://images.unsplash.com/photo-1587329310679-9bdb432f357b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Youth Club Blood Donation Drive",
      organizer: "Youth for Change",
      date: "April 5, 2024",
      time: "12:00 PM - 7:00 PM",
      location: "Community Park Pavilion",
      address: "654 Parkside Drive, West End",
      distance: "2.0 km",
      spots: 30,
      registered: 21,
      urgentTypes: ["B+", "AB-"],
      image: "https://images.unsplash.com/photo-1618841704935-d5a8ff7d4788?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Monthly Blood Drive at City Mall",
      organizer: "City Mall Management",
      date: "April 10, 2024",
      time: "9:00 AM - 8:00 PM",
      location: "City Mall, Level 3",
      address: "789 Commerce Blvd, Uptown",
      distance: "1.0 km",
      spots: 80,
      registered: 65,
      urgentTypes: ["A+", "O-"],
      image: "https://images.unsplash.com/photo-1576765608436-3e783f8be170?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "Blood Drive for Rare Blood Types",
      organizer: "Rare Blood Initiative",
      date: "April 12, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Specialty Clinic",
      address: "500 Rare Blood Lane, East Side",
      distance: "4.0 km",
      spots: 25,
      registered: 10,
      urgentTypes: ["AB-", "B-"],
      image: "https://images.unsplash.com/photo-1562059390-a761a0847682?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      title: "Regional Blood Donation Event",
      organizer: "Regional Health Association",
      date: "April 15, 2024",
      time: "7:00 AM - 1:00 PM",
      location: "Regional Health Center",
      address: "900 Regional Road, Outskirts",
      distance: "6.5 km",
      spots: 70,
      registered: 50,
      urgentTypes: ["O+", "A+"],
      image: "https://images.unsplash.com/photo-1517638851339-4c84bfa00b7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 10,
      title: "Emergency Blood Drive for Flood Victims",
      organizer: "Disaster Relief Organization",
      date: "April 20, 2024",
      time: "8:00 AM - 6:00 PM",
      location: "Disaster Relief Center",
      address: "100 Relief Ave, Downtown",
      distance: "0.5 km",
      spots: 100,
      registered: 90,
      urgentTypes: ["O-", "AB+"],
      image: "https://images.unsplash.com/photo-1615921524429-1d4e9bb704e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];
  
 
  
  return events 
}

