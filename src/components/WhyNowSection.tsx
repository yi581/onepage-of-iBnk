import { motion } from 'motion/react';
import { TrendingUp, Shield, Globe } from 'lucide-react';

export function WhyNowSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="text-sm text-white/60">Market Timing</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            How we <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">work</span>
          </h2>
          <p className="text-xl text-white/50 max-w-3xl leading-relaxed">
            The next phase of stablecoin adoption won't start in crypto-native circles — it starts with real users who already move money globally. Here's why we're building iBnk now.
          </p>
        </motion.div>

        {/* Content Cards */}
        <div className="space-y-6">
          <motion.div
            className="p-8 md:p-10 bg-zinc-800/50 rounded-3xl border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-white">Cross-border demand is real.</h3>
                <p className="text-lg text-white/60 leading-relaxed">
                  Post-COVID, travellers, freelancers, and small businesses across APAC are moving money more often than ever — but FX costs and settlement delays haven't improved.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="p-8 md:p-10 bg-zinc-800/50 rounded-3xl border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-white">Stablecoins are ready for utility.</h3>
                <p className="text-lg text-white/60 leading-relaxed">
                  The infrastructure is mature (AUDD, USDC, XSGD), but most users still can't use them in simple, everyday ways. The next frontier isn't DeFi — it's usability.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="p-8 md:p-10 bg-zinc-800/50 rounded-3xl border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-white">Australia is the perfect bridge.</h3>
                <p className="text-lg text-white/60 leading-relaxed">
                  It's not the biggest Web3 hub, but it's one of the most trusted fintech markets in APAC — with strong consumer protection, cross-border trade ties, and a highly mobile workforce. That makes it the ideal launchpad to prove real-world stablecoin use before expanding across Asia.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}