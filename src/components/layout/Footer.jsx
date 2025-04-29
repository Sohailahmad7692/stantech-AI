import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Stantech
          </p>
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
            </a>
            <p className="text-sm text-gray-300">
              React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;