import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'; // Social icons
import Logo from './Logo'; // Assuming you have a Logo component
import { Link } from 'react-router-dom';


const SocialIcon = ({ href, Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
    <Icon className="w-6 h-6" />
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between mb-8">
          
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Link to="/" className="flex items-center mb-4 space-x-2">
              <Logo />
            </Link>
            <p className="text-sm">
              Find your dream job with Internbix.             </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/jobs" className="hover:underline">Jobs</Link></li>
              <li><Link to="/resume" className="hover:underline">Resume</Link></li>
              <li><Link to="/blogs" className="hover:underline">Blogs</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Mumbai, India, 400001</p>
            <p className="mb-2">Phone: (+91) 96088-99999</p>
            <p>Email: <a href="mailto:info@internbix.com" className="hover:underline">info@internbix.com</a></p>
          </div>

          {/* Follow Us */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <SocialIcon href="https://www.linkedin.com/company/internbix1/" Icon={Linkedin} />
              <SocialIcon href="https://www.linkedin.com/company/internbix1/" Icon={Twitter} />
              <SocialIcon href="https://www.linkedin.com/company/internbix1/" Icon={Facebook} />
              <SocialIcon href="https://www.linkedin.com/company/internbix1/" Icon={Instagram} />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Internbix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
