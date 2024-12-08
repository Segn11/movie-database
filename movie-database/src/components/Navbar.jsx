import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto">
      {/* Home as the first item */}
      <Link to="/" className="text-2xl font-bold block mb-4">
        Home
      </Link>

      {/* Vertical navigation links */}
      <div className="space-y-4"> {/* Increased space between links */}
        <Link to="/about" className="hover:underline text-lg block">
          About
        </Link>

        <Link to="/add-movie" className="hover:underline text-lg block">
          Add Movie
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
