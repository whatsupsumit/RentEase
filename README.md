
# RentEase

RentEase is a sleek, minimal, peer-to-peer rental platform designed for the Indian market. It enables users to easily rent and list houses, vehicles, electronics, and more, with a focus on Indian cities, rupee pricing, and accessibility.


## Features

- **Peer-to-Peer Rentals**: List and rent homes, vehicles, electronics, and more across India.
- **Modern Indian UI**: Minimal, boxy layouts with black/gray and yellow (#FFD700) theme, using Inter, JetBrains Mono, and Space Grotesk fonts.
- **Rupee Pricing**: All prices and transactions are in ₹ (INR), with Indian cities and categories.
- **Booking System**: Effortlessly book rentals with a streamlined process.
- **Admin Dashboard**: Manage your listings, bookings, and earnings.
- **Map Integration**: View property and item locations on an interactive map.
- **Secure Payments**: Integrated payment system for booking confirmation.
- **Accessibility**: High-contrast, responsive, and accessible design for all users.
- **Authentication**: Secure login and sign-up with Firebase.


## Tech Stack

- **Frontend**: React (Vite)
- **State Management**: Redux
- **Routing**: React Router
- **Backend**: Firebase (Auth, Firestore)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion


## Main Routes

- **Home**: `/` - RentEase landing page
- **Browse Rentals**: `/browse` - Explore all available rentals (houses, vehicles, electronics, etc.)
- **My Rentals**: `/my-rentals` - View and manage your own listings and bookings
- **Post Rental**: `/post-rental` - List a new property or item for rent
- **Rental Details**: `/rental/:id` - Detailed view of a specific rental
- **Payment**: `/payment` - Secure payment and booking confirmation
- **Login**: `/login` - User login
- **Sign Up**: `/sign-up` - User registration
- **Admin Dashboard**: `/admin/dashboard` - Manage all listings (admin only)
- **Not Found**: `*` - 404 page


## Screenshots

![Browse Rentals](/public/sample-3.png)
![Rental Details](/public/sample-2.png)
![Post Rental](/public/sample-1.png)



## Installation

1. Download or copy the project files to your local machine.

2. Open a terminal in the project directory.

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```


## Usage

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to use RentEase locally.
