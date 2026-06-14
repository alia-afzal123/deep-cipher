import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code2, Layers, ListChecks, Target } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-display text-4xl font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
        <Link to="/#projects" className="px-6 py-3 rounded-full bg-gradient-to-r from-blue to-green text-navy font-semibold">
          Back to Projects
        </Link>
      </section>
    );
  }

  const Icon = project.icon;

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero image */}
      <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-28 left-6 lg:left-10 flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] text-white text-sm backdrop-blur-sm hover:bg-white/[0.15] transition-colors duration-200"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <div className="absolute bottom-0 left-0 w-full px-6 lg:px-10 pb-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green/30 bg-green/10 text-sm text-green mb-4 backdrop-blur-sm">
              <Icon size={14} />
              {project.category}
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white">
              {project.title}
            </h1>
            <p className="mt-3 text-lg text-gray-300 max-w-2xl">{project.shortDesc}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue/20 to-green/20 border border-white/10 flex items-center justify-center">
                  <Target size={18} className="text-green" />
                </div>
                <h2 className="font-display text-2xl font-bold text-white">Project Purpose</h2>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">{project.purpose}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue/20 to-green/20 border border-white/10 flex items-center justify-center">
                  <ListChecks size={18} className="text-green" />
                </div>
                <h2 className="font-display text-2xl font-bold text-white">Key Features</h2>
              </div>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-green shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right column - sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue/20 to-green/20 border border-white/10 flex items-center justify-center">
                  <Code2 size={16} className="text-green" />
                </div>
                <h3 className="font-display font-bold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.languages.map((lang, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-gray-300">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue/20 to-green/20 border border-white/10 flex items-center justify-center">
                  <Layers size={16} className="text-green" />
                </div>
                <h3 className="font-display font-bold text-white">Frameworks & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.frameworks.map((fw, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-gray-300">
                    {fw}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-white font-semibold hover:bg-white/[0.1] hover:border-green/30 transition-all duration-200"
              >
                <FaGithub size={18} />
                View on GitHub
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue to-green text-navy font-semibold hover:scale-[1.02] transition-transform duration-200"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
