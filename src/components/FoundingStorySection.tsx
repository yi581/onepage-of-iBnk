import { motion } from 'motion/react';

export function FoundingStorySection() {
  return (
    <section id="story" className="py-32 bg-white/[0.02] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6">
          
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            
            {/* Section Label */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="inline-block px-4 py-2 border border-white/20 rounded-full">
                <span className="text-sm text-white/60">Founding Story</span>
              </div>
            </motion.div>

            {/* Story Content */}
            <motion.div
              className="space-y-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-white/80">
                We used seven apps to move money — Revolut for AUD, Wise for GBP, Coinbase for USDC, Metamask for XSGD.
              </p>

              <p className="text-white/80">
                Each time we tried to save a few cents on FX, we waited for rates to change, switched chains, copied wallet addresses, and hoped nothing got stuck.
              </p>

              <p className="text-white/80">
                It was ridiculous.
              </p>

              <p className="text-2xl md:text-3xl text-white italic my-12">
                "To earn a coffee, we lost days."
              </p>

              <p className="text-white/80">
                That's when we built iBnk — 10x easier that finds you the best stablecoin rate instantly, across all networks and issuers.
              </p>

              <p className="text-white/80">
                No juggling, no guessing, no waiting — just the fastest path for your money to move.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
