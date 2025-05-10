
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MenuIcon, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const NavItem = ({ 
  to, 
  label, 
  onClick 
}: { 
  to: string; 
  label: string; 
  onClick?: () => void;
}) => {
  return (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="cursor-pointer text-gray-700 hover:text-portfolio-primary dark:text-gray-300 dark:hover:text-portfolio-primary font-medium transition-colors"
      onClick={onClick}
    >
      {label}
    </ScrollLink>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-white/90 dark:bg-portfolio-dark/90 shadow-md backdrop-blur-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <ScrollLink
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer font-bold text-xl text-portfolio-primary"
        >
          ML<span className="text-portfolio-secondary">Engineer</span>
        </ScrollLink>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavItem to="about" label="About" />
          <NavItem to="projects" label="Projects" />
          <NavItem to="skills" label="Skills" />
          <NavItem to="contact" label="Contact" />
          <Button className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary hover:bg-gradient-to-l text-white px-6">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              Hire Me
            </ScrollLink>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-300">
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-[60px] bg-white dark:bg-portfolio-dark p-5 transition-all duration-300 ease-in-out md:hidden shadow-lg",
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-4">
          <NavItem to="about" label="About" onClick={closeMobileMenu} />
          <NavItem to="projects" label="Projects" onClick={closeMobileMenu} />
          <NavItem to="skills" label="Skills" onClick={closeMobileMenu} />
          <NavItem to="contact" label="Contact" onClick={closeMobileMenu} />
          <Button className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary hover:bg-gradient-to-l text-white w-full">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer w-full"
              onClick={closeMobileMenu}
            >
              Hire Me
            </ScrollLink>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
