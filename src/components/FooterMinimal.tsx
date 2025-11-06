import logo from 'figma:asset/27644c8e9d51d41701faf9340feb7468fe876249.png';

export function FooterMinimal() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-12 gap-6">
          
          {/* Footer Content - Centered */}
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center space-y-6">
            
            {/* Logo */}
            <img src={logo} alt="iBnk" className="h-8 mx-auto opacity-80" />
            
            {/* Tagline */}
            <p className="text-white/40 text-sm italic">
              — the stablecoin treasury for everyone.
            </p>

            {/* Divider */}
            <div className="w-24 h-px bg-white/10 mx-auto"></div>
            
            {/* Copyright */}
            <p className="text-sm text-white/30">
              © 2025 iBnk. One Pager, continuously updated.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}