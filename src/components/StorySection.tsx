import { motion } from 'motion/react';

export function StorySection() {
  return (
    <section id="story" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Title & Decorative Element */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <span className="text-sm text-emerald-400">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8">
              About our
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>

            {/* Decorative circles - inspired by reference */}
            <div className="relative w-64 h-64 mt-12 hidden lg:block">
              <motion.div 
                className="absolute top-0 left-0 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400/20 to-yellow-400/20 border border-emerald-400/30"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute top-0 right-0 w-28 h-28 rounded-full bg-gradient-to-br from-yellow-400/20 to-emerald-400/20 border border-yellow-400/30"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div 
                className="absolute bottom-0 left-12 w-36 h-36 rounded-full bg-gradient-to-br from-white/5 to-white/10 border border-white/20"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Right Side - Story Content */}
          <motion.div
            className="space-y-6 text-lg text-white/70 leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              We used <span className="text-white">seven apps</span> to move money — Revolut for AUD, Wise for GBP, Coinbase for USDC, Metamask for XSGD.
            </p>
            
            <p>
              Each time we tried to save a few cents on FX, we waited for rates to change, switched chains, copied wallet addresses, and hoped nothing got stuck.
            </p>
            
            <p className="text-white/50 italic">It was ridiculous.</p>

            <div className="my-8 p-8 bg-gradient-to-br from-emerald-500/10 to-yellow-500/10 rounded-2xl border border-emerald-400/20">
              <p className="text-2xl text-white/90">
                "To earn a coffee, we lost days."
              </p>
            </div>

            <p>
              That's when we built <span className="text-white">iBnk</span> — <span className="text-emerald-400">10x easier</span> that finds you the best stablecoin rate instantly, across all networks and issuers.
            </p>

            <p>
              No juggling, no guessing, no waiting — just the fastest path for your money to move.
            </p>

            <div className="pt-8 mt-8 border-t border-white/10">
              <p className="text-white/50">
                We're building the infrastructure that makes global finance work for real people — travellers, digital workers, and anyone who moves between currencies daily.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}