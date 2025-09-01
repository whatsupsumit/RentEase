import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Sign up attempt:", formData);
    // Handle sign up logic here
  };

  return (
    <div className="min-h-screen bg-rentease-dark">
      <NavBar />
      
      <div className="flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full"
        >
          <div className="bg-rentease-gray border border-rentease-yellow/20 p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-rentease-yellow font-space-grotesk mb-2">
                Join RentEase
              </h1>
              <p className="text-rentease-light font-inter">
                Create your account and start renting
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-rentease-yellow font-medium font-inter mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-rentease-dark border border-rentease-yellow/30 text-rentease-light placeholder-rentease-light/60 focus:outline-none focus:border-rentease-yellow font-inter"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-rentease-yellow font-medium font-inter mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-rentease-dark border border-rentease-yellow/30 text-rentease-light placeholder-rentease-light/60 focus:outline-none focus:border-rentease-yellow font-inter"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-rentease-yellow font-medium font-inter mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-rentease-dark border border-rentease-yellow/30 text-rentease-light placeholder-rentease-light/60 focus:outline-none focus:border-rentease-yellow font-inter"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-rentease-yellow font-medium font-inter mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-rentease-dark border border-rentease-yellow/30 text-rentease-light placeholder-rentease-light/60 focus:outline-none focus:border-rentease-yellow font-inter"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>

              <div>
                <label className="block text-rentease-yellow font-medium font-inter mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-rentease-dark border border-rentease-yellow/30 text-rentease-light placeholder-rentease-light/60 focus:outline-none focus:border-rentease-yellow font-inter"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div>
                <label className="block text-rentease-yellow font-medium font-inter mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-rentease-dark border border-rentease-yellow/30 text-rentease-light placeholder-rentease-light/60 focus:outline-none focus:border-rentease-yellow font-inter"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <div>
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 mt-1 text-rentease-yellow bg-rentease-dark border-rentease-yellow/30 focus:ring-rentease-yellow"
                    required
                  />
                  <span className="text-rentease-light font-inter text-sm">
                    I agree to RentEase&apos;s{" "}
                    <Link to="/terms" className="text-rentease-yellow hover:text-rentease-yellow/80 transition-colors">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-rentease-yellow hover:text-rentease-yellow/80 transition-colors">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-rentease-yellow text-rentease-dark py-3 font-inter font-medium hover:bg-rentease-yellow/90 transition-colors"
              >
                Create Account
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-rentease-light font-inter">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-rentease-yellow hover:text-rentease-yellow/80 transition-colors font-medium"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
