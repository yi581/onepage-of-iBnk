import { motion } from 'motion/react';

export function ProblemsSection() {
  const problems = [
    {
      number: '01',
      title: 'Payment Friction',
      description: 'Thousands of travellers and digital workers struggle with getting paid from overseas clients. Traditional systems are slow and expensive.'
    },
    {
      number: '02',
      title: 'Currency Barriers',
      description: 'Moving money between AUD and USD wallets is complicated. Every option — from Wise to banks to crypto — has significant drawbacks.'
    },
    {
      number: '03',
      title: 'Settlement Delays',
      description: 'Paying suppliers in Asia means juggling multiple apps, waiting days for funds, and losing money in fees you barely notice.'
    },
    {
      number: '04',
      title: 'Fragmented Experience',
      description: 'There\'s no one place where travellers and digital workers can earn, spend and swap across currencies without thinking about it.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
            <span className="text-sm text-red-400">The Problem</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            Committed to <span className="text-red-400">solving friction</span>
          </h2>
        </motion.div>

        {/* Problems List */}
        <div className="space-y-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pb-8 border-b border-white/10 last:border-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Number */}
              <div className="md:col-span-2">
                <div className="text-6xl md:text-7xl text-red-400/30">
                  {problem.number}
                </div>
              </div>

              {/* Title */}
              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-3xl text-white/90">
                  {problem.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-7">
                <p className="text-lg text-white/60 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Card */}
        <motion.div
          className="mt-16 p-8 md:p-12 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl border border-red-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Every option — from Wise to banks to crypto wallets — is either <span className="text-red-400">slow, expensive, or just too hard to use</span> every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}