import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const PostRental = () => {

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    period: "day",
    location: "",
    pickupDelivery: "pickup",
    images: [],
  });
  const [dragActive, setDragActive] = useState(false);

  // Handle file input change
  const handleFiles = (files) => {
    const fileArr = Array.from(files).slice(0, 10 - formData.images.length);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...fileArr],
    }));
  };

  // Drag and drop handlers
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  // Remove image
  const handleRemoveImage = (idx) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== idx),
    }));
  };

  const categories = [
    { id: "vehicles", name: "Vehicles" },
    { id: "tools", name: "Tools" },
    { id: "homes", name: "Homes" },
    { id: "electronics", name: "Electronics" },
    { id: "furniture", name: "Furniture" },
    { id: "sports", name: "Sports & Recreation" },
    { id: "other", name: "Other" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-rentease-dark">
      <NavBar />
      {/* Header */}
      <section className="bg-rentease-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-rentease-yellow mb-6 font-space-grotesk">
              List Your Item
            </h1>
            <p className="text-xl text-rentease-light font-inter max-w-2xl mx-auto">
              Turn your unused items into income by renting them out to others
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-rentease-gray border border-rentease-yellow/20 p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Title */}
              <div className="md:col-span-2">
                <label className="block text-rentease-yellow font-medium font-inter mb-2">
                  Item Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Professional Camera Kit, Mountain Bike, Tesla Model 3"
                  className="w-full px-4 py-3 bg-rentease-dark border border-rentease-yellow/30 text-rentease-light placeholder-rentease-light/60 focus:outline-none focus:border-rentease-yellow font-inter"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-rentease-yellow font-medium font-inter mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-rentease-dark border border-rentease-yellow/30 text-rentease-light focus:outline-none focus:border-rentease-yellow font-inter"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-rentease-dark">
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-rentease-yellow font-medium font-inter mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g., Connaught Place, Delhi"
                  className="w-full px-4 py-3 bg-rentease-dark border border-rentease-yellow/30 text-rentease-light placeholder-rentease-light/60 focus:outline-none focus:border-rentease-yellow font-inter"
                  required
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-rentease-yellow font-medium font-inter mb-2">
                  Price *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 border-rentease-yellow/30 bg-rentease-dark text-rentease-light font-inter">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="0"
                    className="flex-1 px-4 py-3 bg-rentease-dark border border-rentease-yellow/30 text-rentease-light placeholder-rentease-light/60 focus:outline-none focus:border-rentease-yellow font-inter"
                    required
                  />
                </div>
              </div>

              {/* Period */}
              <div>
                <label className="block text-rentease-yellow font-medium font-inter mb-2">
                  Per *
                </label>
                <select
                  name="period"
                  value={formData.period}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-rentease-dark border border-rentease-yellow/30 text-rentease-light focus:outline-none focus:border-rentease-yellow font-inter"
                  required
                >
                  <option value="hour">Hour</option>
                  <option value="day">Day</option>
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                </select>
              </div>

              {/* Pickup/Delivery */}
              <div className="md:col-span-2">
                <label className="block text-rentease-yellow font-medium font-inter mb-2">
                  Pickup/Delivery Options *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="pickupDelivery"
                      value="pickup"
                      checked={formData.pickupDelivery === "pickup"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-rentease-yellow bg-rentease-dark border-rentease-yellow/30 focus:ring-rentease-yellow"
                    />
                    <span className="text-rentease-light font-inter">Pickup Only</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="pickupDelivery"
                      value="delivery"
                      checked={formData.pickupDelivery === "delivery"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-rentease-yellow bg-rentease-dark border-rentease-yellow/30 focus:ring-rentease-yellow"
                    />
                    <span className="text-rentease-light font-inter">Delivery Available</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="pickupDelivery"
                      value="both"
                      checked={formData.pickupDelivery === "both"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-rentease-yellow bg-rentease-dark border-rentease-yellow/30 focus:ring-rentease-yellow"
                    />
                    <span className="text-rentease-light font-inter">Both Options</span>
                  </label>
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-rentease-yellow font-medium font-inter mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Describe your item in detail. Include condition, features, any special instructions, etc."
                  className="w-full px-4 py-3 bg-rentease-dark border border-rentease-yellow/30 text-rentease-light placeholder-rentease-light/60 focus:outline-none focus:border-rentease-yellow font-inter resize-none"
                  required
                />
              </div>


              {/* Image Upload */}
              <div className="md:col-span-2">
                <label className="block text-rentease-yellow font-medium font-inter mb-2">
                  Photos
                </label>
                <form
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed ${dragActive ? 'border-rentease-yellow' : 'border-rentease-yellow/30'} rounded-none p-8 text-center transition-colors bg-rentease-dark`}
                  style={{ position: 'relative' }}
                  onSubmit={e => e.preventDefault()}
                >
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    style={{ display: 'none' }}
                    id="image-upload-input"
                    onChange={e => {
                      if (e.target.files) handleFiles(e.target.files);
                    }}
                    disabled={formData.images.length >= 10}
                  />
                  <div className="space-y-4">
                    <div className="text-4xl text-rentease-yellow">📷</div>
                    <div>
                      <p className="text-rentease-light font-inter">
                        Drag and drop photos here, or
                        <label htmlFor="image-upload-input" className="ml-1 text-rentease-yellow hover:text-rentease-yellow/80 transition-colors font-medium cursor-pointer underline">
                          select from your device
                        </label>
                      </p>
                      <p className="text-rentease-light/60 font-inter text-sm mt-2">
                        Add up to 10 photos. First photo will be the main image.
                      </p>
                    </div>
                    {formData.images.length > 0 && (
                      <div className="flex flex-wrap gap-4 justify-center mt-4">
                        {formData.images.map((img, idx) => (
                          <div key={idx} className="relative group">
                            <img
                              src={typeof img === 'string' ? img : URL.createObjectURL(img)}
                              alt={`Upload Preview ${idx + 1}`}
                              className="w-24 h-24 object-cover border-2 border-rentease-yellow/40 rounded-none shadow"
                            />
                            <button
                              type="button"
                              onClick={() => handleRemoveImage(idx)}
                              className="absolute top-1 right-1 bg-rentease-dark/80 text-rentease-yellow rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Remove"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {dragActive && (
                    <div className="absolute inset-0 bg-rentease-yellow/10 border-2 border-rentease-yellow border-dashed flex items-center justify-center pointer-events-none z-10">
                      <span className="text-rentease-yellow font-bold text-lg font-inter">Drop images here</span>
                    </div>
                  )}
                </form>
              </div>

              {/* Terms */}
              <div className="md:col-span-2">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 mt-1 text-rentease-yellow bg-rentease-dark border-rentease-yellow/30 focus:ring-rentease-yellow"
                  />
                  <span className="text-rentease-light font-inter text-sm">
                    I agree to RentEase&apos;s{" "}
                    <a href="#" className="text-rentease-yellow hover:text-rentease-yellow/80 transition-colors">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-rentease-yellow hover:text-rentease-yellow/80 transition-colors">
                      Privacy Policy
                    </a>
                    . I confirm that I own this item and have the right to rent it out.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-8 py-3 border border-rentease-yellow/30 text-rentease-light font-inter font-medium hover:border-rentease-yellow/50 transition-colors"
                >
                  Save as Draft
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-rentease-yellow text-rentease-dark font-inter font-medium hover:bg-rentease-yellow/90 transition-colors"
                >
                  Publish Listing
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default PostRental;
