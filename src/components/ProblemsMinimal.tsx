import { motion } from 'motion/react';

export function ProblemsMinimal() {
  return (
    <section id="problems" className="py-32 bg-black text-white">
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
                <span className="text-sm text-white/60">Problems</span>
              </div>
            </motion.div>

            {/* Problems Content */}
            <motion.div
              className="space-y-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-white/80">
                In Australia, thousands of travellers and digital workers still struggle with simple things: getting paid from overseas clients, moving money between AUD and USD wallets, or paying suppliers in Asia.
              </p>

              <p className="text-white/80">
                Every option — from Wise to banks to crypto wallets — is either slow, expensive, or just too hard to use every day.
              </p>

              <p className="text-white/80">
                You end up juggling apps, waiting days for funds, and losing in fees you barely notice.
              </p>

              <p className="text-2xl text-white">
                There's no one place where travellers and digital workers can earn, spend and swap across currencies without thinking about it.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
