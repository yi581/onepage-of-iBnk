import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function HeroSectionNew() {
  return (
    <section className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">
      {/* Grid overlay for design reference */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="max-w-[1440px] mx-auto h-full px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-l border-white/20"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Ambient background effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-12 gap-6 items-center min-h-screen py-24">
          
          {/* Left Column - Content (6 columns) */}
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
                <span className="text-sm text-emerald-400">Now Building in APAC</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                Community First.
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">
                  Stablecoin Treasury
                </span>
                <br />
                for the People.
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/60 mb-4">
                Earn. Settle. Belong.
              </p>

              {/* Tagline */}
              <p className="text-lg text-white/50 italic mb-8">
                — the affinity rewards for everyone.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Primary CTA */}
              <a
                href="#product"
                className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-emerald-400 text-black rounded-full inline-flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-200"
              >
                <span>Explore Product</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#partnership"
                className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full inline-flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
              >
                <span>Partner with us</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Visual Placeholder (6 columns) */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              className="relative aspect-square max-w-[600px] mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Abstract Visual Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Rotating ring */}
                <motion.div
                  className="absolute w-full h-full border-2 border-white/10 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Middle ring */}
                <motion.div
                  className="absolute w-4/5 h-4/5 border-2 border-emerald-400/20 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Inner glow */}
                <motion.div
                  className="absolute w-3/5 h-3/5 bg-gradient-to-br from-yellow-400/20 to-emerald-400/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                
                {/* Grid dots */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-4 p-8">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-white/20 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.05,
                        ease: 'easeInOut'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Annotation */}
              <div className="absolute bottom-0 right-0 px-4 py-2 bg-black/80 border border-white/10 rounded-lg text-xs text-white/50">
                Abstract visual placeholder → Replace with Lottie/Video
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
