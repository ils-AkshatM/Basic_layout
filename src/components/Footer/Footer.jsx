import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold text-white mb-4">Oliver Publications</h4>
            <p className="mb-2">© 2024 Oliver Publications. All rights reserved.</p>
            <p className="text-sm">Building the future with innovation and quality.</p>
          </div>

          {/* First Navigation Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition duration-300">Home</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Services</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Second Navigation Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full md:w-1/4">
            <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
            <p className="mb-2"><strong>Email:</strong> info@oliverpublications.com</p>
            <p className="mb-2"><strong>Phone:</strong> +1 (234) 567-8900</p>
            <p className="mb-2"><strong>Address:</strong> 1234 Innovation Blvd, Suite 100, Tech City</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-between items-center mt-8">
          <p className="text-sm">Designed with ❤️ by Oliver Publications</p>
          <div className="flex space-x-4">
            <a href="#" className="text-xl hover:text-white transition duration-300"><FaFacebookF /></a>
            <a href="#" className="text-xl hover:text-white transition duration-300"><FaTwitter /></a>
            <a href="#" className="text-xl hover:text-white transition duration-300"><FaInstagram /></a>
            <a href="#" className="text-xl hover:text-white transition duration-300"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
