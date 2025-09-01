import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, MapPin, Star, Grid, List, SlidersHorizontal } from 'lucide-react'
import RentEaseNavBar from '../components/RentEaseNavBar'
import RentEaseFooter from '../components/RentEaseFooter'

const BrowseRentalsPage = () => {
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [sortBy, setSortBy] = useState('relevance')

  const categories = [
    'all', 'electronics', 'vehicles', 'tools', 'properties', 
    'sports', 'storage', 'furniture', 'events'
  ]

  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' }
  ]

  // Sample rental data
  const rentals = [
    {
      id: 1,
      title: "MacBook Pro 16\" M2",
      category: "electronics",
      price: 1800,
      period: "day",
      rating: 4.9,
      reviews: 127,
      location: "Bandra, Mumbai",
      image: "💻",
      owner: "Priya K.",
      available: true,
      quickRent: true,
      description: "Latest MacBook Pro with M2 chip, 32GB RAM, 1TB SSD. Perfect for video editing and development work."
    },
    {
      id: 2,
      title: "Mahindra XUV700",
      category: "vehicles",
      price: 4500,
      period: "day",
      rating: 4.8,
      reviews: 89,
      location: "Koramangala, Bangalore",
      image: "🚗",
      owner: "Rajesh R.",
      available: true,
      quickRent: false,
      description: "Luxury SUV with premium features. Great for weekend trips and family outings."
    },
    {
      id: 3,
      title: "Professional Photography Kit",
      category: "electronics",
      price: 2500,
      period: "day",
      rating: 4.9,
      reviews: 156,
      location: "Connaught Place, Delhi",
      image: "📷",
      owner: "Amit P.",
      available: true,
      quickRent: true,
      description: "Complete photography setup with Canon 5D Mark IV, multiple lenses, tripod, and lighting equipment."
    },
    {
      id: 4,
      title: "Cordless Drill Set",
      category: "tools",
      price: 600,
      period: "day",
      rating: 4.7,
      reviews: 203,
      location: "Sector 18, Noida",
      image: "🔧",
      owner: "Vikram L.",
      available: false,
      quickRent: true,
      description: "Professional grade cordless drill with multiple bits and attachments. Perfect for DIY projects."
    },
    {
      id: 5,
      title: "Storage Unit 10x15",
      category: "storage",
      price: 3200,
      period: "month",
      rating: 4.6,
      reviews: 45,
      location: "Whitefield, Bangalore",
      image: "📦",
      owner: "Sneha M.",
      available: true,
      quickRent: false,
      description: "Climate-controlled storage unit with 24/7 access. Ideal for furniture and personal belongings."
    },
    {
      id: 6,
      title: "Mountain Bike - Trek",
      category: "sports",
      price: 800,
      period: "day",
      rating: 4.8,
      reviews: 134,
      location: "Juhu Beach, Mumbai",
      image: "🚴",
      owner: "Kavya W.",
      available: true,
      quickRent: true,
      description: "High-quality mountain bike perfect for trails and city riding. Includes helmet and lock."
    }
  ]

  const filteredRentals = rentals.filter(rental => {
    const matchesSearch = rental.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         rental.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || rental.category === selectedCategory
    const matchesPrice = rental.price >= priceRange[0] && rental.price <= priceRange[1]
    
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div className="min-h-screen bg-rentease-dark">
      <RentEaseNavBar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="heading-secondary text-white mb-4">
            Browse <span className="text-rentease-yellow">Rentals</span>
          </h1>
          <p className="text-gray-300 font-inter text-lg">
            Discover thousands of items available for rent in your area.
          </p>
        </motion.div>

        {/* Search and Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-rentease-gray border border-rentease-lightgray p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for items, brands, or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-rentease-lightgray border border-rentease-lightgray text-white placeholder-gray-400 focus:border-rentease-yellow focus:outline-none font-inter"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-rentease-lightgray border border-rentease-lightgray text-white focus:border-rentease-yellow focus:outline-none font-inter capitalize"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-rentease-lightgray border border-rentease-lightgray text-white focus:border-rentease-yellow focus:outline-none font-inter"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* View Toggle */}
            <div className="flex border border-rentease-lightgray">
              <motion.button
                onClick={() => setViewMode('grid')}
                whileTap={{ scale: 0.95 }}
                className={`p-3 ${viewMode === 'grid' ? 'bg-rentease-yellow text-rentease-black' : 'bg-rentease-lightgray text-white'}`}
              >
                <Grid size={20} />
              </motion.button>
              <motion.button
                onClick={() => setViewMode('list')}
                whileTap={{ scale: 0.95 }}
                className={`p-3 ${viewMode === 'list' ? 'bg-rentease-yellow text-rentease-black' : 'bg-rentease-lightgray text-white'}`}
              >
                <List size={20} />
              </motion.button>
            </div>

            {/* Filters Toggle */}
            <motion.button
              onClick={() => setShowFilters(!showFilters)}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-4 py-3 flex items-center gap-2"
            >
              <SlidersHorizontal size={20} />
              Filters
            </motion.button>
          </div>
        </motion.div>

        {/* Advanced Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-rentease-gray border border-rentease-lightgray p-6 mb-8"
            >
              <h3 className="text-white font-space font-semibold mb-4">Advanced Filters</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-white font-inter mb-2">Price Range (per day)</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full px-3 py-2 bg-rentease-lightgray border border-rentease-lightgray text-white focus:border-rentease-yellow focus:outline-none"
                      placeholder="Min"
                    />
                    <span className="text-gray-400">to</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full px-3 py-2 bg-rentease-lightgray border border-rentease-lightgray text-white focus:border-rentease-yellow focus:outline-none"
                      placeholder="Max"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-inter mb-2">Availability</label>
                  <select className="w-full px-3 py-2 bg-rentease-lightgray border border-rentease-lightgray text-white focus:border-rentease-yellow focus:outline-none">
                    <option>All Items</option>
                    <option>Available Now</option>
                    <option>Quick Rent Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-inter mb-2">Distance</label>
                  <select className="w-full px-3 py-2 bg-rentease-lightgray border border-rentease-lightgray text-white focus:border-rentease-yellow focus:outline-none">
                    <option>Any Distance</option>
                    <option>Within 5 miles</option>
                    <option>Within 10 miles</option>
                    <option>Within 25 miles</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-between items-center mb-6"
        >
          <div className="text-white font-inter">
            <span className="text-rentease-yellow font-mono font-bold">{filteredRentals.length}</span> results found
          </div>
        </motion.div>

        {/* Results Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}
        >
          {filteredRentals.map((rental, index) => (
            <motion.div
              key={rental.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`card-rentease cursor-pointer ${viewMode === 'list' ? 'flex gap-6' : ''}`}
            >
              {/* Image */}
              <div className={`relative ${viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'w-full h-48'} bg-rentease-lightgray flex items-center justify-center text-4xl border border-rentease-lightgray mb-4`}>
                {rental.image}
                
                {/* Status badges */}
                <div className="absolute top-2 left-2 flex gap-2">
                  {rental.quickRent && (
                    <span className="bg-rentease-yellow text-rentease-black px-2 py-1 text-xs font-bold font-mono">
                      QUICK RENT
                    </span>
                  )}
                  <span className={`px-2 py-1 text-xs font-bold font-mono ${
                    rental.available ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                  }`}>
                    {rental.available ? 'AVAILABLE' : 'RENTED'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-white font-space group-hover:text-rentease-yellow transition-colors">
                    {rental.title}
                  </h3>
                  <p className={`text-gray-300 text-sm font-inter ${viewMode === 'list' ? '' : 'line-clamp-2'}`}>
                    {rental.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {rental.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="fill-rentease-yellow text-rentease-yellow" />
                    {rental.rating} ({rental.reviews})
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-rentease-lightgray">
                  <div>
                    <span className="text-xl font-bold text-rentease-yellow font-mono">
                      ₹{rental.price}
                    </span>
                    <span className="text-gray-400 font-inter">/{rental.period}</span>
                  </div>

                  {rental.available ? (
                    <motion.button
                      className="btn-primary px-4 py-2 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {rental.quickRent ? 'Rent Now' : 'Request'}
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
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            className="btn-secondary px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Results
          </motion.button>
        </motion.div>
      </div>

      <RentEaseFooter />
    </div>
  )
}

export default BrowseRentalsPage
