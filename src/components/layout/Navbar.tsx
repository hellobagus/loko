import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Zap size={32} className="text-primary mr-2" />
          <span className="font-bold text-xl md:text-2xl">LOKO</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" 
            className={({ isActive }) => 
              isActive ? 'text-primary font-medium' : 'text-secondary hover:text-primary transition-colors'
            }
          >
            Home
          </NavLink>
          
          <NavLink to="/about" 
            className={({ isActive }) => 
              isActive ? 'text-primary font-medium' : 'text-secondary hover:text-primary transition-colors'
            }
          >
            About
          </NavLink>
          
          <NavLink to="/services" 
            className={({ isActive }) => 
              isActive ? 'text-primary font-medium' : 'text-secondary hover:text-primary transition-colors'
            }
          >
            Services
          </NavLink>
          
          <NavLink to="/portfolio" 
            className={({ isActive }) => 
              isActive ? 'text-primary font-medium' : 'text-secondary hover:text-primary transition-colors'
            }
          >
            Portfolio
          </NavLink>
          
          <NavLink to="/team" 
            className={({ isActive }) => 
              isActive ? 'text-primary font-medium' : 'text-secondary hover:text-primary transition-colors'
            }
          >
            Team
          </NavLink>
          
          <NavLink to="/contact" 
            className={({ isActive }) => 
              isActive ? 'text-primary font-medium' : 'text-secondary hover:text-primary transition-colors'
            }
          >
            Contact
          </NavLink>
          
          <a href="/contact" className="btn btn-primary">Get Quote</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-secondary hover:text-primary focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 bg-white shadow-md">
          <div className="flex flex-col space-y-3">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'text-primary font-medium py-2' : 'text-secondary py-2 hover:text-primary transition-colors'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? 'text-primary font-medium py-2' : 'text-secondary py-2 hover:text-primary transition-colors'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                isActive ? 'text-primary font-medium py-2' : 'text-secondary py-2 hover:text-primary transition-colors'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => 
                isActive ? 'text-primary font-medium py-2' : 'text-secondary py-2 hover:text-primary transition-colors'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </NavLink>
            
            <NavLink 
              to="/team" 
              className={({ isActive }) => 
                isActive ? 'text-primary font-medium py-2' : 'text-secondary py-2 hover:text-primary transition-colors'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? 'text-primary font-medium py-2' : 'text-secondary py-2 hover:text-primary transition-colors'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            
            <a 
              href="/contact" 
              className="btn btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;