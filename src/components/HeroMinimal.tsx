import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Plane } from 'lucide-react';

interface FlightPath {
  id: number;
  delay: number;
  startX: number;
  startY: number;
  duration: number;
}

export function HeroMinimal() {
  const [flightPaths, setFlightPaths] = useState<FlightPath[]>([]);

  useEffect(() => {
    // 生成单条飞行轨迹
    const generateFlightPaths = () => {
      const paths: FlightPath[] = [];
      
      // 创建1条飞行路径
      paths.push({
        id: 0,
        delay: 0,
        startX: 10, // 左下区域起点
        startY: 85, // 底部
        duration: 12, // 12秒持续时间
      });
      
      return paths;
    };

    setFlightPaths(generateFlightPaths());
  }, []);

  return (
    <section id="overview" className="relative min-h-screen overflow-hidden bg-black">
      
      {/* 流体波浪背景 */}
      <div className="absolute inset-0 z-0">
        {/* 第一层波浪 - 深灰色 */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(40, 40, 40, 0.8) 0%, rgba(20, 20, 20, 0.4) 50%, transparent 70%)',
            filter: 'blur(100px)',
            top: '10%',
            left: '15%',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* 第二层波浪 - 中灰色 */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(50, 50, 50, 0.6) 0%, rgba(30, 30, 30, 0.3) 50%, transparent 70%)',
            filter: 'blur(90px)',
            top: '30%',
            right: '10%',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* 第三层波浪 - 浅灰色 */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(60, 60, 60, 0.5) 0%, rgba(40, 40, 40, 0.2) 50%, transparent 70%)',
            filter: 'blur(80px)',
            bottom: '5%',
            left: '25%',
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* 烟雾效果层 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 烟雾粒子1 */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 40%, transparent 70%)',
            filter: 'blur(40px)',
            bottom: '5%',
            left: '15%',
          }}
          animate={{
            y: [0, -600],
            x: [-30, 30, -30],
            opacity: [0, 1, 0],
            scale: [0.8, 2, 2.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0,
          }}
        />
        
        {/* 烟雾粒子2 */}
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.1) 40%, transparent 70%)',
            filter: 'blur(45px)',
            bottom: '8%',
            left: '40%',
          }}
          animate={{
            y: [0, -650],
            x: [40, -40, 40],
            opacity: [0, 1, 0],
            scale: [0.7, 2.2, 2.8],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* 烟雾粒子3 */}
        <motion.div
          className="absolute w-[380px] h-[380px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.09) 40%, transparent 70%)',
            filter: 'blur(38px)',
            bottom: '0%',
            right: '20%',
          }}
          animate={{
            y: [0, -700],
            x: [-35, 35, -35],
            opacity: [0, 1, 0],
            scale: [0.9, 2.3, 3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* 烟雾粒子4 */}
        <motion.div
          className="absolute w-[420px] h-[420px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.07) 40%, transparent 70%)',
            filter: 'blur(42px)',
            bottom: '10%',
            right: '10%',
          }}
          animate={{
            y: [0, -580],
            x: [25, -25, 25],
            opacity: [0, 0.9, 0],
            scale: [0.75, 2.1, 2.6],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        
        {/* 烟雾粒子5 */}
        <motion.div
          className="absolute w-[360px] h-[360px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.095) 40%, transparent 70%)',
            filter: 'blur(36px)',
            bottom: '3%',
            left: '55%',
          }}
          animate={{
            y: [0, -620],
            x: [-40, 40, -40],
            opacity: [0, 0.95, 0],
            scale: [0.85, 2.15, 2.7],
          }}
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        
        {/* 烟雾粒子6 */}
        <motion.div
          className="absolute w-[390px] h-[390px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.075) 40%, transparent 70%)',
            filter: 'blur(44px)',
            bottom: '12%',
            left: '70%',
          }}
          animate={{
            y: [0, -640],
            x: [35, -35, 35],
            opacity: [0, 0.85, 0],
            scale: [0.7, 2.05, 2.55],
          }}
          transition={{
            duration: 10.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        
        {/* 烟雾粒子7 */}
        <motion.div
          className="absolute w-[410px] h-[410px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.155) 0%, rgba(255, 255, 255, 0.085) 40%, transparent 70%)',
            filter: 'blur(41px)',
            bottom: '6%',
            left: '28%',
          }}
          animate={{
            y: [0, -660],
            x: [-28, 28, -28],
            opacity: [0, 0.92, 0],
            scale: [0.82, 2.18, 2.65],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        
        {/* 烟雾粒子8 */}
        <motion.div
          className="absolute w-[440px] h-[440px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.068) 40%, transparent 70%)',
            filter: 'blur(46px)',
            bottom: '4%',
            right: '35%',
          }}
          animate={{
            y: [0, -680],
            x: [32, -32, 32],
            opacity: [0, 0.88, 0],
            scale: [0.78, 2.12, 2.72],
          }}
          transition={{
            duration: 11.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        />
      </div>

      {/* 飞行轨迹 */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {flightPaths.map((path) => {
          // 计算螺旋路径的关键帧
          const spiralKeyframes = Array.from({ length: 20 }, (_, i) => {
            const progress = i / 19;
            const spiralX = path.startX + (progress * 110); // 从左到右
            const spiralY = path.startY - (progress * 110); // 从下到上
            const wave = Math.sin(progress * Math.PI * 4) * 8; // 螺旋波动
            return {
              x: `${spiralX + wave}%`,
              y: `${spiralY + wave * 0.5}%`,
            };
          });

          return (
            <div key={path.id}>
              {/* 飞机图标 */}
              <motion.div
                className="absolute"
                initial={{
                  left: `${path.startX}%`,
                  top: `${path.startY}%`,
                  opacity: 0,
                }}
                animate={{
                  left: spiralKeyframes.map(k => k.x),
                  top: spiralKeyframes.map(k => k.y),
                  opacity: [0, 1, 1, 1, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: path.duration,
                  delay: path.delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Plane 
                  className="w-5 h-5 -rotate-45 text-white" 
                  style={{
                    filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.5))',
                  }}
                />
              </motion.div>

              {/* 飞行拖尾线 */}
              <motion.div
                className="absolute"
                initial={{
                  left: `${path.startX}%`,
                  top: `${path.startY}%`,
                  opacity: 0,
                }}
                animate={{
                  left: spiralKeyframes.map(k => k.x),
                  top: spiralKeyframes.map(k => k.y),
                  opacity: [0, 0.4, 0.4, 0.4, 0],
                }}
                transition={{
                  duration: path.duration,
                  delay: path.delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* SVG 拖尾线 */}
                <svg
                  width="100"
                  height="2"
                  className="-rotate-45 -translate-x-full"
                  style={{ transformOrigin: 'right center' }}
                >
                  <defs>
                    <linearGradient id={`trail-${path.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                      <stop offset="50%" stopColor="rgba(255, 255, 255, 0.3)" />
                      <stop offset="100%" stopColor="rgba(255, 255, 255, 0.6)" />
                    </linearGradient>
                  </defs>
                  <line
                    x1="0"
                    y1="1"
                    x2="100"
                    y2="1"
                    stroke={`url(#trail-${path.id})`}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Hero 主内容 */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full min-h-screen flex flex-col">
        
        {/* 中心主标题区域 */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            
            {/* 大标题 - 双色效果 */}
            <motion.h1
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-[10vw] md:text-[120px] lg:text-[160px] leading-[0.9] tracking-tight">
                <span className="text-white">STABLECOIN</span>{' '}
                <span className="text-white/30">TREASURY</span>
              </span>
            </motion.h1>

            {/* 副标题 */}
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-white/60 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Community First. Affinity Rewards for the people.
            </motion.p>

          </div>
        </div>

        {/* 底部导航 */}
        <motion.div
          className="py-8 border-t border-white/10 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-12 whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* 重复多次以实现无缝循环 */}
            {[...Array(8)].map((_, index) => (
              <div key={index} className="flex items-center gap-12">
                <span className="text-3xl md:text-4xl lg:text-5xl tracking-wider text-white/40">
                  EARN.
                </span>
                <span className="text-3xl md:text-4xl lg:text-5xl tracking-wider text-white/40">
                  EXCHANGE.
                </span>
                <span className="text-3xl md:text-4xl lg:text-5xl tracking-wider text-white/40">
                  BELONG.
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}