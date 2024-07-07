import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import dogPawLogo from "../assets/dog_paw_logo.png";
import "../styles/styles.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white text-black fixed w-[90%] top-0 shadow-md z-10">
      <div className="flex items-center space-x-4">
        <img src={dogPawLogo} alt="Logo" className="h-10" />
        <span className="logo-text text-xl font-bold">
          <span className="first-letter">G</span>local
        </span>
      </div>
      <nav className="hidden md:flex space-x-8">
        <Link to="/" className="hover:text-secondary">
          Home
        </Link>
        <Link to="/categories" className="hover:text-secondary">
          Categories
        </Link>
        <Link to="/" className="hover:text-secondary">
          About Us
        </Link>
        <Link to="/" className="hover:text-secondary">
          Products
        </Link>
        <Link to="/" className="hover:text-secondary">
          Pet Care
        </Link>
        <Link to="#" className="hover:text-secondary">
          Contact
        </Link>
      </nav>
      <div className="hidden md:flex space-x-4">
        <button className="bg-complementary-primary text-white px-4 py-2 rounded">
          Sign In
        </button>
        <Button buttonText={"Register"} />
      </div>
      <div className="md:hidden">
        {/* Mobile menu button */}
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              className={!isMenuOpen ? "block" : "hidden"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              className={isMenuOpen ? "block" : "hidden"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <nav className="absolute top-16 left-0 w-full bg-white shadow-md">
            <Link to="/" className="block px-4 py-2 hover:text-secondary">
              Home
            </Link>
            <Link
              to="/categories"
              className="block px-4 py-2 hover:text-secondary"
            >
              Categories
            </Link>
            <Link to="/" className="block px-4 py-2 hover:text-secondary">
              About Us
            </Link>
            <Link to="/" className="block px-4 py-2 hover:text-secondary">
              Products
            </Link>
            <Link to="/" className="block px-4 py-2 hover:text-secondary">
              Pet Care
            </Link>
            <Link to="#" className="block px-4 py-2 hover:text-secondary">
              Contact
            </Link>
            <button className="block w-full bg-complementary-primary text-white px-4 py-2 rounded">
              Sign In
            </button>
            <Button buttonText={"Register"} />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
