import { motion } from 'motion/react';

export function SolutionMinimal() {
  return (
    <section id="solution" className="py-32 bg-white/[0.02] text-white">
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
                <span className="text-sm text-white/60">Our Solution</span>
              </div>
            </motion.div>

            {/* Solution Content */}
            <motion.div
              className="space-y-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-white/80">
                iBnk begins with <span className="text-white">Affinity Rewards</span> — a community-driven rewards card for travellers and digital workers.
              </p>

              <p className="text-white/80">
                It lets people earn perks and points from real-world merchants, connect with others in the same network, and gradually access stablecoin features when they're ready.
              </p>

              <p className="text-white/80">
                No trading, no jargon — just rewards that make global money feel effortless.
              </p>

              <p className="text-2xl text-white">
                We start with belonging and benefits — not with crypto complexity.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
