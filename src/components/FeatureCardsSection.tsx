import { motion } from 'motion/react';
import { Heart, Zap, Shield, Globe } from 'lucide-react';

export function FeatureCardsSection() {
  const features = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'Build connections through affinity rewards that bring travellers and digital workers together.'
    },
    {
      icon: Zap,
      title: 'Instant Settlement',
      description: 'Move money across borders in seconds, not days. Real-time stablecoin settlements.'
    },
    {
      icon: Shield,
      title: 'Secure Treasury',
      description: 'Bank-grade security meets blockchain transparency. Your funds are always protected.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Access APAC markets with AUD, USD, and SGD stablecoins all in one place.'
    }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 reveal"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <span className="text-sm text-emerald-400">Core Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Built for <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">real people</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Everything you need to manage cross-border payments with ease
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-emerald-400/40 hover:bg-white/10 transition-all duration-200 hover:shadow-[0_8px_24px_rgba(16,185,129,0.2)] hover:scale-[1.02] cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-emerald-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <feature.icon className="w-7 h-7 text-emerald-400" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl mb-3 group-hover:text-emerald-400 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
