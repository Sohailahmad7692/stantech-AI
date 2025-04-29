import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Search } from 'lucide-react';
import SearchBox from "../ui/SearchBox";


const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold mb-4 sm:mb-0"
        >
          <Layout size={28} />
          <span>Stantech AI</span>
        </Link>
        {isHomePage && <SearchBox />}
      </div>
    </header>
  );
};

export default Header;