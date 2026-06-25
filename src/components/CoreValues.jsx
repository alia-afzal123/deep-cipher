import { motion } from "framer-motion";
import useReveal from "../hooks/useReveal";

const values = [
  {
    number: "01",
    title: "Innovation",
    desc: "We constantly explore new technologies and ideas to stay ahead of the curve and build solutions that matter.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
  },
  {
    number: "02",
    title: "Integrity",
    desc: "We believe in honest communication, transparent processes, and doing what's right even when no one's watching.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
  },
  {
    number: "03",
    title: "Excellence",
    desc: "We hold ourselves to the highest standards, refining every detail until it's something we're proud of.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
  },
  {
    number: "04",
    title: "Collaboration",
    desc: "Great products are built together. We work closely with our clients and each other to bring ideas to life.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1200&q=80",
  },
  {
    number: "05",
    title: "Impact",
    desc: "We measure success by the real-world results our work creates not just the lines of code we write.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
  },
  {
    number: "06",
    title: "Creativity",
    desc: "We approach every challenge with fresh thinking, turning constraints into opportunities for something unique.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
  },
];

function ValueRow({ value, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative grid md:grid-cols-2 items-center gap-8 py-10 border-b border-white/[0.07] last:border-b-0"
    >
      <div>
        <span className="font-display text-sm font-semibold text-green tracking-widest">{value.number}</span>
        <h3 className="font-display text-3xl md:text-5xl font-extrabold text-white mt-2 group-hover:text-green transition-colors duration-300">
          {value.title}
        </h3>
        <p className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed max-w-md">
          {value.desc}
        </p>
      </div>

      <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden border border-white/[0.07]">
        <img
          src={value.image}
          alt={value.title}
          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-95 group-hover:scale-110 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-green/0 to-blue/0 group-hover:from-green/15 group-hover:to-blue/15 transition-all duration-500" />
        <div className="absolute inset-0 border border-transparent group-hover:border-green/30 rounded-2xl transition-colors duration-300" />
      </div>
    </motion.div>
  );
}

export default function CoreValues() {
  const revealRef = useReveal();

  return (
    <section id="values" ref={revealRef} className="section-reveal relative py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green/20 bg-green/5 text-sm text-green mb-6">
            What Drives Us
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-white mb-5">
            Our Core <span className="gradient-text">Values</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            The principles that guide every decision, every line of code, and every client relationship.
          </p>
        </motion.div>

        <div>
          {values.map((value, i) => (
            <ValueRow key={i} value={value} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
