import { motion } from 'framer-motion'
import { ArrowRight, Search, Plus } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative bg-rentease-dark min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="heading-primary text-white">
                Rent Smarter with{' '}
                <span className="text-rentease-yellow">RentEase</span>
              </h1>
              <p className="text-xl text-gray-300 font-inter max-w-xl">
                India&apos;s modern peer-to-peer rental platform. Rent anything from tools to vehicles, 
                electronics to storage space. Connect with your community across India.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative max-w-lg"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="What do you need? (e.g., drill, car, laptop...)"
                  className="w-full pl-12 pr-4 py-4 bg-rentease-gray border border-rentease-lightgray text-white placeholder-gray-400 focus:border-rentease-yellow focus:outline-none font-inter"
                />
              </div>
              <motion.button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-primary px-6 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Search
              </motion.button>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="btn-primary flex items-center justify-center gap-2 px-8 py-4"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search size={20} />
                Find a Rental
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                className="btn-secondary flex items-center justify-center gap-2 px-8 py-4"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus size={20} />
                List Your Property
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-rentease-gray"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-rentease-yellow font-mono">50K+</div>
                <div className="text-sm text-gray-400 font-inter">Active Items</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rentease-yellow font-mono">25K+</div>
                <div className="text-sm text-gray-400 font-inter">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rentease-yellow font-mono">100+</div>
                <div className="text-sm text-gray-400 font-inter">Indian Cities</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Rental Category Icons */}
              {[
                { icon: '📱', label: 'Electronics', color: 'bg-rentease-gray' },
                { icon: '🚗', label: 'Vehicles', color: 'bg-rentease-lightgray' },
                { icon: '🔧', label: 'Tools', color: 'bg-rentease-gray' },
                { icon: '🏠', label: 'Properties', color: 'bg-rentease-lightgray' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`${item.color} border border-rentease-lightgray p-8 text-center cursor-pointer group`}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-white font-inter font-medium group-hover:text-rentease-yellow transition-colors">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Crect width='1' height='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
    </section>
  )
}

export default HeroSection
