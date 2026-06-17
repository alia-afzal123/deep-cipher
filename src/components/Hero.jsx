import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";
import introVideo from "../assets/intro.mp4";

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
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=90&fit=crop",
    label: "UI/UX Design",
    kenBurns: { initial: { scale: 1.12, x: -25 }, animate: { scale: 1, x: 25 } },
  },
  {
    image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/cyber-security-abstract-background-free-image.jpeg?w=600&quality=80",
    label: "Cybersecurity",
    kenBurns: { initial: { scale: 1.12, x: -25 }, animate: { scale: 1, x: 25 } },
  },
  {
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=90",
    label: "Creative Design",
    kenBurns: { initial: { scale: 1.12, x: -20 }, animate: { scale: 1, x: 20 } },
  },
];

export default function Hero() {
  const revealRef = useReveal();
  const [current, setCurrent] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setCurrent((c) => (c + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section ref={revealRef} id="home" className="section-reveal relative min-h-screen flex items-center overflow-hidden">

      {/* ── Intro Video (background, 2 sec) ── */}
      {!videoEnded && (
        <motion.div
          className="absolute inset-0 z-[2]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <video
            src={introVideo}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            onEnded={() => setVideoEnded(true)}
            onTimeUpdate={(e) => {
              if (e.target.currentTime >= 3) setVideoEnded(true);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      )}

      {/* ── Slideshow (shows after video ends) ── */}
      {videoEnded && (
        <>
          {prev !== null && (
            <motion.div
              key={"prev-" + prev}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
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
        </>
      )}

      <div className="absolute inset-0 grid-bg opacity-15 z-[3] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-green/10 rounded-full blur-[160px] z-[3] pointer-events-none" />

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full z-[4] pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: i % 2 === 0 ? "#10B981" : "#3B82F6",
          }}
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.6, 0.1] }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 3 }}
        />
      ))}

      {/* ── Content (always visible) ── */}
      <div className="relative z-[5] max-w-7xl mx-auto px-4 lg:px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
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
            transition={{ duration: 2, delay: 0.15 }}
            className="font-display text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white"
          >
            We don't just
            <br />
            build software.
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
            AI, web development, mobile apps, UI/UX design and enterprise software
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
      </div>

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