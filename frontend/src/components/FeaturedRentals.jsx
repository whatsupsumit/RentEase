import { motion } from 'framer-motion'
import { Star, MapPin, Clock, Zap } from 'lucide-react'

const FeaturedRentals = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Professional DSLR Camera",
      category: "Electronics",
      price: "2000",
      period: "day",
      rating: 4.9,
      reviews: 127,
      location: "Connaught Place, Delhi",
      image: "📷",
      owner: "Priya S.",
      available: true,
      quickRent: true
    },
    {
      id: 2,
      title: "Mahindra Thar",
      category: "Vehicles",
      price: "3500",
      period: "day",
      rating: 4.8,
      reviews: 89,
      location: "Bandra, Mumbai",
      image: "🚗",
      owner: "Rahul K.",
      available: true,
      quickRent: false
    },
    {
      id: 3,
      title: "Power Drill Kit",
      category: "Tools",
      price: "500",
      period: "day",
      rating: 4.7,
      reviews: 203,
      location: "Koramangala, Bangalore",
      image: "🔧",
      owner: "Suresh L.",
      available: false,
      quickRent: true
    },
    {
      id: 4,
      title: "Storage Unit 10x10",
      category: "Storage",
      price: "1500",
      period: "month",
      rating: 4.9,
      reviews: 45,
      location: "Sector 18, Noida",
      image: "📦",
      owner: "Lakshmi M.",
      available: true,
      quickRent: false
    },
    {
      id: 5,
      title: "Gaming Setup (PC + Monitor)",
      category: "Electronics",
      price: "1200",
      period: "day",
      rating: 4.8,
      reviews: 76,
      location: "Park Street, Kolkata",
      image: "🖥️",
      owner: "Arjun P.",
      available: true,
      quickRent: true
    },
    {
      id: 6,
      title: "Mountain Bike",
      category: "Sports",
      price: "800",
      period: "day",
      rating: 4.6,
      reviews: 134,
      location: "Jubilee Hills, Hyderabad",
      image: "🚴",
      owner: "Sneha W.",
      available: true,
      quickRent: true
    }
  ]

  return (
    <section className="bg-rentease-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary text-white mb-4">
            Featured <span className="text-rentease-yellow">Rentals</span>
          </h2>
          <p className="text-lg text-gray-300 font-inter max-w-2xl mx-auto">
            Discover popular items available for rent in your area. From everyday tools to luxury experiences.
          </p>
        </motion.div>

        {/* Rentals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="card-rentease group cursor-pointer"
            >
              {/* Image/Icon */}
              <div className="relative mb-6">
                <div className="w-full h-48 bg-rentease-lightgray flex items-center justify-center text-6xl border border-rentease-gray">
                  {item.image}
                </div>
                
                {/* Status Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {item.quickRent && (
                    <span className="bg-rentease-yellow text-rentease-black px-2 py-1 text-xs font-bold font-mono flex items-center gap-1">
                      <Zap size={12} />
                      QUICK RENT
                    </span>
                  )}
                  <span className={`px-2 py-1 text-xs font-bold font-mono ${
                    item.available 
                      ? 'bg-green-600 text-white' 
                      : 'bg-red-600 text-white'
                  }`}>
                    {item.available ? 'AVAILABLE' : 'RENTED'}
                  </span>
                </div>

                {/* Category */}
                <div className="absolute top-3 right-3">
                  <span className="bg-rentease-black/80 text-rentease-yellow px-2 py-1 text-xs font-mono">
                    {item.category.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white font-space group-hover:text-rentease-yellow transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-gray-300">
                    <MapPin size={14} />
                    <span className="text-sm font-inter">{item.location}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-rentease-yellow text-rentease-yellow" />
                    <span className="text-white font-mono">{item.rating}</span>
                  </div>
                  <span className="text-gray-400 text-sm font-inter">({item.reviews} reviews)</span>
                </div>

                {/* Owner */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-rentease-yellow rounded-full flex items-center justify-center">
                    <span className="text-rentease-black font-bold text-sm">
                      {item.owner.charAt(0)}
                    </span>
                  </div>
                  <span className="text-gray-300 font-inter">by {item.owner}</span>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-rentease-lightgray">
                  <div>
                    <span className="text-2xl font-bold text-rentease-yellow font-mono">
                      ₹{item.price}
                    </span>
                    <span className="text-gray-400 font-inter">/{item.period}</span>
                  </div>

                  {item.available ? (
                    <motion.button
                      className="btn-primary px-4 py-2 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.quickRent ? 'Rent Now' : 'Request'}
                    </motion.button>
                  ) : (
                    <button className="btn-secondary px-4 py-2 text-sm opacity-50 cursor-not-allowed">
                      Unavailable
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            className="btn-secondary px-8 py-4 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Rentals
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedRentals
