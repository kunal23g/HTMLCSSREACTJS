import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(
        (prevScrollPos > currentScrollPos && currentScrollPos > 10) ||
          currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { label: "Features", id: "features" },
    { label: "Pricing", id: "pricing" },
    { label: "Community", id: "community" },
    { label: "Support", id: "support" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-white border-b border-gray-400 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="backdrop-blur-lg text-black px-4 sm:px-6 lg:px-16 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={scrollToTop}
            className="text-2xl sm:text-3xl lg:text-4xl cursor-pointer"
          >
            <img src={logo} alt="" />
            {/* <div className="h-8 w-32 bg-white/10 rounded animate-pulse" /> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="text-black hover:text-white hover:bg-black p-4 rounded-xl  font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center ">
            <button className="py-2 px-6 rounded-md mr-4 bg-white border border-[#18a0fb] text-[#18a0fb] hover:bg-gray-800 transition duration-200">
              Login
            </button>
            <button className="py-2 px-6 rounded-md bg-[#18a0fb] text-white hover:bg-gray-800 transition duration-200">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 border-t border-white/10">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="block w-full text-left px-4 py-2 text-black hover:text-white hover:bg-black rounded-lg transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className=" ml-4 lg:hidden items-center ">
              <button className="py-2 px-6 rounded-md mr-4 bg-white border border-[#18a0fb] text-[#18a0fb] hover:bg-gray-800 transition duration-200">
                Login
              </button>
              <button className="py-2 px-6 rounded-md bg-[#18a0fb] text-white hover:bg-gray-800 transition duration-200">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
