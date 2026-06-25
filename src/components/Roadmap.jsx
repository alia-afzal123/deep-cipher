import { motion } from "framer-motion";
import { Rocket, Users, Brain, Layers, Globe } from "lucide-react";
import useReveal from "../hooks/useReveal";

const milestones = [
  {
    year: "Step 1",
    icon: Rocket,
    title: "Foundation & Launch",
    desc: "DeepCiphers founded with a clear vision building a team, establishing core services, and laying the groundwork for premium digital solutions.",
  },
  {
    year: "Step 2",
    icon: Users,
    title: "Core Team & Service Expansion",
    desc: "Growing our team of developers, designers, and strategists while scaling our offerings enterprise apps, UI/UX systems, and marketing.",
  },
  {
    year: "Step 3",
    icon: Brain,
    title: "AI & Cybersecurity Integration",
    desc: "Introducing intelligent automation, AI-powered systems, and cybersecurity solutions to protect and empower digital infrastructure.",
  },
  {
    year: "Step 4",
    icon: Layers,
    title: "SaaS Products & Platforms",
    desc: "Shifting towards scalable, product-based offerings building our own SaaS platforms for businesses worldwide.",
  },
  {
    year: "Step 5",
    icon: Globe,
    title: "Global Scaling & Expansion",
    desc: "Expanding our reach to international markets, establishing a stronger global presence and brand recognition.",
  },
];

export default function Roadmap() {
  const revealRef = useReveal();

  return (
    <section id="roadmap" ref={revealRef} className="section-reveal relative py-28 px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green/20 bg-green/5 text-sm text-green mb-6">
            Our Journey
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold">
            The <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Where we've been, and where we're headed our journey from foundation to global impact.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          {/* connecting line */}
          <div className="absolute top-7 left-0 right-0 h-[2px] bg-gradient-to-r from-blue/30 via-green/40 to-blue/30" />

          <div className="grid grid-cols-5 gap-4">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* icon node */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-navy border border-white/10 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:border-green/40 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300">
                    <Icon size={22} className="text-green" />
                  </div>

                  <p className="mt-4 font-display text-2xl font-extrabold gradient-text">{m.year}</p>
                  <h3 className="mt-2 font-display text-base font-bold text-white group-hover:text-green transition-colors duration-200 min-h-[40px] flex items-center justify-center">
  {m.title}
</h3>
                  <p className="mt-2 text-gray-400 text-xs leading-relaxed px-1 group-hover:text-gray-300 transition-colors duration-200">
                    {m.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative pl-10">
          <div className="absolute left-[23px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-blue/30 via-green/40 to-blue/30" />

          <div className="space-y-10">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  className="group relative"
                >
                  <div className="absolute -left-10 top-0 w-12 h-12 rounded-full bg-navy border border-white/10 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:border-green/40 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300">
                    <Icon size={18} className="text-green" />
                  </div>

                  <p className="font-display text-xl font-extrabold gradient-text">{m.year}</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-white group-hover:text-green transition-colors duration-200">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
                    {m.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
