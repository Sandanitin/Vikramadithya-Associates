import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import categories from '../data/categories';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-[#0B2545] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/Logo.png" alt="Service Center Logo" className="h-16 w-auto mr-4" />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              if (link.name === 'Services') {
                return (
                  <div 
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`px-4 py-3 rounded-lg text-lg font-bold transition-all duration-300 flex items-center ${
                        location.pathname === link.path
                          ? 'text-[#D4AF37] bg-[#F5E6CA]'
                          : 'text-[#0B2545] hover:text-[#D4AF37] hover:bg-[#F5E6CA]'
                      }`}
                    >
                      {link.name}
                      <svg className="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </Link>
                    
                    {/* Dropdown menu */}
                    {isServicesDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 border border-[#E2E8F0]">
                        <div className="py-2">
                          {categories.map((category) => (
                            <Link
                              key={category.id}
                              to={`/category/${category.id}`}
                              className="block px-6 py-3 text-[#0B2545] hover:bg-[#F5E6CA] hover:text-[#0B2545] transition-colors duration-200 flex items-center"
                            >
                              <span className="text-xl mr-3">{category.icon}</span>
                              <span className="font-medium">{category.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-lg font-bold transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-[#D4AF37] bg-[#F5E6CA]'
                      : 'text-[#0B2545] hover:text-[#D4AF37] hover:bg-[#F5E6CA]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-[#0B2545] hover:text-[#D4AF37] focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-8 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-8 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-[#E2E8F0]`}>
        <div className="px-4 pt-4 pb-6 space-y-3 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-5 py-4 rounded-lg text-lg font-bold ${
                location.pathname === link.path
                  ? 'text-[#D4AF37] bg-[#F5E6CA]'
                  : 'text-[#0B2545] hover:text-[#D4AF37] hover:bg-[#F5E6CA]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;