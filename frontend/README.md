
# RentEase

RentEase is a sleek, minimal, peer-to-peer rental platform designed for the Indian market. It enables users to easily rent and list houses, vehicles, electronics, and more, with a focus on Indian cities, rupee pricing, and accessibility.


## Features



# RentEase Frontend

React-based frontend for the RentEase rental platform.

## Tech Stack

- **React 18** with Vite build tool
- **Redux Toolkit** for state management
- **React Query** for server state
- **Tailwind CSS** + Radix UI components
- **React Router DOM** for routing
- **React Hook Form** + Zod validation
- **Framer Motion** for animations

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation
```bash
npm install
```

### Environment Setup
Copy `.env.sample` to `.env` and configure:
```bash
cp .env.sample .env
```

Update `.env` with your Django backend URL:
```
VITE_API_BASE_URL=http://localhost:8000/api
```

### Development
```bash
npm run dev
```
Runs on `http://localhost:5173`

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## API Integration

The frontend expects a Django REST API backend with these endpoints:

### Authentication
- `POST /api/auth/register/` - User registration
- `POST /api/auth/login/` - User login (returns JWT tokens)
- `POST /api/auth/logout/` - User logout

### Houses/Rentals
- `GET /api/houses/` - List all houses
- `POST /api/houses/` - Create new house listing
- `GET /api/houses/{id}/` - Get specific house
- `DELETE /api/houses/{id}/` - Delete house

## Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
├── hooks/             # Custom React hooks
├── service/           # API service layer
├── store/             # Redux store and reducers
├── context/           # React context providers
├── lib/               # Utility functions
└── assets/            # Static assets
```

## Key Features

- JWT-based authentication
- Responsive design with Tailwind CSS
- Form validation with React Hook Form + Zod
- Image handling and upload
- Interactive maps with Leaflet
- Toast notifications
- Theme switching support

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
