import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Twitter, Instagram, Facebook } from 'lucide-react'
import RentEaseLogo from './RentEaseLogo'

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: 'How it Works', href: '/how-it-works' },
      { name: 'Safety & Trust', href: '/safety' },
      { name: 'Insurance', href: '/insurance' },
      { name: 'Pricing', href: '/pricing' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Community Guidelines', href: '/guidelines' },
      { name: 'Report Issue', href: '/report' }
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Data Protection', href: '/data-protection' }
    ],
    business: [
      { name: 'For Business', href: '/business' },
      { name: 'API Access', href: '/api' },
      { name: 'Partner Program', href: '/partners' },
      { name: 'Bulk Rentals', href: '/bulk' }
    ]
  }

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ]

  return (
    <footer className="bg-rentease-black border-t border-rentease-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <RentEaseLogo size="lg" />
              
              <p className="text-gray-300 font-inter text-lg max-w-md">
                The modern peer-to-peer rental platform connecting communities through shared resources. 
                Rent smarter, earn better, live sustainably.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={18} className="text-rentease-yellow" />
                  <span className="font-inter">hello@rentease.in</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={18} className="text-rentease-yellow" />
                  <span className="font-inter">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={18} className="text-rentease-yellow" />
                  <span className="font-inter">Bangalore, Karnataka 560001</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-rentease-gray border border-rentease-lightgray flex items-center justify-center text-white hover:text-rentease-yellow hover:border-rentease-yellow transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-space font-semibold text-lg mb-6">Platform</h3>
              <ul className="space-y-3">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-rentease-yellow font-inter transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-space font-semibold text-lg mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-rentease-yellow font-inter transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Legal Links */}
              <div>
                <h3 className="text-white font-space font-semibold text-lg mb-6">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-gray-300 hover:text-rentease-yellow font-inter transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Links */}
              <div>
                <h3 className="text-white font-space font-semibold text-lg mb-6">Business</h3>
                <ul className="space-y-3">
                  {footerLinks.business.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-gray-300 hover:text-rentease-yellow font-inter transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-8 border-t border-rentease-gray"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-white font-space font-semibold text-xl mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-300 font-inter">
                Get the latest features, tips, and community updates.
              </p>
            </div>
            
            <div className="flex gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-4 py-3 bg-rentease-gray border border-rentease-lightgray text-white placeholder-gray-400 focus:border-rentease-yellow focus:outline-none font-inter"
              />
              <motion.button
                className="btn-primary px-6 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-6 border-t border-rentease-gray"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 font-mono text-sm">
              © 2025 RentEase. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-gray-400 font-mono text-sm">
              <span>Built with ⚡ by RentEase Team</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All Systems Operational</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
