import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import search from "../assets/search_icon.svg";
import notificationicon from "../assets/bell_icon.svg";
import profile from "../assets/profile_img.png";
import dropdown from "../assets/caret_icon.svg";
import { SlMenu } from "react-icons/sl";
import { logout } from "../firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navRef = useRef();
  const dropdownRef = useRef();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    "Home",
    "TV Shows",
    "Movies",
    "News & Popular",
    "My List",
    "Browse by Language",
  ];

  return (
    <header
      ref={navRef}
      className={`w-full flex flex-col md:flex-row justify-between py-4 md:py-[2rem] px-4 md:px-8 fixed text-sm md:text-[1.4rem] text-[#e5e5e5] ${
        isScrolled
          ? "bg-black/80"
          : "bg-gradient-to-t from-[rgba(0,0,0,0.7)_10%] to-transparent"
      } z-50 transition-all duration-300`}
    >
      {/* Top bar for mobile */}
      <div className="flex justify-between items-center w-full md:hidden">
        <img
          src={logo}
          alt="Netflix Logo"
          className="w-24 md:w-[9rem] cursor-pointer"
          onClick={() => navigate("/")}
        />

        <div className="flex items-center gap-4">
          <img
            src={search}
            alt="Search"
            className="cursor-pointer hover:opacity-80 transition-opacity w-5 h-5"
          />

          <button onClick={toggleMobileMenu}>
            <SlMenu className="cursor-pointer w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-[5rem] items-center">
        <img
          src={logo}
          alt="Netflix Logo"
          className="w-[9rem] cursor-pointer"
          onClick={() => navigate("/")}
        />

        <ul className="hidden md:flex gap-[2rem]">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-white transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 w-full py-4 px-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-white transition-colors py-2"
                onClick={() => {
                  navigate("/");
                  setIsMobileMenuOpen(false);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Right side navigation */}
      <nav
        className={`${
          isMobileMenuOpen ? "hidden" : "flex"
        } md:flex gap-4 md:gap-[2rem] items-center justify-end mt-4 md:mt-0`}
      >
        <div className="hidden md:flex items-center gap-4">
          <img
            src={search}
            alt="Search"
            className="cursor-pointer hover:opacity-80 transition-opacity w-6 h-6"
          />

          <h6 className="cursor-pointer hover:text-white transition-colors hidden lg:block">
            Children
          </h6>

          <img
            src={notificationicon}
            alt="Notifications"
            className="cursor-pointer hover:opacity-80 transition-opacity w-6 h-6"
          />
        </div>

        <div
          ref={dropdownRef}
          className="flex items-center gap-2 md:gap-[1.1rem] cursor-pointer relative"
          onClick={toggleDropdown}
        >
          <img
            src={profile}
            alt="Profile"
            className="cursor-pointer rounded-[0.4rem] w-8 h-8 md:w-[3.5rem] md:h-[3.5rem] hover:opacity-80 transition-opacity"
          />

          <img
            src={dropdown}
            alt="Menu"
            className={`hidden md:block cursor-pointer w-4 h-4 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />

          <div
            className={`absolute top-full right-0 w-max bg-[#191919] p-4 rounded-[0.2rem] transition-all duration-200 ${
              isDropdownOpen ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <p
              onClick={handleLogout}
              className="text-[1.3rem] hover:underline cursor-pointer whitespace-nowrap"
            >
              Logout
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
