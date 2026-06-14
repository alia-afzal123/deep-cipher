import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiFlutter, SiFigma, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiPython, SiTensorflow,
  SiDocker, SiFirebase, SiGit, SiCanva,
  SiGoogleanalytics, SiMeta, SiExpress, SiPostgresql
} from "react-icons/si";
import { Shield, Megaphone, Sparkles } from "lucide-react";
import useReveal from "../hooks/useReveal";

const categories = [
  {
    title: "Web Development",
    techs: [
      { icon: SiReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend & Databases",
    techs: [
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiFirebase, name: "Firebase" },
    ],
  },
  {
    title: "Mobile App Development",
    techs: [
      { icon: SiFlutter, name: "Flutter" },
      { icon: SiReact, name: "React Native" },
      { icon: SiFirebase, name: "Firebase" },
    ],
  },
  {
    title: "UI/UX Design",
    techs: [
      { icon: SiFigma, name: "Figma" },
      { icon: SiFigma, name: "Adobe XD" },
    ],
  },
  {
    title: "Graphic Design",
    techs: [
      { icon: SiFigma, name: "Photoshop" },
      { icon: SiCanva, name: "Canva" },
    ],
  },
  {
    title: "Marketing",
    techs: [
      { icon: SiMeta, name: "Meta Ads" },
      { icon: SiGoogleanalytics, name: "Google Analytics" },
      { icon: Megaphone, name: "SEO & Strategy" },
    ],
  },
  {
    title: "AI & Automation",
    techs: [
      { icon: SiPython, name: "Python" },
      { icon: SiTensorflow, name: "TensorFlow" },
      { icon: Sparkles, name: "AI Tools & APIs" },
    ],
  },
  {
    title: "Cloud Services",
    techs: [
      { icon: SiDocker, name: "AWS" },
      { icon: SiDocker, name: "Docker" },
    ],
  },
  {
    title: "Cybersecurity",
    techs: [
      { icon: Shield, name: "Security Tools" },
      { icon: SiGit, name: "Git / Version Control" },
    ],
  },
];

export default function TechStack() {
  const revealRef = useReveal();

  return (
    <section id="techstack" ref={revealRef} className="section-reveal relative py-20 md:py-28 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green/20 bg-green/5 text-sm text-green mb-6">
            Tools & Technologies
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-2">
            The tools and technologies we use to build, design, and secure digital solutions across every service we offer.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 md:gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: ci * 0.05 }}
              whileHover={{ scale: 1.01 }}
              className="group relative p-5 md:p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-green/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] transition-all duration-300 overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-green/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 relative z-10">
                {/* Category title */}
                <div className="md:w-56 shrink-0">
                  <p className="text-blue text-xs tracking-[2px] font-medium mb-1 group-hover:text-green transition-colors duration-300">
                    0{ci + 1}
                  </p>
                  <h3 className="font-display text-lg md:text-xl font-bold text-white group-hover:text-green transition-colors duration-300">
                    {cat.title}
                  </h3>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {cat.techs.map((tech, ti) => {
                    const Icon = tech.icon;
                    return (
                      <motion.div
                        key={ti}
                        whileHover={{ y: -4 }}
                        className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-green/40 hover:bg-white/[0.06] hover:shadow-[0_0_16px_rgba(16,185,129,0.2)] transition-all duration-200 group/tech"
                      >
                        <Icon size={16} className="text-gray-400 group-hover/tech:text-green transition-colors duration-200 shrink-0" />
                        <span className="text-xs md:text-sm text-gray-400 group-hover/tech:text-white transition-colors duration-200 whitespace-nowrap">
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom line animation */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue to-green scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
