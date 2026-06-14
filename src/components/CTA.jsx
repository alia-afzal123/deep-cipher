import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

export default function CTA() {
  const revealRef = useReveal();

  return (
    <section ref={revealRef} className="section-reveal relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-green/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue/10 rounded-full blur-[150px] pointer-events-none" />

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: i % 2 === 0 ? "#10B981" : "#3B82F6",
          }}
          animate={{ y: [0, -25, 0], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 3 }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green/20 bg-green/5 text-sm text-green mb-8"
          >
            Ready to Begin?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6"
          >
            The future isn't built
            <br />
            by waiting —
            <br />
            <span className="gradient-text">it's built by those</span>
            <br />
            <span className="gradient-text">who create it</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Join DeepCiphers and let's engineer your digital breakthrough together.
            Your vision deserves more than just code — it deserves a partner.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-blue to-green text-navy font-bold text-lg shadow-[0_8px_40px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_50px_rgba(16,185,129,0.6)] transition-all duration-200"
            >
              Start a Project <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:border-green/40 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-200"
            >
              Explore Services
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 pt-12 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-10 text-gray-500 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span>AI-Powered Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span>Built for Scale</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span>Results Driven</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}