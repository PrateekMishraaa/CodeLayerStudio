import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Image from "../assets/contact.avif";
import Footer from '../Components/Footer';
import { FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.FullName || !formData.Email || !formData.PhoneNumber || !formData.Message) {
      return toast.error("All Fields are required");
    }

    try {
      setLoading(true);
      const response = await axios.post("https://codelayerstudiobackend.onrender.com/contact-us", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Form has been submitted!");
      setFormData({ FullName: "", Email: "", PhoneNumber: "", Message: "" });
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="h-[60vh] w-full">
        <img src={Image} alt="Contact" className="h-full w-full object-cover" />
      </section>

      {/* Contact Form Section */}
      <section className="w-full bg-gradient-to-r from-white via-blue-50 to-white py-16 px-4 md:px-8 lg:px-20">
        {/* Accent line */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-cyan-400 rounded-full" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-400 uppercase mb-12">
          Contact Me for Any Information
        </h2>

        <div className="max-w-3xl mx-auto bg-gradient-to-br from-white via-blue-50 to-blue-100 border border-blue-500 shadow-2xl rounded-2xl p-10 space-y-6">
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
              <FiUser className="text-blue-700 mr-3 text-xl" />
              <input
                type="text"
                name="FullName"
                value={formData.FullName}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full outline-none text-gray-700"
                required
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
              <FiMail className="text-blue-700 mr-3 text-xl" />
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full outline-none text-gray-700"
                required
              />
            </div>

            {/* Phone Input */}
            <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
              <FiPhone className="text-blue-700 mr-3 text-xl" />
              <input
                type="tel"
                name="PhoneNumber"
                value={formData.PhoneNumber}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full outline-none text-gray-700"
                required
              />
            </div>

            {/* Message Input */}
            <div className="flex items-start border border-gray-300 rounded-lg p-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
              <FiMessageSquare className="text-blue-700 mt-1 mr-3 text-xl" />
              <textarea
                placeholder="Your Message"
                className="w-full outline-none text-gray-700 resize-none"
                rows="5"
                required
                name="Message"
                value={formData.Message}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-800 to-cyan-500 text-white font-bold py-3 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out shadow-md flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Sending..." : "🚀 Send Message"}
            </button>
          </form>
        </div>
      </section>

      <ToastContainer position="top-center" autoClose={3000} />

      <Footer />
    </>
  );
};

export default Contact;
