import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useReveal from "../hooks/useReveal";

const current = [
  {
    title: "Web Development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
  },
  {
    title: "Mobile App Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
  },
  {
    title: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
  {
    title: "Marketing Strategies",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
];

const coming = [
  {
    title: "AI Systems",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    soon: true,
  },
  {
    title: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    soon: true,
  },
  {
    title: "Smart Automation",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    soon: true,
  },
  {
    title: "Intelligent Platforms",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    soon: true,
  },
];

const marqueeItems = [
  "Web Development", "Mobile Apps", "UI/UX Design", "AI Systems",
  "Cybersecurity", "Smart Automation", "Marketing", "Intelligent Platforms",
  "Web Development", "Mobile Apps", "UI/UX Design", "AI Systems",
  "Cybersecurity", "Smart Automation", "Marketing", "Intelligent Platforms",
];

function ServiceCard({ title, image, soon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group rounded-2xl overflow-hidden cursor-pointer h-72"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {soon && (
        <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-blue/20 text-blue-300 border border-blue/30 backdrop-blur-sm animate-pulse">
          Coming Soon
        </span>
      )}

      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="font-display font-bold text-white text-xl leading-tight group-hover:text-green transition-colors duration-200">
          {title}
        </h3>
        <div className="w-0 group-hover:w-12 h-[2px] bg-gradient-to-r from-green to-blue mt-2 transition-all duration-300" />
      </div>

      <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-green/30 transition-colors duration-300" />
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const revealRef = useReveal();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section id="services" ref={revealRef} className="section-reveal relative py-32 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none" ref={ref}>
        <div className="absolute top-[-10%] left-1/4 w-[700px] h-[700px] bg-green/6 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-10%] right-1/4 w-[600px] h-[600px] bg-blue/6 rounded-full blur-[180px]" />
      </motion.div>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green/20 bg-green/5 text-sm text-green mb-6">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-white">
            Transform Your <span className="gradient-text">Business</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative overflow-hidden py-6 mb-16">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-bg to-transparent z-10" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 whitespace-nowrap"
        >
          {marqueeItems.map((item, i) => (
            <div key={i} className="flex items-center gap-6 shrink-0">
              <span className="text-lg font-display font-semibold text-gray-400 hover:text-green transition-colors cursor-default">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green/40 shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-green shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          <span className="text-white font-semibold tracking-wide">Current Services</span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-green/20 to-transparent ml-2" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {current.map((s, i) => (
            <ServiceCard key={i} {...s} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-blue animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          <span className="text-white font-semibold tracking-wide">Coming Soon</span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-blue/20 to-transparent ml-2" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coming.map((s, i) => (
            <ServiceCard key={i} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}