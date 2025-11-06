import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export function CTAMinimal() {
  return (
    <section id="partnership" className="py-32 bg-white/[0.02] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6">
          
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            
            {/* Section Label */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="inline-block px-4 py-2 border border-white/20 rounded-full">
                <span className="text-sm text-white/60">Partnership</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl mb-12 text-white"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.1 }}
            >
              Building partnerships across APAC
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.15 }}
            >
              We're actively building partnerships across Australia and APAC — connecting stablecoin issuers, 
              fintech communities, and travel merchants to expand real-world utility and liquidity for AUD-backed stablecoins.
              <br /><br />
              Our goal is to make stablecoins — usable in everyday payments, starting from community rewards 
              and merchant integrations.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="mailto:partnerships@ibnk.xyz"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-colors duration-200"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>partnerships@ibnk.xyz</span>
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  );
}