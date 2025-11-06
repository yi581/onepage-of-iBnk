import { motion } from 'motion/react';

export function HowItWorksMinimal() {
  return (
    <section id="how-it-works" className="py-32 bg-black text-white">
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
                <span className="text-sm text-white/60">How It Works</span>
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
              How It Works
            </motion.h2>

            {/* Phases */}
            <motion.div
              className="space-y-16"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.2 }}
            >
              {/* Phase 1 */}
              <div className="border-l-2 border-white/20 pl-8">
                <div className="mb-4">
                  <span className="text-sm text-white/50 uppercase tracking-wider">Phase 1</span>
                </div>
                <h3 className="text-2xl md:text-3xl mb-4">
                  Affinity Rewards
                </h3>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                  Digital + physical cards for travellers with real perks and social engagement.
                </p>
              </div>

              {/* Phase 2 */}
              <div className="border-l-2 border-white/20 pl-8">
                <div className="mb-4">
                  <span className="text-sm text-white/50 uppercase tracking-wider">Phase 2</span>
                </div>
                <h3 className="text-2xl md:text-3xl mb-4">
                  Stablecoin banking
                </h3>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                  As users connect wallets in the iBnk app, we enable 10x easier currency on/off ramp and stablecoin settlements through licensed rails.
                </p>
              </div>

              {/* Phase 3 */}
              <div className="border-l-2 border-white/20 pl-8">
                <div className="mb-4">
                  <span className="text-sm text-white/50 uppercase tracking-wider">Phase 3</span>
                </div>
                <h3 className="text-2xl md:text-3xl mb-4">
                  Merchant API
                </h3>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                  APAC merchants join to offer instant rewards and cross-currency benefits.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
