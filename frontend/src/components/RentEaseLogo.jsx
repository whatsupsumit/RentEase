import { motion } from 'framer-motion'

const RentEaseLogo = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  }

  return (
    <motion.div 
      className={`font-space font-bold text-rentease-yellow ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <span className="text-rentease-yellow">Rent</span>
      <span className="text-white font-mono">Ease</span>
    </motion.div>
  )
}

export default RentEaseLogo
