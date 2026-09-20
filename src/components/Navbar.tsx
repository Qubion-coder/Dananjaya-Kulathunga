import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'What I Do', href: '#whatido' },
    { name: 'SmartixZone', href: '#smartixzone' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-primary)]/80 backdrop-blur-lg border-b border-[var(--color-border)] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex justify-between items-center relative z-50">
        <a href="#home" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] group-hover:scale-150 transition-transform duration-300"></div>
          <span className="text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Dananjaya Kulathunga
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-[var(--color-text-primary)] p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-[var(--color-primary)]/95 backdrop-blur-xl transition-all duration-500 ease-in-out flex flex-col justify-center items-center ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center gap-8 w-full px-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-3xl font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-all duration-300 transform ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              {link.name}
            </a>
          ))}
          
          <div className={`mt-8 pt-8 border-t border-[var(--color-border)] w-full max-w-xs flex flex-col items-center gap-4 transition-all duration-500 delay-500 transform ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="text-sm text-[var(--color-text-secondary)] uppercase tracking-wider">Get in touch</p>
            <a href="mailto:dananjayakulathunga413@gmail.com" className="text-[var(--color-accent)] font-medium">
              dananjayakulathunga413@gmail.com
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
