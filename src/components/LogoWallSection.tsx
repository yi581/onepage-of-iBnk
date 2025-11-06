import { motion } from 'motion/react';

export function LogoWallSection() {
  // Placeholder logos - using grayscale boxes with different opacity
  const logoPlaceholders = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    opacity: 0.2 + (i % 3) * 0.1 // 20%, 30%, 40% alternating
  }));

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <h2 className="text-2xl md:text-3xl text-white/60 mb-4">
            Trusted by partners across APAC
          </h2>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {logoPlaceholders.map((logo, index) => (
            <motion.div
              key={logo.id}
              className="aspect-[3/2] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center group hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Placeholder logo box */}
              <div 
                className="w-20 h-12 rounded-lg transition-opacity duration-200"
                style={{ 
                  backgroundColor: `rgba(255, 255, 255, ${logo.opacity})`,
                }}
              >
                {/* Logo would go here */}
              </div>
              
              {/* Subtle annotation on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-white/40">Partner Logo</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional subtitle */}
        <motion.p
          className="text-center text-white/40 text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Building partnerships with leading fintech, travel, and crypto platforms
        </motion.p>
      </div>
    </section>
  );
}
