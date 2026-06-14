import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useReveal from "../hooks/useReveal";

const stats = [
  { value: 3, suffix: "", label: "Co-Founders" },
  { value: 9, suffix: "+", label: "Services Offered" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 24, suffix: "/7", label: "Support & Availability" },
];

function Counter({ value, suffix, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const revealRef = useReveal();

  return (
    <section ref={revealRef} className="section-reveal relative py-15 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-green/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-green/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] transition-all duration-300 text-center"
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold gradient-text">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                {stat.label}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue to-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
