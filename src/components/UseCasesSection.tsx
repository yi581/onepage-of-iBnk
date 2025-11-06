import { motion } from 'motion/react';
import { useState } from 'react';
import { Plane, Laptop, Store, Users } from 'lucide-react';

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const useCases = [
    {
      id: 'travellers',
      label: 'Travellers',
      icon: Plane,
      title: 'Made for Global Explorers',
      description: 'Spend anywhere, earn rewards everywhere. Convert currencies instantly without hidden fees.',
      benefits: [
        'Zero FX markup on stablecoin swaps',
        'Earn rewards at partner merchants across APAC',
        'Instant settlement in local currency'
      ]
    },
    {
      id: 'digital-workers',
      label: 'Digital Workers',
      icon: Laptop,
      title: 'Built for Remote Teams',
      description: 'Get paid from anywhere. Manage multiple currencies in one treasury.',
      benefits: [
        'Receive payments in USDC, AUDD, or XSGD',
        'Convert to local currency in seconds',
        'Track all transactions in one dashboard'
      ]
    },
    {
      id: 'merchants',
      label: 'Merchants',
      icon: Store,
      title: 'Empower Your Business',
      description: 'Accept stablecoin payments and attract global customers.',
      benefits: [
        'No chargebacks or payment disputes',
        'Settlement in 24 hours or less',
        'Access to iBnk community rewards'
      ]
    },
    {
      id: 'communities',
      label: 'Communities',
      icon: Users,
      title: 'Grow Together',
      description: 'Build affinity groups and unlock collective rewards.',
      benefits: [
        'Create custom reward programs',
        'Pool treasury for better rates',
        'Exclusive community benefits'
      ]
    }
  ];

  const activeCase = useCases[activeTab];

  return (
    <section id="product" className="py-24 bg-white/[0.02] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-sm text-blue-400">Use Cases</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            For <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">everyone</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {useCases.map((useCase, index) => (
            <motion.button
              key={useCase.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full border transition-all duration-200 flex items-center gap-2 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-yellow-400 to-emerald-400 text-black border-transparent'
                  : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <useCase.icon className="w-4 h-4" />
              {useCase.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Left - Content */}
          <div>
            <h3 className="text-3xl md:text-4xl mb-4">
              {activeCase.title}
            </h3>
            <p className="text-xl text-white/60 mb-8">
              {activeCase.description}
            </p>

            <div className="space-y-4">
              {activeCase.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  </div>
                  <p className="text-white/80">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Visual Card Placeholder */}
          <motion.div
            className="p-12 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl border border-white/10 aspect-square flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-center">
              <activeCase.icon className="w-24 h-24 text-emerald-400/40 mx-auto mb-6" />
              <p className="text-white/40">
                Visual placeholder for {activeCase.label}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
