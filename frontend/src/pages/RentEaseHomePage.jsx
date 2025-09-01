import { motion } from 'framer-motion'
// import NavBar from '../components/NavBar'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import CategoriesSection from '../components/CategoriesSection'
import FeaturedRentals from '../components/FeaturedRentals'
import RentEaseFooter from '../components/RentEaseFooter'

const RentEaseHomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-rentease-dark"
    >
      {/* Navigation */}
      <NavBar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Categories */}
        <CategoriesSection />
        
        {/* Featured Rentals */}
        <FeaturedRentals />
        
        {/* Additional Sections can be added here */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-rentease-gray py-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="heading-secondary text-white mb-8">
              Why Choose <span className="text-rentease-yellow">RentEase</span>?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🛡️",
                  title: "Safe & Secure",
                  description: "Verified users, secure payments, and comprehensive insurance coverage for peace of mind."
                },
                {
                  icon: "🌍",
                  title: "Community Driven",
                  description: "Connect with your neighbors and build stronger communities through shared resources."
                },
                {
                  icon: "💰",
                  title: "Earn & Save",
                  description: "Make money from items you own, save money on things you need occasionally."
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-rentease-lightgray border border-rentease-gray p-8 text-center"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white font-space mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 font-inter">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      
      {/* Footer */}
      <RentEaseFooter />
    </motion.div>
  )
}

export default RentEaseHomePage
