import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Users, Layers, Brain, Globe, ChevronLeft, ChevronRight } from "lucide-react";

const milestones = [
  {
    icon: Rocket,
    phase: "Phase 01",
    title: "Foundation & Launch",
    desc: "DeepCiphers founded with a clear vision — building a team, establishing core services, and laying the groundwork for premium digital solutions.",
  },
  {
    icon: Users,
    phase: "Phase 02",
    title: "Building Core Team",
    desc: "Assembling a skilled team of developers, designers, and strategists to deliver high-quality web, mobile, and design solutions.",
  },
  {
    icon: Layers,
    phase: "Phase 03",
    title: "Service Expansion",
    desc: "Scaling our service offerings — enterprise applications, UI/UX design systems, and marketing strategies for growing businesses.",
  },
  {
    icon: Brain,
    phase: "Phase 04",
    title: "AI & Cybersecurity Integration",
    desc: "Introducing intelligent systems, automation tools, and cybersecurity solutions to protect and empower digital infrastructure.",
  },
  {
    icon: Globe,
    phase: "Phase 05",
    title: "Global Scaling",
    desc: "Expanding our reach to international markets, transitioning towards product-based offerings and a stronger global presence.",
  },
];

export default function Roadmap() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % milestones.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + milestones.length) % milestones.length);
  };

  const current = milestones[index];
  const Icon = current.icon;

  return (
    <section id="roadmap" className="relative py-28 px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green text-xs tracking-[3px] font-medium mb-3">OUR JOURNEY</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold">
            The <span className="gradient-text">Roadmap</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] min-h-[320px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -80 : 80 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full p-10 md:p-14"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-navy border border-white/10 flex items-center justify-center shrink-0 shadow-[0_0_24px_rgba(16,185,129,0.25)]">
                    <Icon size={22} className="text-green" />
                  </div>
                  <p className="text-blue text-sm tracking-[3px] font-medium">{current.phase}</p>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-white">{current.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-2xl">{current.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={goPrev}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-green/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {milestones.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={i === index ? "w-8 h-2 rounded-full bg-gradient-to-r from-blue to-green transition-all duration-300" : "w-2 h-2 rounded-full bg-white/15 hover:bg-white/30 transition-all duration-300"}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-green/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}