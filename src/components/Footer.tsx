import { motion } from 'motion/react';
import logo from 'figma:asset/27644c8e9d51d41701faf9340feb7468fe876249.png';

export function Footer() {
  const footerLinks = {
    product: {
      title: 'Product',
      links: [
        { label: 'Affinity Rewards', href: '#' },
        { label: 'Treasury', href: '#' },
        { label: 'Merchant Hub', href: '#' },
        { label: 'Community', href: '#' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { label: 'About', href: '#story' },
        { label: 'Careers', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Press', href: '#' }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Support', href: '#' },
        { label: 'Status', href: '#' }
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Compliance', href: '#' }
      ]
    }
  };

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          
          {/* Brand Column - Spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <img src={logo} alt="iBnk" className="h-8 mb-6" />
            <p className="text-white/60 mb-6 max-w-xs">
              Community First. Stablecoin Treasury for the People.
            </p>
            <p className="text-white/40 text-sm italic">
              — the affinity rewards for everyone.
            </p>

            {/* Newsletter Subscription */}
            <div className="mt-8">
              <h4 className="text-sm mb-3 text-white/80">Stay updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm focus:outline-none focus:border-emerald-400/40 transition-colors"
                />
                <button className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-emerald-400 text-black rounded-full text-sm hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-sm mb-4 text-white/80">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © 2025 iBnk. All rights reserved.
          </p>
          
          {/* Social Links Placeholder */}
          <div className="flex gap-6">
            {['Twitter', 'Discord', 'Telegram', 'GitHub'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
