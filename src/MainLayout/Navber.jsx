import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";
import logo from '../assets/logo.png'

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Projects", link: "/projects" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <nav className="sticky top-0 bg-white/10 backdrop-blur-md shadow-md z-50">
            <div className="max-w-8xl mx-auto px-4 flex justify-between items-center h-16">





                <Link
                    to="/"
                    className="text-2xl font-bold text-green-400"
                    onClick={() => setIsOpen(false)}
                >
                    <img className="w-24" src={logo} alt="" />
                </Link>


                {/* desktop */}

                <ul className="hidden md:flex space-x-8 font-medium">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.link}
                                className="text-white hover:text-green-400 transition"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>


                <Link
                    to="/resume"
                    className="hidden md:inline-block bg-green-400 text-black px-4 py-2 rounded-lg shadow-md shadow-white/40 transition"
                >
                    Resume
                </Link>


                {/* Mobile toggle button */}
                <button
                    className="md:hidden text-2xl text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>


            {isOpen && (
                <div className="md:hidden bg-white/10 backdrop-blur-lg shadow-md">
                    <ul className="flex flex-col space-y-4 p-4 font-medium">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.link}
                                    className="block text-white hover:text-green-400 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                to="/resume"
                                className="block bg-green-400 text-black text-center px-4 py-2 rounded-lg hover:bg-green-600 active:bg-green-700 transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navber;
