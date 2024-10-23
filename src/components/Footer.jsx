import React from "react";
import {
  FaYoutubeSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import logo from "../assets/photo.png";

const Footer = () => {
  const navColumns = [
    {
      title: "Mobile app",
      links: [
        { name: "Features", href: "#" },
        { name: "Live share", href: "#" },
        { name: "Video record", href: "#" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Featured artists", href: "#" },
        { name: "The Portal", href: "#" },
        { name: "Live events", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About us", href: "#" },
        { name: "Contact us", href: "#" },
        { name: "History", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { Icon: FaFacebookSquare, href: "#", label: "Facebook" },
    { Icon: FaTwitterSquare, href: "#", label: "Twitter" },
    { Icon: FaYoutubeSquare, href: "#", label: "Youtube" },
    { Icon: FaInstagramSquare, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-black opacity-90 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo  */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="" />
            </div>
            <div className="mt-4 flex space-x-4">
              {/* Auth Buttons */}
              <a
                href="#"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Register
              </a>
              <a
                href="#"
                className="bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Log in
              </a>
            </div>
          </div>

          
          {navColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-white  mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <div className="text-sm">© Photo, Inc. 2019. We love our users!</div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm mr-2">Follow us:</span>
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
