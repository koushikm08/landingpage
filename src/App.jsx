import React from "react";
import { FaRocket, FaMobileAlt, FaServer } from "react-icons/fa";

export default function App() {
  const features = [
    {
      icon: <FaRocket size={30} className="text-blue-600 mb-2" />,
      title: "Fast Performance",
      desc: "Optimized React components for blazing-fast load times.",
    },
    {
      icon: <FaMobileAlt size={30} className="text-blue-600 mb-2" />,
      title: "Responsive Design",
      desc: "Looks perfect on mobile, tablet, and desktop screens.",
    },
    {
      icon: <FaServer size={30} className="text-blue-600 mb-2" />,
      title: "Easy Deployment",
      desc: "Deploy easily using Vercel, Netlify or any cloud platform.",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600">KOUSHIK'S REACTIVE PAGE</h1>
          <div className="space-x-6 text-sm font-medium hidden md:flex">
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Build Modern & Stunning Landing Pages
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl opacity-90">
            Learn, design, and deploy responsive landing pages with React and Tailwind CSS.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About This Project</h2>
          <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
            This landing page was created as a demonstration of frontend skills,
            showcasing responsive design, Tailwind CSS, and React component structure.
            It is fully responsive, modern, and ready for deployment.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch?</h2>
        <p className="mb-6 text-lg md:text-xl">Start building your next project today.</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Deploy Now
        </button>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white py-6 text-center shadow mt-12">
        <p className="text-gray-600">&copy; 2025 StartupX. All rights reserved.</p>
        <p className="text-gray-600">Mobile:+91 9491894662 | Mail: mallelakoshik05@gmail.com </p>
      </footer>
    </div>
  );
}
