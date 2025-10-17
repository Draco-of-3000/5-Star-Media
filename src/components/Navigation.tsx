import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="font-['Ballet:Regular',_sans-serif] text-white text-4xl md:text-5xl hover:opacity-80 transition-opacity"
          >
            5 Star
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:opacity-70 transition-opacity"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:opacity-70 transition-opacity"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:opacity-70 transition-opacity"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white border border-white px-6 py-2 hover:bg-white hover:text-black transition-all"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 flex flex-col gap-4 pb-4">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:opacity-70 transition-opacity text-left"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:opacity-70 transition-opacity text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:opacity-70 transition-opacity text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white border border-white px-6 py-2 hover:bg-white hover:text-black transition-all text-left"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
