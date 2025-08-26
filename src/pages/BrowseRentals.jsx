import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const BrowseRentals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "vehicles", name: "Vehicles" },
    { id: "tools", name: "Tools" },
    { id: "homes", name: "Homes" },
    { id: "electronics", name: "Electronics" },
    { id: "furniture", name: "Furniture" },
  ];

  const mockRentals = [
    {
      id: 1,
      title: "Mahindra XUV700",
      category: "vehicles",
      price: 3200,
      period: "day",
      location: "Gurgaon, Haryana",
      rating: 4.9,
      image: "🚗",
    },
    {
      id: 2,
      title: "Modern 2BHK Apartment",
      category: "homes",
      price: 4500,
      period: "night",
      location: "Powai, Mumbai",
      rating: 4.8,
      image: "🏠",
    },
    {
      id: 3,
      title: "Professional Camera Kit",
      category: "electronics",
      price: 1800,
      period: "day",
      location: "Indiranagar, Bangalore",
      rating: 4.7,
      image: "📷",
    },
    {
      id: 4,
      title: "Power Drill Set",
      category: "tools",
      price: 600,
      period: "day",
      location: "Nehru Place, Delhi",
      rating: 4.6,
      image: "🔧",
    },
    {
      id: 5,
      title: "Comfortable Sofa Set",
      category: "furniture",
      price: 800,
      period: "week",
      location: "Salt Lake, Kolkata",
      rating: 4.5,
      image: "🪑",
    },
    {
      id: 6,
      title: "MacBook Pro M3",
      category: "electronics",
      price: 2500,
      period: "day",
      location: "Jubilee Hills, Hyderabad",
      rating: 4.9,
      image: "💻",
    },
  ];

  const filteredRentals = mockRentals.filter((rental) => {
    const matchesSearch = rental.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || rental.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-rentease-dark">
      <NavBar />
      {/* Hero Section */}
      <section className="bg-rentease-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-rentease-yellow mb-6 font-space-grotesk">
              Browse Rentals
            </h1>
            <p className="text-xl text-rentease-light mb-8 font-inter max-w-2xl mx-auto">
              Find the perfect rental from our community of trusted renters
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-rentease-yellow/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search rentals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-rentease-gray border border-rentease-yellow/30 text-rentease-light placeholder-rentease-light/60 focus:outline-none focus:border-rentease-yellow font-inter"
              />
            </div>

            {/* Category Filter */}
            <div className="w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-auto px-4 py-3 bg-rentease-gray border border-rentease-yellow/30 text-rentease-light focus:outline-none focus:border-rentease-yellow font-inter"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-rentease-gray">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Rentals Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRentals.map((rental, index) => (
              <motion.div
                key={rental.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-rentease-gray border border-rentease-yellow/20 hover:border-rentease-yellow/50 transition-all duration-300 group cursor-pointer"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-rentease-dark/50 flex items-center justify-center border-b border-rentease-yellow/20">
                  <span className="text-6xl">{rental.image}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-rentease-yellow font-space-grotesk group-hover:text-rentease-yellow/80 transition-colors">
                      {rental.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-rentease-yellow">★</span>
                      <span className="text-rentease-light font-inter text-sm">{rental.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-rentease-light/80 font-inter text-sm mb-4 capitalize">
                    {rental.category} • {rental.location}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-rentease-yellow font-bold font-space-grotesk">
                      ₹{rental.price}
                      <span className="text-rentease-light font-normal font-inter text-sm">/{rental.period}</span>
                    </div>
                    <button className="bg-rentease-yellow text-rentease-dark px-4 py-2 font-inter font-medium hover:bg-rentease-yellow/90 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredRentals.length === 0 && (
            <div className="text-center py-16">
              <p className="text-rentease-light font-inter text-lg">No rentals found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BrowseRentals;
