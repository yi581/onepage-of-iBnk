import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export function AskSection() {
  return (
    <section id="ask" className="py-32 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <span className="text-sm text-emerald-400">Let's Build Together</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Partnership in <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">APAC</span>
          </h2>

          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
            We're actively building partnerships across Australia and APAC — connecting stablecoin issuers, fintech communities, and travel merchants to expand real-world utility.
          </p>

          {/* Contact Card */}
          <motion.div
            className="p-12 bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl border border-emerald-500/20 backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-emerald-400" />
                </div>
              </div>

              <p className="text-white/70 text-lg mb-8">
                Interested in partnering with iBnk?
              </p>

              <a 
                href="mailto:partnerships@ibnk.xyz" 
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-emerald-400 text-black rounded-full text-lg hover:scale-105 transition-transform"
              >
                <span>partnerships@ibnk.xyz</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="mt-8 text-white/50 text-sm">
                Building the future of stablecoin utility, one partnership at a time.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}