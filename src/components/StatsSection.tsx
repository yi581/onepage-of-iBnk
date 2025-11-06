import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

function CountUpStat({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState('0');
  const hasAnimated = useRef(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const controls = animate(count, value, {
              duration,
              ease: 'easeOut'
            });
            return () => controls.stop();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [count, value, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest.toString());
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <div ref={elementRef} className="tabular-nums">
      {displayValue}{suffix}
    </div>
  );
}

export function StatsSection() {
  const stats = [
    { value: 10000, suffix: '+', label: 'Active Users' },
    { value: 50, suffix: '+', label: 'Partner Merchants' },
    { value: 99.9, suffix: '%', label: 'Uptime' },
    { value: 24, suffix: '/7', label: 'Support' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white/5 rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Number with count-up animation */}
              <div className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                <CountUpStat value={stat.value} suffix={stat.suffix} />
              </div>
              
              {/* Label */}
              <div className="text-white/60 text-sm md:text-base">
                {stat.label}
              </div>

              {/* Accessible static fallback */}
              <noscript>
                <div className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {stat.value}{stat.suffix}
                </div>
              </noscript>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
