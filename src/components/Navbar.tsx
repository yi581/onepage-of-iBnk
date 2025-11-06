import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logo from 'figma:asset/27644c8e9d51d41701faf9340feb7468fe876249.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 64);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Story', href: '#story' },
    { label: 'Problems', href: '#problems' },
    { label: 'Solution', href: '#solution' },
    { label: 'Why Now', href: '#why-now' },
    { label: 'Partnership', href: '#partnership' }
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{
          background: isScrolled ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none'
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              <a href="#" className="inline-block">
                <img src={logo} alt="iBnk" className="h-6 lg:h-8" />
              </a>
            </div>

            {/* Nav Links - Center (Desktop only) */}
            <div className="hidden lg:flex items-center justify-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Right Side - CTA Button and Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              {/* CTA Button */}
              <a
                href="https://calendly.com/ivy-ibnk/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 lg:px-6 lg:py-2.5 bg-white text-black text-sm rounded-full hover:bg-white/90 transition-colors duration-200 inline-flex items-center gap-2"
              >
                <span>Contact</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-white/80 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col items-center justify-center px-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-2xl text-white/80 hover:text-white transition-colors duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}