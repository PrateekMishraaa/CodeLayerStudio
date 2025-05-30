import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PriceImage from "../assets/price.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const AllPrice = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/all-services");
                setData(response.data.allServices);
                setLoading(false);
            } catch (error) {
                console.error(error);
                toast.error("Failed to display data");
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <section className="w-full bg-white">
                <div className="relative h-64 w-full">
                    <img
                        src={PriceImage}
                        alt="Price"
                        className="absolute inset-0 h-full w-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white bg-gradient-to-r from-blue-700 to-cyan-500 px-4 py-2 rounded shadow-lg">
                            All Website Design & Development Prices
                        </h2>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    {loading ? (
                        <p className="text-center text-blue-900 font-semibold">Loading prices...</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    className="border-2 border-blue-800 rounded-xl p-6 shadow-md bg-white hover:shadow-2xl transition duration-300"
                                >
                                    <h3 className="text-xl font-bold text-blue-900 mb-2">{item.Title}</h3>
                                    <p className="text-gray-700 mb-1">📄 Pages: <span className="font-medium">{item.Pages}</span></p>
                                    <p className="text-blue-800 font-bold">💰 Price: ₹{item.Price}</p>
                                    <p className="text-sm text-blue-500 mt-2">🛠 Technologies: {item.Technologies}</p>
                                    <p className="text-gray-700 mt-2">📆 Working Days/Week: <span className="font-medium">{item.WorkingDays}</span></p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
            <ToastContainer />
        </>
    );
};

export default AllPrice;
