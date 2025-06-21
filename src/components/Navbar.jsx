import { Link } from "react-router-dom";
import logo from "../assets/logo.avif";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-4 bg-white py-3 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-15 w-15" />
            <div className="flex flex-col leading-tight">
              <h1 className="text-xl font-bold">TEENS 4 TEENS</h1>
              <span className="text-sm italic text-gray/80">
                Period Products For All.
              </span>
            </div>
          </div>
        </Link>
        <div className="space-x-4">
          <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition">
            Log In
          </button>
          <Link to="/donate">
            <button className="bg-rose-300 text-white px-4 py-2 rounded-full hover:bg-rose-400 transition">
              Donate Now
            </button>
          </Link>
          <Link to="/take-action">
            <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
              Take Action
            </button>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition"
          >
            <span className="flex items-center">
              <p className="px-2">Menu</p>
              <RxHamburgerMenu />
            </span>
          </button>
        </div>
        {isOpen && (
          <div className="absolute right-17 top-16 w-32 bg-white text-black text-center rounded-xl shadow-lg z-50">
            <Link to="/about">
              <a className="block px-4 py-2 hover:bg-gray-100 rounded-xl">
                About
              </a>
            </Link>
            <Link to="/donate">
              <a className="block px-4 py-2 hover:bg-gray-100 rounded-xl">
                Donate
              </a>
            </Link>
            <Link to="/take-action">
              <a className="block px-4 py-2 hover:bg-gray-100 rounded-xl">
                Take Action
              </a>
            </Link>
            <a
              href="https://www.facebook.com/people/Teens-4-Teens/100091319527824/"
              className="block px-4 py-2 hover:bg-gray-100 rounded-xl"
            >
              Facebook
            </a>
            <a className="block px-4 py-2 hover:bg-gray-100 rounded-xl">X</a>
            <a
              href="https://www.instagram.com/t4t_ig/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#"
              className="block px-4 py-2 hover:bg-gray-100 rounded-xl"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@t4t_tt"
              className="block px-4 py-2 hover:bg-gray-100 rounded-xl"
            >
              Tik Tok
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
