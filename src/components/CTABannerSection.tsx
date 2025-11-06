import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

export function CTABannerSection() {
  return (
    <section id="partnership" className="py-32 bg-gradient-to-br from-black via-zinc-900 to-black text-white relative overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
            <span className="text-sm text-emerald-400">Let's Build Together</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Building partnerships
            <br />
            across <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">APAC</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            We're connecting stablecoin issuers, fintech communities, and travel merchants to expand real-world utility for the next generation of digital finance.
          </p>

          {/* CTA Button */}
          <motion.a
            href="mailto:partnerships@ibnk.xyz"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-emerald-400 text-black rounded-full text-lg hover:scale-105 transition-transform duration-200 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            <span>partnerships@ibnk.xyz</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          {/* Subtext */}
          <p className="mt-8 text-white/40 text-sm">
            Building the future of stablecoin utility, one partnership at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
