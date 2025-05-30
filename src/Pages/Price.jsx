import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Developer from "../assets/developer4.jpg";
import Footer from '../Components/Footer';
import { FiCode } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"
import axios from "axios"
const Price = () => {
  const navigate = useNavigate()
  const [formData,SetFormData] = useState({
    FullName:"",
    Email:"",
    PhoneNumber:"",
    Message:""
  })
  const [loading,setLoading] = useState(false)
  const [error,SetError] = useState(false)
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


  const handleChange=(e)=>{
    SetFormData({...formData,[e.target.name]:e.target.value})
  }
  console.log(handleChange)
  const calculateGst = (amount) => Math.round(amount * 0.18);

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedPlan(null);
    setShowModal(false);
  };


  const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate all fields are filled
  if (!formData.FullName || !formData.Email || !formData.PhoneNumber || !formData.Message) {
    toast.error("All fields are required");
    return;
  }

  try {
    // Send POST request to the server
    const response = await axios.post(
      "https://codelayerstudiobackend.onrender.com/order",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // If successful
    if (response.status === 201 || response.status === 200) {
      toast.success("Order submitted successfully!");
      // Optional: Reset form
      SetFormData({
        FullName: "",
        Email: "",
        PhoneNumber: "",
        Message: ""
      });
    }
    setTimeout(()=>{
      navigate("/")
    },2000)
  } catch (error) {
    console.error(error);
    toast.error("Ooops! Something went wrong");
  }
};


  return (
    <>
      <Navbar />
      <section className="w-full">
        <img src={Developer} alt="developer" className="w-full h-[60vh] object-cover" />
      </section>

      <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-40 py-10">
        <h2 className="text-3xl font-semibold text-center text-[#0b2d5d] mb-10">Our Website Development Packages</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prices.map((item, index) => {
            const gstAmount = calculateGst(item.price);
            const total = item.price + gstAmount;

            return (
              <div key={index} className="rounded-xl p-6 border border-gray-300 shadow-sm hover:shadow-lg transition bg-white">
                <h3 className="text-xl font-bold text-[#0b2d5d] mb-2">{item.title}</h3>
                <p className="text-lg font-semibold text-green-700">Base Price: ₹{item.price}</p>
                <p className="text-sm text-gray-700">+ GST (18%): ₹{gstAmount}</p>
                <p className="text-md font-semibold text-blue-800 mb-2">Total: ₹{total}</p>

                <p className="text-sm text-gray-800 mb-1"><span className="font-semibold">Pages:</span> {item.pages}</p>
                <p className="text-sm text-gray-700 mb-4"><span className="font-semibold">Technologies:</span><br />{item.technologies}</p>
                <p className="text-sm text-blue-700 italic">{item.discount}</p>

                <div className='flex gap-4'>
                  <button
                    onClick={() => openModal(item)}
                    className="mt-4 cursor-pointer w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition"
                  >
                    Order Now
                  </button>
                  <a
                    href="/contact-us"
                    className="mt-4 w-full cursor-pointer text-center bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition"
                  >
                    Contact
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg relative shadow-lg">
            {/* Branding Logo Header */}
            <div className="flex items-center justify-center mb-4">
              <div className="text-lg sm:text-2xl font-extrabold tracking-wide flex items-center gap-1 sm:gap-2">
                <FiCode className="text-blue-500 text-2xl" />
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
                  CodeLayer
                </span>
                <span className="text-blue-900">Studio</span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-center text-xs md:text-sm italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 font-serif mb-2">
              — By Prateek Mishra
            </p>

            {/* Modal Title */}
            <h3 className="text-xl font-bold mb-4 text-center text-[#0b2d5d]">
              Order: {selectedPlan.title}
            </h3>

            {/* Order Form */}
            <form className="space-y-4"onSubmit={handleSubmit}>
              <input
                type="text"
                name='FullName'
                value={formData.FullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                name='Email'
                value={formData.Email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                name='PhoneNumber'
                value={formData.PhoneNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <textarea
                placeholder="Additional Requirements"
                name='Message'
                value={formData.Message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="3"
              />
              <button
                type="submit"
                className="bg-blue-900 text-white px-4 py-2 rounded w-full hover:bg-blue-800 transition"
              >
                Submit Order
              </button>
            </form>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}


      <Footer />
      <ToastContainer/>
    </>
  );
};

export default Price;






























