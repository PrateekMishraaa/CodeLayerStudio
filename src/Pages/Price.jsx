// pages/Price.jsx
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Developer from "../assets/developer4.jpg";
import { FiCode } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Price = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

const prices = [
    {
      title: "Static Website",
      price: 9999,
      pages: "10",
      technologies:
        "HTML5, CSS, JavaScript, Bootstrap, Basic Theme, Three Banners in Homepage, Up to 10 page Website, Query form with 6 fields, Social Media Page Linking, 5 Days working",
      discount: "Special discounts for first 100 Clients"
    },
    {
      title: "React Js Website",
      price: 20000,
      pages: "15",
      technologies:
        "HTML5, CSS, JSX, Tailwind CSS, Axios, JavaScript, Bootstrap, UI-Verse.io for Amazing User interface, Up to 15 page Website, Query form with 6 fields, API Integration from Backend server, Social Media Page Linking, 6 Days working",
      discount: "Special discounts for first 100 Clients"
    },
    {
      title: "Dynamic Website",
      price: 25000,
      pages: "According to Client Requirement",
      technologies:
        "ReactJs, Axios, React-Toastify, JavaScript, NodeJs, ExpressJs, MongoDB, MySQL, Custom Pages, Separate Contact Page, Social Media Page Linking, 5 Days working",
      discount: "Special discounts for first 100 Clients"
    },
    {
      title: "Next Js Website",
      price: 30000,
      pages: "According to Client Requirement",
      technologies:
        "HTML5, CSS, JSX, Tailwind CSS, Axios, JavaScript, Bootstrap, UI-Verse.io, Up to 15 pages, Query Form, API Integration, Social Media Linking, 6 Days working",
      discount: "Special discounts for first 100 Clients"
    },
    {
      title: "Professional Website",
      price: 15000,
      pages: "According to Client Requirement",
      technologies:
        "HTML5, CSS, JavaScript, Bootstrap, Basic Theme, Three Banners, Up to 10 Pages, Query Form, Social Media Linking, 5 Days working",
      discount: "Special discounts for first 100 Clients"
    },
    {
      title: "WordPress Website",
      price: 20000,
      pages: "15",
      technologies: "WooCommerce, WordPress CMS, Plugins, Theme Setup, Basic SEO",
      discount: "Special discounts for first 100 Clients"
    }
  ];

  const calculateGst = (amount) => Math.round(amount * 0.18);

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setFormData((prev) => ({ ...prev, Message: `Interested in ${plan.title}` }));
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ FullName: "", Email: "", PhoneNumber: "", Message: "" });
    setSelectedPlan(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { FullName, Email, PhoneNumber, Message } = formData;

    if (!FullName || !Email || !PhoneNumber || !Message) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "https://codelayerstudiobackend.onrender.com/api",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response)
      if (response.status === 200 || response.status === 201) {
        toast.success("Order submitted successfully!");
        closeModal();
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (error) {
      toast.error("Oops! Something went wrong.",error);
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="w-full">
        <img src={Developer} alt="developer" className="w-full h-[60vh] object-cover" />
      </section>

      <section className="px-4 sm:px-6 md:px-10 lg:px-40 py-10 bg-white">
        <h2 className="text-3xl font-semibold text-center text-[#0b2d5d] mb-10">
          Our Website Development Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prices.map((plan, index) => {
            const gst = calculateGst(plan.price);
            const total = plan.price + gst;

            return (
              <div key={index} className="p-6 border rounded-lg shadow-sm bg-white">
                <h3 className="text-xl font-bold text-[#0b2d5d]">{plan.title}</h3>
                <p>Base Price: ₹{plan.price}</p>
                <p>+ GST (18%): ₹{gst}</p>
                <p className="font-semibold text-blue-800">Total: ₹{total}</p>
                <p><strong>Pages:</strong> {plan.pages}</p>
                <p className="text-sm text-gray-700 mt-2">{plan.technologies}</p>
                <p className="text-blue-700 italic">{plan.discount}</p>
                <div className="flex gap-2 mt-4">
                  <button onClick={() => openModal(plan)} className="w-full bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
                    Order Now
                  </button>
                  <a href="/contact-us" className="w-full text-center bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
                    Contact
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <div className="text-center mb-4">
              <FiCode className="text-blue-500 text-3xl inline-block" />
              <h3 className="text-xl font-semibold mt-2">CodeLayer Studio</h3>
              <p className="text-gray-600">Order {selectedPlan?.title}</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="FullName"
                placeholder="Full Name"
                value={formData.FullName}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                value={formData.Email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="tel"
                name="PhoneNumber"
                placeholder="Phone Number"
                value={formData.PhoneNumber}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <textarea
                name="Message"
                placeholder="Message"
                value={formData.Message}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <div className="flex justify-between mt-4">
                <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                  Submit
                </button>
                <button type="button" onClick={closeModal} className="text-red-500 hover:underline">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Price;
