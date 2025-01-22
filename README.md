# Med Connect

Med Connect is a life-saving application that helps users find the nearest medical resources, such as available hospital beds and blood bank supplies. Designed to provide critical information during emergencies, Med Connect ensures that users can quickly locate the medical assistance they need.

## Features

- **Find Nearest Hospital Beds**: Search for hospitals nearby and check the availability of various types of beds (ICU, General, Emergency, Pediatric).
- **Blood Bank Inventory**: Locate blood banks and view the availability of specific blood groups (e.g., A+, O-, AB+).
- **Real-Time Updates**: Get live data on medical resources (if integrated with live APIs).
- **Geolocation Support**: Automatically detect the user’s location to show the closest resources.
- **Contact Options**: Quick access to hospital and blood bank contact details for emergencies.

## Technology Stack

### Frontend
- **Framework**: React.js
- **Styling**: Tailwind CSS for a modern and responsive user interface
- **APIs**: Integration with Google Maps API for geolocation and navigation (optional)

### Backend
- **Framework**: Hono.js (high-performance web framework)
- **Database**: PostgreSQL (managed via Prisma ORM)
- **Hosting**: Deployed on platforms like Vercel (frontend) and Railway/Render (backend)

### Additional Tools
- Prisma for schema modeling and database management
- Environment variables for secure API keys and configuration

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/med-connect.git
   cd med-connect
   ```

2. Install dependencies:
   ```bash
   # For frontend
   cd frontend
   npm install

   # For backend
   cd backend
   npm install
   ```

3. Set up the environment variables:
   - Create a `.env` file in both the `frontend` and `backend` directories.
   - Add the required environment variables (e.g., API keys, database URL).

4. Run the application:
   ```bash
   # Start the backend
   cd backend
   npm run dev

   # Start the frontend
   cd frontend
   npm run dev
   ```

5. Access the application at `http://localhost:3000`.

## Prisma Schema

The application uses Prisma ORM for database management. Here’s the schema for reference:

```prisma
<Insert Prisma schema here if needed>
```

## Contributing

Contributions are welcome! If you’d like to contribute, please:
- Fork the repository.
- Create a feature branch.
- Submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any questions or support, please reach out to:
- **Email**: jayantissa23@gmail.com
- **GitHub**: [Jayant-issar](https://github.com/Jayant-issar)
