import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { projectsData } from "../data/projects";

function ProjectCard({ project, index }) {
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="relative group rounded-2xl overflow-hidden cursor-pointer h-[420px] border border-white/[0.06]"
    >
      <Link to={`/projects/${project.slug}`} className="absolute inset-0 z-20" aria-label={`Explore ${project.title}`} />

      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 transition-colors duration-300" />
      <div className="absolute inset-0 bg-gradient-to-br from-green/0 to-blue/0 group-hover:from-green/15 group-hover:to-blue/15 transition-all duration-500" />

      <span className="absolute top-5 left-5 px-3 py-1 rounded-full text-[11px] font-medium bg-white/[0.08] text-gray-200 border border-white/[0.1] backdrop-blur-sm">
        {project.category}
      </span>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="w-8 h-1 rounded-full bg-gradient-to-r from-blue to-green mb-3 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
        <h3 className="font-display font-bold text-white text-2xl leading-tight group-hover:text-green transition-colors duration-200">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-gray-300 leading-relaxed line-clamp-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          {project.shortDesc}
        </p>

        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.12] text-sm text-white font-medium backdrop-blur-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Explore Project
          <ArrowUpRight size={15} />
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-green/30 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}

function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export default function Projects() {
  const revealRef = useReveal();
  const pages = chunk(projectsData, 3);

  return (
    <section id="projects" ref={revealRef} className="section-reveal relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div className="absolute top-[-10%] right-1/4 w-[600px] h-[600px] bg-blue/6 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-1/4 w-[600px] h-[600px] bg-green/6 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green/20 bg-green/5 text-sm text-green mb-6">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-white mb-5">
            Projects That <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Hover a project to preview it, click to explore the full case study. Scroll down for more.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 space-y-10 pb-20">
        {pages.map((pageProjects, pageIndex) => (
          <div
            key={pageIndex}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[60vh] items-center"
          >
            {pageProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={pageIndex * 3 + i} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}