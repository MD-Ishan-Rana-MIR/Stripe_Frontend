import React, { useState } from "react";
import { Link } from "react-router-dom"; // Optional if using React Router
import { Menu, X } from "lucide-react"; // Optional icons (you can use others or remove)

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">MyApp</div>

                <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <Link to="/" className="hover:text-blue-500">Home</Link>
                    <Link to="/about" className="hover:text-blue-500">About</Link>
                    <Link to="/login" className="hover:text-blue-500">Login</Link>
                    <Link to="/register" className="hover:text-blue-500">Registration</Link>
                    <Link to="/payment" className="hover:text-blue-500">Payment</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-gray-700 font-medium">
                    <Link to="/" onClick={toggleMenu} className="block hover:text-blue-500">Home</Link>
                    <Link to="/about" onClick={toggleMenu} className="block hover:text-blue-500">About</Link>
                    <Link to="/login" onClick={toggleMenu} className="block hover:text-blue-500">Login</Link>
                    <Link to="/register" onClick={toggleMenu} className="block hover:text-blue-500">Registration</Link>
                    <Link to="/payment" onClick={toggleMenu} className="block hover:text-blue-500">Payment</Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
