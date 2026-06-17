import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Target, Eye, Rocket } from "lucide-react";
import useReveal from "../hooks/useReveal";

const tabs = [
  {
    id: "Identity",
    icon: Lightbulb,
    label: "Our Identity",
    heading: "What Makes Us Different",
    points: [
      "We think like innovators, not just developers.",
      "We build with purpose every line of code has intent.",
      "We focus on impact, not just output.",
      "We design systems that grow with your ambitions.",
    ],
    closing: "Where ideas evolve into powerful digital realities.",
  },
  {
    id: "Mission",
    icon: Target,
    label: "Mission",
    heading: "What We're Here to Do",
    points: [
      "Turn complexity into simplicity.",
      "Scale with ambition no ceiling, no compromise.",
      "Build systems that think, adapt, and evolve.",
      "Deliver solutions that outlast trends.",
    ],
    closing: "We don't just deliver projects — we build futures.",
  },
  {
    id: "Vision",
    icon: Eye,
    label: "Vision",
    heading: "Where We're Headed",
    points: [
      "Lead at the intersection of AI, Cybersecurity, and Innovation.",
      "Become the go-to tech partner for ambitious companies.",
      "Build products that define industries, not follow them.",
    ],
    closing: "The future belongs to those who build it — and we're building it.",
  },
  {
    id: "Purpose",
    icon: Rocket,
    label: "Purpose",
    heading: "Why We Exist",
    points: [
      "To unlock digital opportunities for businesses of all sizes.",
      "To build scalable products that create real-world impact.",
      "To help companies move from survival to dominance.",
    ],
    closing: "We exist to make the impossible, inevitable.",
  },
];

export default function WhyUs() {
  const revealRef = useReveal();
  const [active, setActive] = useState("Identity");
  const current = tabs.find((t) => t.id === active);
  const Icon = current.icon;

  return (
    <section id="about" ref={revealRef} className="section-reveal relative py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-green/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green/20 bg-green/5 text-sm text-green mb-5">
            Who We Are
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
            Why <span className="gradient-text">DeepCiphers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don't follow trends — we decode them, rebuild them, and lead them.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === tab.id
                    ? "bg-gradient-to-r from-blue/30 to-green/30 text-white border border-green/40 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                    : "bg-white/[0.03] border border-white/10 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue/20 hover:to-green/20 hover:border-green/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                }`}
              >
                <TabIcon size={15} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue/20 to-green/20 border border-white/10 flex items-center justify-center">
                  <Icon size={18} className="text-green" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">{current.heading}</h3>
              </div>
              <ul className="space-y-4">
                {current.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green shrink-0" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="p-12 rounded-2xl border border-white/[0.07] bg-white/[0.02] relative overflow-hidden min-h-[360px] flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green/10 rounded-full blur-[60px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue/10 rounded-full blur-[60px]" />
              <p className="relative z-10 font-display text-xl md:text-2xl font-bold text-white leading-relaxed italic">
                "{current.closing}"
              </p>
              <div className="mt-6 pt-6 border-t border-white/[0.07] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue to-green flex items-center justify-center">
                  <Icon size={14} className="text-navy" />
                </div>
                <span className="text-sm text-gray-400">DeepCiphers — {current.label}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
