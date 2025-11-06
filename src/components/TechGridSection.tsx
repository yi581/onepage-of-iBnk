import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function TechGridSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Create a grid of blocks
  const gridSize = 12;
  const blocks = Array.from({ length: gridSize * gridSize });

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Animated Tech Grid Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-12 gap-2 max-w-6xl w-full opacity-30">
          {blocks.map((_, index) => {
            const delay = (index % gridSize) * 0.05 + Math.floor(index / gridSize) * 0.05;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={index}
                className="aspect-square bg-white/5 border border-white/10 cursor-pointer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: isHovered ? 0.5 : [0.05, 0.2, 0.05],
                  scale: isHovered ? 1.2 : 1,
                  backgroundColor: isHovered ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.05)'
                }}
                transition={{
                  opacity: {
                    duration: 3,
                    repeat: Infinity,
                    delay: delay,
                  },
                  scale: {
                    duration: 0.3
                  },
                  backgroundColor: {
                    duration: 0.3
                  }
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              />
            );
          })}
        </div>
      </div>

      {/* Green glow effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            Built on <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">Web3</span>
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Leveraging blockchain technology for transparent, secure, and instant settlements
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Decentralized',
                description: 'No single point of failure',
                icon: '⚡'
              },
              {
                title: 'Transparent',
                description: 'On-chain verification',
                icon: '🔍'
              },
              {
                title: 'Instant',
                description: 'Real-time settlements',
                icon: '⚡'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10 backdrop-blur-sm group cursor-pointer"
                whileHover={{ 
                  y: -10,
                  borderColor: 'rgba(16, 185, 129, 0.4)',
                  boxShadow: '0 20px 60px rgba(16, 185, 129, 0.2)'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl mb-2 text-white group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
