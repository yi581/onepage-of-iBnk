import { CreditCard, Wallet, Store, ChevronsRight } from 'lucide-react';
import { motion } from 'motion/react';
import cardImage from 'figma:asset/55f37e0f599aecf23eda99c0950ee8d67b58b265.png';

export function ProductSection() {
  const phases = [
    {
      number: '01',
      title: 'Affinity Rewards',
      description: 'Digital + physical cards for travellers with real perks and social engagement.',
      icon: CreditCard,
      gradient: 'from-yellow-500 via-orange-500 to-emerald-500',
      bgGradient: 'from-yellow-500/10 to-emerald-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      number: '02',
      title: 'Stablecoin banking',
      description: 'As users connect wallets in the iBnk app, we enable 10x easier currency on/off ramp and stablecoin settlements through licensed rails.',
      icon: Wallet,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      bgGradient: 'from-emerald-500/10 to-cyan-500/10',
      borderColor: 'border-emerald-500/20'
    },
    {
      number: '03',
      title: 'Merchant API',
      description: 'APAC merchants join to offer instant rewards and cross-currency benefits.',
      icon: Store,
      gradient: 'from-lime-500 via-emerald-500 to-teal-500',
      bgGradient: 'from-lime-500/10 to-teal-500/10',
      borderColor: 'border-lime-500/20'
    }
  ];

  return (
    <section id="product" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl mb-4 text-center">
          Product Snapshot — How It Works
        </h2>
        <p className="text-xl text-white/60 text-center mb-16">
          A phased approach to making stablecoins accessible to everyone
        </p>

        {/* Hero Card Image with Swipe Icon Animation */}
        <div className="mb-16 flex justify-center">
          <div className="relative max-w-md w-full">
            <img 
              src={cardImage} 
              alt="iBnk Cards"
              className="w-full h-auto rounded-2xl"
            />
            
            {/* Swipe to Sign Up Animation - positioned below the card */}
            <div className="mt-6 relative bg-gradient-to-r from-yellow-500/10 via-emerald-500/10 to-yellow-500/10 rounded-full p-1 border border-emerald-500/30 backdrop-blur-sm overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <div className="relative flex items-center justify-center gap-3 px-8 py-4">
                <motion.div
                  animate={{ x: [-8, 8, -8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronsRight className="w-6 h-6 text-emerald-400" />
                </motion.div>
                <span className="text-lg text-white/90">Swipe to Sign Up</span>
                <motion.div
                  animate={{ x: [-8, 8, -8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                >
                  <ChevronsRight className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Phases */}
        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className={`p-8 bg-gradient-to-br ${phase.bgGradient} rounded-2xl border ${phase.borderColor} backdrop-blur-sm`}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center`}>
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-white/40">Phase {phase.number}</span>
                    <div className="h-px flex-1 bg-white/10"></div>
                  </div>
                  <h3 className="text-2xl md:text-3xl mb-3">{phase.title}</h3>
                  <p className="text-lg text-white/70 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}