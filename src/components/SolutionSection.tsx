import { motion } from 'motion/react';
import { Sparkles, Heart, Zap } from 'lucide-react';

export function SolutionSection() {
  const benefits = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'Affinity Rewards connects travellers and digital workers through real-world merchant perks and a shared network that grows together.',
      gradient: 'from-pink-500/20 to-red-500/20',
      border: 'border-pink-500/30'
    },
    {
      icon: Sparkles,
      title: 'Effortless Finance',
      description: 'No trading, no jargon — just rewards and stablecoin features that make global money feel effortless when you\'re ready.',
      gradient: 'from-emerald-500/20 to-blue-500/20',
      border: 'border-emerald-500/30'
    },
    {
      icon: Zap,
      title: 'Instant Settlement',
      description: 'Earn perks, settle payments, and gradually access stablecoin treasury features — all in one place, at your own pace.',
      gradient: 'from-yellow-500/20 to-orange-500/20',
      border: 'border-yellow-500/30'
    }
  ];

  return (
    <section id="solution" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <span className="text-sm text-emerald-400">The Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Why <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">choose us</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We start with <span className="text-emerald-400">belonging and benefits</span> — not with crypto complexity.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`p-8 bg-gradient-to-br ${benefit.gradient} rounded-3xl border ${benefit.border} backdrop-blur-sm group hover:scale-105 transition-transform duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl mb-4 text-white">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Summary Statement */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto p-10 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-3xl border border-emerald-500/20">
            <p className="text-2xl md:text-3xl text-white/90 leading-relaxed">
              iBnk begins with <span className="text-emerald-400">Affinity Rewards</span> — a community-driven rewards card that lets people earn, belong, and gradually access stablecoin features when they're ready.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}