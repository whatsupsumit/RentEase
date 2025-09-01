import { useState, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, Bell, Search } from 'lucide-react'
import RentEaseLogo from './RentEaseLogo'
import { NavigationContext } from '../context/NavigationContext'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHighContrast, setIsHighContrast] = useState(false)
  const { currentPage, navigateTo } = useContext(NavigationContext)

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast)
    document.documentElement.classList.toggle('high-contrast')
  }

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Browse Rentals', page: 'browse' },
    { name: 'My Rentals', page: 'my-rentals' },
    { name: 'Post a Rental', page: 'post' }
  ]

  const handleNavigation = (page) => {
    navigateTo(page)
    setIsMenuOpen(false)
  }

  return (
    <motion.nav 
      className="bg-rentease-black border-b border-rentease-gray sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <RentEaseLogo size="md" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white hover:text-rentease-yellow font-medium font-inter transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-white hover:text-rentease-yellow"
            >
              <Search size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-white hover:text-rentease-yellow relative"
            >
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rentease-yellow rounded-full"></span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-white hover:text-rentease-yellow"
            >
              <User size={20} />
            </motion.button>

            {/* High Contrast Toggle */}
            <motion.button
              onClick={toggleHighContrast}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-3 py-1 text-xs"
            >
              {isHighContrast ? 'Normal' : 'High Contrast'}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-white hover:text-rentease-yellow"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-rentease-gray"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block text-white hover:text-rentease-yellow font-medium py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                <div className="flex items-center space-x-4 pt-4 border-t border-rentease-gray">
                  <button className="p-2 text-white hover:text-rentease-yellow">
                    <Search size={20} />
                  </button>
                  <button className="p-2 text-white hover:text-rentease-yellow relative">
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-rentease-yellow rounded-full"></span>
                  </button>
                  <button className="p-2 text-white hover:text-rentease-yellow">
                    <User size={20} />
                  </button>
                  <button
                    onClick={toggleHighContrast}
                    className="btn-secondary px-3 py-1 text-xs"
                  >
                    {isHighContrast ? 'Normal' : 'High Contrast'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default NavBar;
