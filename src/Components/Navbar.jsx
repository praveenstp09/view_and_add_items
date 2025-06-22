import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [cartCount] = useState(0);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-600">
          <Link to="/">Tech</Link>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 uppercase">
          <li>
            <Link to="/products" className="hover:text-orange-600">
              View Products
            </Link>
          </li>
          <li>
            <Link to="/add" className="hover:text-orange-600">
              Add Products
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search products..."
              className="px-3 py-1 pl-9 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <FaSearch className="absolute left-2 text-gray-500" />
          </div>

          {/* User Icon */}
          <FaUser className="text-gray-700 cursor-pointer hover:text-orange-600" />

          {/* Cart Icon */}
          <Link to="/cart" className="relative cursor-pointer">
            <FaShoppingCart className="text-gray-700 hover:text-orange-600" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
