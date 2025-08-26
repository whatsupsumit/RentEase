import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

const categories = [
  { id: "vehicles", name: "Vehicles" },
  { id: "tools", name: "Tools" },
  { id: "homes", name: "Homes" },
  { id: "electronics", name: "Electronics" },
  { id: "furniture", name: "Furniture" },
  { id: "sports", name: "Sports & Recreation" },
  { id: "other", name: "Other" },
];

const mockUser = { name: "Amit S.", initials: "AS" };

const PostRequest = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [form, setForm] = useState({
    item: "",
    description: "",
    category: "",
  });
  const [requests, setRequests] = useState([
    {
      user: { name: "Priya K.", initials: "PK" },
      item: "Projector",
      description: "Need a projector for a weekend event.",
      category: "electronics",
    },
    {
      user: { name: "Rahul M.", initials: "RM" },
      item: "Camping Tent",
      description: "Looking for a 4-person tent for a trip.",
      category: "sports",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.item || !form.description) return;
    setRequests([
      { user: mockUser, ...form },
      ...requests,
    ]);
    setForm({ item: "", description: "", category: "" });
  };

  return (
    <div className="min-h-screen bg-rentease-dark">
      <NavBar />
      <section className="bg-rentease-gray py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-rentease-yellow mb-4 font-space-grotesk">
            Can’t find what you're looking for?
          </h1>
          <p className="text-lg text-rentease-light font-inter mb-8">
            Post a request and let the community know what you need. Someone nearby might have it!
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-rentease-dark border border-rentease-yellow/20 rounded-none p-6 md:p-8 mb-10 text-left"
          >
            <div className="mb-4">
              <label className="block text-rentease-yellow font-medium font-inter mb-2">
                Item Name *
              </label>
              <input
                type="text"
                name="item"
                value={form.item}
                onChange={handleChange}
                placeholder="e.g., DSLR Camera, Power Drill"
                className="w-full px-4 py-3 bg-rentease-gray border border-rentease-yellow/30 text-rentease-light placeholder-rentease-light/60 focus:outline-none focus:border-rentease-yellow font-inter"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-rentease-yellow font-medium font-inter mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                placeholder="Describe what you need and for how long."
                className="w-full px-4 py-3 bg-rentease-gray border border-rentease-yellow/30 text-rentease-light placeholder-rentease-light/60 focus:outline-none focus:border-rentease-yellow font-inter resize-none"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-rentease-yellow font-medium font-inter mb-2">
                Category (optional)
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-rentease-gray border border-rentease-yellow/30 text-rentease-light focus:outline-none focus:border-rentease-yellow font-inter"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id} className="bg-rentease-dark">
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-rentease-yellow text-rentease-dark font-inter font-medium hover:bg-rentease-yellow/90 transition-colors"
            >
              Post Request
            </button>
          </form>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-rentease-yellow mb-6 font-space-grotesk">
          Community Requests
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {requests.map((req, idx) => (
            <div
              key={idx}
              className="bg-rentease-gray border border-rentease-yellow/20 rounded-none p-6 flex items-start gap-4 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-rentease-yellow flex items-center justify-center text-rentease-dark font-bold text-xl font-mono">
                {req.user.initials}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-rentease-yellow font-space-grotesk text-lg">
                    {req.item}
                  </span>
                  <button
                    className="px-3 py-1 bg-rentease-yellow text-rentease-dark font-inter font-medium rounded-none hover:bg-rentease-yellow/90 transition-colors text-sm"
                    title="Help"
                  >
                    Help
                  </button>
                </div>
                <div className="text-rentease-light font-inter mt-1 text-sm">
                  {req.description}
                </div>
                {req.category && (
                  <div className="mt-2 inline-block px-2 py-1 bg-rentease-yellow/10 text-rentease-yellow font-mono text-xs rounded-none">
                    {categories.find((c) => c.id === req.category)?.name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PostRequest;
