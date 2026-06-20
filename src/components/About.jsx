import { motion } from "framer-motion";
import useReveal from "../hooks/useReveal";

export default function About() {
  const revealRef = useReveal();

  return (
    <section id="about" ref={revealRef} className="section-reveal relative py-28 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-green/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green/20 bg-green/5 text-sm text-green">
            Who We Are
          </span>
        </motion.div>

        {/* Heading with flip effect on hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2
            className="font-display text-4xl md:text-6xl font-extrabold text-white inline-block cursor-default select-none"
            style={{ perspective: "600px" }}
            onMouseEnter={e => {
              e.currentTarget.style.transition = "transform 0.4s ease";
              e.currentTarget.style.transform = "rotateX(20deg) scale(1.04)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transition = "transform 0.4s ease";
              e.currentTarget.style.transform = "rotateX(0deg) scale(1)";
            }}
          >
            About <span className="gradient-text">DeepCiphers</span>
          </h2>
        </motion.div>

        {/* Content blocks */}
        <div className="space-y-8">

          {/* Block 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-green/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue/20 to-green/20 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                <span className="font-display font-bold text-green text-sm">01</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-green transition-colors duration-200">Who We Truly Are</h3>
                <p className="text-gray-400 leading-relaxed text-base">
                  DeepCiphers is not just a software house, it is a{" "}
                  <span className="text-white font-semibold">launchpad of ideas, innovation, and transformation.</span>{" "}
                  We build with intent, think with clarity, and deliver with precision.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue to-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
          </motion.div>

          {/* Block 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-green/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue/20 to-green/20 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                <span className="font-display font-bold text-green text-sm">02</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-green transition-colors duration-200">Our Origin</h3>
                <p className="text-gray-400 leading-relaxed text-base">
                  Born from a{" "}
                  <span className="text-white font-semibold">3-partner vision</span>, we exist to challenge ordinary development standards and replace them with{" "}
                  <span className="text-white font-semibold">intelligent, future-ready solutions.</span>{" "}
                  Every line of code we write carries a purpose.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue to-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
          </motion.div>

          {/* Closing quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative p-10 rounded-2xl border border-green/20 bg-green/[0.03] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-green/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-blue/10 rounded-full blur-[60px]" />
            <p className="relative z-10 font-display text-xl md:text-3xl font-extrabold leading-relaxed text-center gradient-text italic">
              We don't follow trends we decode them, rebuild them, and lead them.
            </p>
            <p className="relative z-10 text-center text-sm text-gray-500 mt-4">— DeepCiphers</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
