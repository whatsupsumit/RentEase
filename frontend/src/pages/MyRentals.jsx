import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const MyRentals = () => {
  const [activeTab, setActiveTab] = useState("my-listings");

  const tabs = [
    { id: "my-listings", name: "My Listings" },
    { id: "rented-items", name: "Items I'm Renting" },
    { id: "earnings", name: "Earnings" },
    { id: "requests", name: "Requests" },
  ];

  const myListings = [
    {
      id: 1,
      title: "Professional Camera Kit",
      category: "Electronics",
      price: 1800,
      period: "day",
      status: "active",
      bookings: 25,
      revenue: 45000,
      image: "📷",
    },
    {
      id: 2,
      title: "Royal Enfield Classic 350",
      category: "Vehicles",
      price: 1200,
      period: "day",
      status: "rented",
      bookings: 18,
      revenue: 21600,
      image: "🏍️",
    },
  ];

  const rentedItems = [
    {
      id: 1,
      title: "Mahindra XUV700",
      owner: "Rohan Sharma",
      rentedFrom: "2024-01-15",
      rentedTo: "2024-01-18",
      totalCost: 9600,
      status: "active",
      image: "🚗",
    },
    {
      id: 2,
      title: "MacBook Pro M3",
      owner: "Priya Patel",
      rentedFrom: "2024-01-10",
      rentedTo: "2024-01-12",
      totalCost: 5000,
      status: "completed",
      image: "💻",
    },
  ];

  const renderMyListings = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-rentease-yellow font-space-grotesk">My Listings</h2>
        <button className="bg-rentease-yellow text-rentease-dark px-6 py-2 font-inter font-medium hover:bg-rentease-yellow/90 transition-colors">
          Add New Listing
        </button>
      </div>

      <div className="grid gap-6">
        {myListings.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-rentease-gray border border-rentease-yellow/20 p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className="text-4xl">{item.image}</span>
                <div>
                  <h3 className="text-xl font-bold text-rentease-yellow font-space-grotesk">{item.title}</h3>
                  <p className="text-rentease-light/80 font-inter">{item.category}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-rentease-yellow font-bold">₹{item.price}/{item.period}</span>
                    <span className={`px-2 py-1 text-xs font-mono ${
                      item.status === 'active' 
                        ? 'bg-rentease-yellow/20 text-rentease-yellow' 
                        : 'bg-rentease-light/20 text-rentease-light'
                    }`}>
                      {item.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-rentease-yellow font-space-grotesk">{item.bookings}</p>
                  <p className="text-rentease-light/80 font-inter text-sm">Total Bookings</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-rentease-yellow font-space-grotesk">₹{item.revenue}</p>
                  <p className="text-rentease-light/80 font-inter text-sm">Total Revenue</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2 mt-4 pt-4 border-t border-rentease-yellow/20">
              <button className="bg-rentease-yellow text-rentease-dark px-4 py-2 font-inter text-sm hover:bg-rentease-yellow/90 transition-colors">
                Edit
              </button>
              <button className="border border-rentease-yellow/30 text-rentease-light px-4 py-2 font-inter text-sm hover:border-rentease-yellow/50 transition-colors">
                View Details
              </button>
              <button className="border border-red-500/30 text-red-400 px-4 py-2 font-inter text-sm hover:border-red-500/50 transition-colors">
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderRentedItems = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-rentease-yellow font-space-grotesk">Items I&apos;m Renting</h2>
      
      <div className="grid gap-6">
        {rentedItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-rentease-gray border border-rentease-yellow/20 p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className="text-4xl">{item.image}</span>
                <div>
                  <h3 className="text-xl font-bold text-rentease-yellow font-space-grotesk">{item.title}</h3>
                  <p className="text-rentease-light/80 font-inter">Rented from {item.owner}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-rentease-light font-inter text-sm">{item.rentedFrom} to {item.rentedTo}</span>
                    <span className={`px-2 py-1 text-xs font-mono ${
                      item.status === 'active' 
                        ? 'bg-rentease-yellow/20 text-rentease-yellow' 
                        : 'bg-green-500/20 text-green-400'
                    }`}>
                      {item.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-rentease-yellow font-space-grotesk">₹{item.totalCost}</p>
                <p className="text-rentease-light/80 font-inter text-sm">Total Cost</p>
              </div>
            </div>
            
            <div className="flex space-x-2 mt-4 pt-4 border-t border-rentease-yellow/20">
              <button className="bg-rentease-yellow text-rentease-dark px-4 py-2 font-inter text-sm hover:bg-rentease-yellow/90 transition-colors">
                Contact Owner
              </button>
              <button className="border border-rentease-yellow/30 text-rentease-light px-4 py-2 font-inter text-sm hover:border-rentease-yellow/50 transition-colors">
                View Details
              </button>
              {item.status === 'completed' && (
                <button className="border border-rentease-yellow/30 text-rentease-light px-4 py-2 font-inter text-sm hover:border-rentease-yellow/50 transition-colors">
                  Leave Review
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderEarnings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-rentease-yellow font-space-grotesk">Earnings Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-rentease-gray border border-rentease-yellow/20 p-6 text-center">
          <p className="text-3xl font-bold text-rentease-yellow font-space-grotesk">₹66,600</p>
          <p className="text-rentease-light/80 font-inter">Total Earnings</p>
        </div>
        <div className="bg-rentease-gray border border-rentease-yellow/20 p-6 text-center">
          <p className="text-3xl font-bold text-rentease-yellow font-space-grotesk">₹8,500</p>
          <p className="text-rentease-light/80 font-inter">This Month</p>
        </div>
        <div className="bg-rentease-gray border border-rentease-yellow/20 p-6 text-center">
          <p className="text-3xl font-bold text-rentease-yellow font-space-grotesk">43</p>
          <p className="text-rentease-light/80 font-inter">Total Bookings</p>
        </div>
      </div>
      
      <div className="bg-rentease-gray border border-rentease-yellow/20 p-6">
        <h3 className="text-xl font-bold text-rentease-yellow font-space-grotesk mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-rentease-yellow/10 last:border-b-0">
              <div>
                <p className="text-rentease-light font-inter">Camera Kit Rental</p>
                <p className="text-rentease-light/60 font-inter text-sm">Jan 15, 2024</p>
              </div>
              <p className="text-rentease-yellow font-bold font-space-grotesk">+₹1,800</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRequests = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-rentease-yellow font-space-grotesk">Rental Requests</h2>
      
      <div className="space-y-4">
        {[1, 2].map((_, index) => (
          <div key={index} className="bg-rentease-gray border border-rentease-yellow/20 p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-rentease-yellow font-space-grotesk">Request for Camera Kit</h3>
                <p className="text-rentease-light font-inter">From: Alex Johnson</p>
                <p className="text-rentease-light/80 font-inter text-sm">Dates: Jan 20-22, 2024</p>
              </div>
              <div className="flex space-x-2 mt-4 md:mt-0">
                <button className="bg-rentease-yellow text-rentease-dark px-4 py-2 font-inter text-sm hover:bg-rentease-yellow/90 transition-colors">
                  Accept
                </button>
                <button className="border border-rentease-yellow/30 text-rentease-light px-4 py-2 font-inter text-sm hover:border-rentease-yellow/50 transition-colors">
                  Decline
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "my-listings":
        return renderMyListings();
      case "rented-items":
        return renderRentedItems();
      case "earnings":
        return renderEarnings();
      case "requests":
        return renderRequests();
      default:
        return renderMyListings();
    }
  };

  return (
    <div className="min-h-screen bg-rentease-dark">
      <NavBar />
      {/* Header */}
      <section className="bg-rentease-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-rentease-yellow mb-6 font-space-grotesk">
              My Dashboard
            </h1>
            <p className="text-xl text-rentease-light font-inter max-w-2xl mx-auto">
              Manage your rentals and track your earnings
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-b border-rentease-yellow/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 font-inter font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-rentease-yellow text-rentease-yellow"
                    : "border-transparent text-rentease-light hover:text-rentease-yellow/80"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </section>
    </div>
  );
};

export default MyRentals;
