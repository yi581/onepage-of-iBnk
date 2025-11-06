import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from 'figma:asset/27644c8e9d51d41701faf9340feb7468fe876249.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 64);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Story', href: '#story' },
    { label: 'Problems', href: '#problems' },
    { label: 'Solution', href: '#solution' },
    { label: 'Why Now', href: '#why-now' },
    { label: 'Partnership', href: '#partnership' }
  ];

  return (
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
        <div className="grid grid-cols-12 gap-6 items-center h-20">
          {/* Logo - Left */}
          <div className="col-span-3">
            <a href="#" className="inline-block">
              <img src={logo} alt="iBnk" className="h-8" />
            </a>
          </div>

          {/* Nav Links - Center */}
          <div className="col-span-6 hidden lg:flex items-center justify-center gap-8">
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

          {/* CTA Button - Right */}
          <div className="col-span-3 flex justify-end">
            <a
              href="https://calendly.com/ivy-ibnk/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-black rounded-full hover:bg-white/90 transition-colors duration-200 inline-flex items-center gap-2"
            >
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}