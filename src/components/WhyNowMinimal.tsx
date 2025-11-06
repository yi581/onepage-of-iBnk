import { motion } from 'motion/react';

export function WhyNowMinimal() {
  return (
    <section id="why-now" className="py-32 bg-black text-white">
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
                <span className="text-sm text-white/60">Why Now</span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl mb-16"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.1 }}
            >
              Why we build iBnk now?
            </motion.h2>

            {/* Why Now Content */}
            <motion.div
              className="space-y-16"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.2 }}
            >
              {/* Point 1 */}
              <div>
                <h3 className="text-2xl md:text-3xl mb-4">
                  Cross-border demand is real.
                </h3>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                  Post-COVID, travellers, freelancers, and small businesses across APAC are moving money more often than ever — but FX costs and settlement delays haven't improved.
                </p>
              </div>

              {/* Point 2 */}
              <div>
                <h3 className="text-2xl md:text-3xl mb-4">
                  Stablecoins are ready for utility.
                </h3>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                  The infrastructure is mature (AUDD, USDC, XSGD), but most users still can't use them in simple, everyday ways. The next frontier isn't DeFi — it's usability.
                </p>
              </div>

              {/* Point 3 */}
              <div>
                <h3 className="text-2xl md:text-3xl mb-4">
                  Australia is the perfect bridge.
                </h3>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                  It's not the biggest Web3 hub, but it's one of the most trusted fintech markets in APAC — with strong consumer protection, cross-border trade ties, and a highly mobile workforce.
                </p>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed mt-4">
                  That makes it the ideal launchpad to prove real-world stablecoin use before expanding across Asia.
                </p>
              </div>

              {/* Closing statement */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-xl md:text-2xl text-white/90 italic">
                  The next phase of stablecoin adoption won't start in crypto-native circles — it starts with real users who already move money globally.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}