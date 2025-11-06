import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black"></div>
      
      {/* Ambient Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-yellow-500/10 to-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Globe */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Main Globe */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 40, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* Globe sphere */}
                <div className="relative w-96 h-96 rounded-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-black border border-emerald-400/20 shadow-2xl overflow-hidden">
                  
                  {/* Grid lines - latitude */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`lat-${i}`}
                      className="absolute left-0 right-0 border-t border-emerald-400/20"
                      style={{
                        top: `${(i + 1) * 11.11}%`,
                      }}
                    />
                  ))}
                  
                  {/* Grid lines - longitude */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={`lon-${i}`}
                      className="absolute top-0 bottom-0 border-l border-emerald-400/20"
                      style={{
                        left: `${(i + 1) * 8.33}%`,
                      }}
                    />
                  ))}

                  {/* Connection nodes - distributed globally */}
                  {[
                    { top: '20%', left: '30%', delay: 0 },
                    { top: '35%', left: '60%', delay: 0.5 },
                    { top: '50%', left: '25%', delay: 1 },
                    { top: '65%', left: '70%', delay: 1.5 },
                    { top: '45%', left: '80%', delay: 2 },
                    { top: '30%', left: '45%', delay: 2.5 },
                    { top: '70%', left: '40%', delay: 3 },
                    { top: '25%', left: '75%', delay: 3.5 },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-emerald-400 shadow-lg"
                      style={{
                        top: point.top,
                        left: point.left,
                        boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)',
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [0, 1.5, 1],
                        opacity: [0, 1, 1],
                      }}
                      transition={{
                        duration: 1,
                        delay: point.delay,
                        repeat: Infinity,
                        repeatDelay: 4,
                      }}
                    >
                      {/* Pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-emerald-400"
                        animate={{
                          scale: [1, 3, 3],
                          opacity: [0.8, 0, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: point.delay,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      />
                    </motion.div>
                  ))}

                  {/* Gradient overlay for sphere effect */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 40%, rgba(0,0,0,0.6) 100%)',
                    }}
                  />
                  
                  {/* Glow highlight */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)',
                    }}
                  />
                </div>
              </motion.div>

              {/* Orbiting rings */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div 
                  className="w-[420px] h-[420px] rounded-full border-2 border-dashed border-yellow-400/30"
                  style={{
                    borderSpacing: '10px',
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-[450px] h-[450px] rounded-full border border-emerald-400/20" />
              </motion.div>

              {/* Outer glow */}
              <motion.div 
                className="absolute inset-0 -z-10"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-emerald-500/30 to-lime-500/20 rounded-full blur-3xl"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400/10 to-emerald-400/10 border border-emerald-400/30 rounded-full backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                className="w-2 h-2 bg-emerald-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <span className="text-sm text-white/80">Now Building in APAC</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="block mb-3">Community First.</span>
              <span className="block bg-gradient-to-r from-yellow-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
                Stablecoin Treasury
              </span>
              <span className="block text-white/60 mt-3">for the People.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p className="text-xl md:text-2xl text-white/80 flex items-center gap-3 flex-wrap">
                <span className="text-emerald-400">Earn.</span>
                <span className="text-yellow-400">Settle.</span>
                <span className="text-lime-400">Belong.</span>
              </p>
              <p className="text-lg text-white/50">
                — the affinity rewards for everyone.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-emerald-400/30 rounded-full flex items-start justify-center p-2">
          <motion.div 
            className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}