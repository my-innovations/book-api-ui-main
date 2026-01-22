import { useState } from "react";
import { Link } from "react-router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          BookInfoApp
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          {/*<Link to="/books" className="hover:text-gray-200">Books</Link>*/}
          <Link to="/add-book" className="hover:text-gray-200">
            Add book
          </Link>
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
          <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black py-3">
          <Link to="/" className="block px-4 py-2 hover:bg-blue-500">
            Home
          </Link>
          <Link to="/books" className="block px-4 py-2 hover:bg-blue-500">
            Books
          </Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-blue-500">
            About
          </Link>
          <button className="w-full text-left px-4 py-2 mt-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
