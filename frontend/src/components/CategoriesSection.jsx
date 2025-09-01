import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CategoriesSection = () => {
  const navigate = useNavigate();
  const categories = [
    {
      id: 1,
      name: "Electronics",
      icon: "📱",
      description: "Cameras, laptops, smartphones, audio equipment, TVs",
      count: "12.3K items",
      popular: true
    },
    {
      id: 2,
      name: "Vehicles",
      icon: "🚗",
      description: "Cars, bikes, scooters, auto-rickshaws, trucks",
      count: "9.8K items",
      popular: true
    },
    {
      id: 3,
      name: "Tools & Equipment",
      icon: "🔧",
      description: "Power tools, construction equipment, DIY gear, machinery",
      count: "8.2K items",
      popular: false
    },
    {
      id: 4,
      name: "Properties",
      icon: "🏠",
      description: "Apartments, houses, office spaces, event venues, PG",
      count: "5.5K items",
      popular: false
    },
    {
      id: 5,
      name: "Sports & Recreation",
      icon: "⚽",
      description: "Cricket gear, gym equipment, outdoor gear, bicycles",
      count: "4.1K items",
      popular: true
    },
    {
      id: 6,
      name: "Storage",
      icon: "📦",
      description: "Storage units, warehouses, godowns, lockers",
      count: "2.8K items",
      popular: false
    },
    {
      id: 7,
      name: "Furniture",
      icon: "🪑",
      description: "Chairs, tables, sofas, office furniture, décor",
      count: "3.5K items",
      popular: false
    },
    {
      id: 8,
      name: "Events & Party",
      icon: "🎉",
      description: "Sound systems, lighting, decorations, banquet halls",
      count: "2.1K items",
      popular: false
    }
  ]

  return (
    <section className="bg-rentease-dark py-20">
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
            Browse by <span className="text-rentease-yellow">Category</span>
          </h2>
          <p className="text-lg text-gray-300 font-inter max-w-2xl mx-auto">
            Find exactly what you need from our diverse range of rental categories.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-rentease-gray border border-rentease-lightgray p-6 cursor-pointer group overflow-hidden"
            >
              {/* Popular Badge */}
              {category.popular && (
                <div className="absolute top-3 right-3">
                  <span className="bg-rentease-yellow text-rentease-black px-2 py-1 text-xs font-bold font-mono">
                    POPULAR
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white font-space group-hover:text-rentease-yellow transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-gray-300 text-sm font-inter leading-relaxed">
                  {category.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-rentease-lightgray">
                  <span className="text-rentease-yellow font-mono text-sm font-bold">
                    {category.count}
                  </span>
                  
                  <motion.div
                    className="flex items-center gap-1 text-white group-hover:text-rentease-yellow transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-inter">Browse</span>
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-rentease-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-rentease-gray border border-rentease-lightgray"
        >
          <h3 className="text-2xl font-semibold text-white font-space mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-300 font-inter mb-6 max-w-md mx-auto">
            Post a request and let the community know what you need. Someone nearby might have it!
          </p>
          <motion.button
            className="btn-primary px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/post-request')}
          >
            Post a Request
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CategoriesSection
