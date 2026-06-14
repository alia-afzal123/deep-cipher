import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import useReveal from "../hooks/useReveal";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=90",
    label: "Web Development",
    kenBurns: { initial: { scale: 1.15, x: 20 }, animate: { scale: 1, x: 0 } },
  },
  {
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1920&q=90",
    label: "Mobile Apps",
    kenBurns: { initial: { scale: 1, y: 0 }, animate: { scale: 1.15, y: -20 } },
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=90",
    label: "Cybersecurity",
    kenBurns: { initial: { scale: 1.12, x: -25 }, animate: { scale: 1, x: 25 } },
  },
  {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=90",
    label: "AI Solutions",
    kenBurns: { initial: { scale: 1.1, y: -20 }, animate: { scale: 1, y: 0 } },
  },
  {
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=90",
    label: "UI/UX Design",
    kenBurns: { initial: { scale: 1.12, x: -20 }, animate: { scale: 1, x: 20 } },
  },
];

const particles = [...Array(18)].map((_, i) => ({
  id: i,
  size: i % 4 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
  top: Math.random() * 100,
  left: Math.random() * 100,
  color: i % 2 === 0 ? "#10B981" : "#3B82F6",
  duration: 3 + Math.random() * 5,
  delay: Math.random() * 4,
  depth: i % 3 === 0 ? 1.5 : i % 2 === 0 ? 1 : 0.5,
}));

export default function Hero() {
  const revealRef = useReveal();
  const sectionRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 22, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 22, mass: 0.5 });

  const bgX = useTransform(springX, [-0.5, 0.5], [25, -25]);
  const bgY = useTransform(springY, [-0.5, 0.5], [18, -18]);
  const bgRotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const bgRotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);
  const contentX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const contentY = useTransform(springY, [-0.5, 0.5], [-8, 8]);
  const glowX = useTransform(springX, [-0.5, 0.5], [12, -12]);
  const glowY = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const particleX = useTransform(springX, [-0.5, 0.5], [-30, 30]);
  const particleY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setCurrent((c) => (c + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        revealRef.current = el;
      }}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="section-reveal relative min-h-screen flex items-center overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {prev !== null && (
        <motion.div
          key={"prev-" + prev}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ x: bgX, y: bgY, rotateX: bgRotateX, rotateY: bgRotateY, scale: 1.08 }}
          className="absolute inset-0 z-[1]"
        >
          <motion.img
            src={slides[prev].image}
            alt=""
            initial={slides[prev].kenBurns.animate}
            animate={slides[prev].kenBurns.animate}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      )}

      <motion.div
        key={"curr-" + current}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ x: bgX, y: bgY, rotateX: bgRotateX, rotateY: bgRotateY, scale: 1.08 }}
        className="absolute inset-0 z-[2]"
      >
        <motion.img
          src={slides[current].image}
          alt={slides[current].label}
          initial={slides[current].kenBurns.initial}
          animate={slides[current].kenBurns.animate}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </motion.div>

      <div className="absolute inset-0 grid-bg opacity-15 z-[3] pointer-events-none" />

      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-green/10 rounded-full blur-[160px] z-[3] pointer-events-none"
      />
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue/10 rounded-full blur-[140px] z-[3] pointer-events-none"
      />

      <motion.div style={{ x: particleX, y: particleY }} className="absolute inset-0 z-[4] pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size * 2}px`,
              height: `${p.size * 2}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            }}
            animate={{ y: [0, -30 * p.depth, 0], opacity: [0.1, 0.7, 0.1] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        ))}
      </motion.div>

      <motion.div
        style={{ x: contentX, y: contentY }}
        className="relative z-[5] max-w-7xl mx-auto px-4 lg:px-10 pt-28 pb-20 w-full"
      >
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-green/30 bg-green/10 text-sm text-green mb-8 backdrop-blur-sm"
          >
            <Sparkles size={14} />
            Unlocking the Digital Possibilities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white"
          >
            We don't just
            <br />
            build software —
            <br />
            <span className="gradient-text">we engineer digital</span>
            <br />
            <span className="gradient-text">breakthroughs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed"
          >
            AI, web development, mobile apps, UI/UX design and enterprise software —
            engineered for impact, not just delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue to-green text-navy font-semibold flex items-center gap-2 shadow-[0_8px_30px_rgba(16,185,129,0.4)] hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(16,185,129,0.5)] transition-all duration-200 w-fit">
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="px-8 py-4 rounded-full border border-white/25 font-semibold text-white hover:border-green/50 hover:bg-white/5 transition-all duration-200 w-fit backdrop-blur-sm">
              View Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-14 flex items-center gap-3"
          >
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => { setPrev(current); setCurrent(i); }}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-2 bg-green shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
            <AnimatePresence mode="wait">
              <motion.span
                key={current}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="ml-3 text-sm text-gray-400"
              >
                {slides[current].label}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2 z-[5]"
      >
        <div className="w-1 h-2 bg-gradient-to-b from-green to-blue rounded-full" />
      </motion.div>
    </section>
  );
}