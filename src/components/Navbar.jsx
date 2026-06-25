import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { Menu, X, ChevronDown, Moon, Sun, ArrowRight } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItemClass = (name) => {
    if (active === name) {
      return "px-[18px] py-2 rounded-lg transition-all duration-200 bg-gradient-to-r from-blue/20 to-green/20 text-white shadow-[0_0_20px_rgba(16,185,129,0.5),0_0_40px_rgba(59,130,246,0.3)] border border-green/30";
    }
    return `px-[18px] py-2 rounded-lg transition-all duration-200 ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-700 hover:text-gray-900"} hover:bg-gradient-to-r hover:from-blue/10 hover:to-green/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.4),0_0_35px_rgba(59,130,246,0.25)] hover:border hover:border-green/20 border border-transparent`;
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className={`relative px-4 sm:px-6 lg:px-12 py-4 transition-all duration-300 backdrop-blur-xl border-b ${darkMode ? "bg-[#070B12]/90 border-white/[0.06]" : "bg-white/80 border-gray-200"}`}>
        <div className="absolute -top-16 left-[10%] w-60 h-32 bg-green/15 rounded-full blur-[60px] pointer-events-none"></div>
        <div className="absolute -top-16 right-[15%] w-48 h-32 bg-blue/15 rounded-full blur-[60px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto flex items-center justify-between relative z-10">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <img src={logo} alt="DeepCiphers" className="h-11 sm:h-13 w-auto object-contain -ml-2" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5 bg-white/[0.03] border border-white/[0.06] rounded-lg p-1.5 text-[13px] font-medium">
            <a href="#home" onMouseEnter={() => setActive("Home")} className={navItemClass("Home")}>Home</a>
            <a href="#about" onMouseEnter={() => setActive("About")} className={navItemClass("About")}>About</a>

            <div className="relative" onMouseEnter={() => { setServicesOpen(true); setActive("Services"); }} onMouseLeave={() => setServicesOpen(false)}>
              <button className={navItemClass("Services") + " flex items-center gap-1"}>
                Services <ChevronDown size={13} className={servicesOpen ? "transition-transform duration-200 rotate-180" : "transition-transform duration-200"} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-navy/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/60 p-2"
                  >
                    <a href="#services" className="block px-4 py-3 text-[13px] rounded-xl text-gray-300 hover:bg-white/[0.04] hover:text-green transition-all duration-150">Web Development</a>
                    <a href="#services" className="block px-4 py-3 text-[13px] rounded-xl text-gray-300 hover:bg-white/[0.04] hover:text-green transition-all duration-150">Mobile App Development</a>
                    <a href="#services" className="block px-4 py-3 text-[13px] rounded-xl text-gray-300 hover:bg-white/[0.04] hover:text-green transition-all duration-150">UI/UX Design</a>
                    <a href="#services" className="block px-4 py-3 text-[13px] rounded-xl text-gray-300 hover:bg-white/[0.04] hover:text-green transition-all duration-150">AI Solutions</a>
                    <a href="#services" className="block px-4 py-3 text-[13px] rounded-xl text-gray-300 hover:bg-white/[0.04] hover:text-green transition-all duration-150">Cloud Services</a>
                    <a href="#services" className="block px-4 py-3 text-[13px] rounded-xl text-gray-300 hover:bg-white/[0.04] hover:text-green transition-all duration-150">Cybersecurity</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#team" onMouseEnter={() => setActive("Team")} className={navItemClass("Team")}>Team</a>
            <a href="#roadmap" onMouseEnter={() => setActive("Roadmap")} className={navItemClass("Roadmap")}>Roadmap</a>
            <a href="#contact" onMouseEnter={() => setActive("Contact")} className={navItemClass("Contact")}>Contact</a>
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="w-14 h-[30px] rounded-full bg-white/[0.05] border border-white/[0.08] relative flex items-center px-[3px]">
              <motion.div
                className="w-[22px] h-[22px] rounded-full bg-gradient-to-br from-blue to-green flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                animate={{ x: darkMode ? 1 : 26 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              >
                {darkMode ? <Moon size={12} className="text-navy" /> : <Sun size={12} className="text-navy" />}
              </motion.div>
            </button>

            <a href="#contact" className="flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue to-green text-[13px] font-semibold text-navy shadow-[0_6px_24px_rgba(16,185,129,0.3)] hover:scale-[1.03] transition-transform duration-200 whitespace-nowrap">
              Start a project <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Right */}
          <div className="flex lg:hidden items-center gap-3">
            <button onClick={() => setDarkMode(!darkMode)} className="w-12 h-[26px] rounded-full bg-white/[0.05] border border-white/[0.08] relative flex items-center px-[3px]">
              <motion.div
                className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-blue to-green flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                animate={{ x: darkMode ? 1 : 20 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              >
                {darkMode ? <Moon size={11} className="text-navy" /> : <Sun size={11} className="text-navy" />}
              </motion.div>
            </button>
            <button className={darkMode ? "text-white p-2" : "text-gray-900 p-2"} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden backdrop-blur-xl border-t overflow-hidden ${darkMode ? "bg-[#070B12]/98 border-white/[0.06]" : "bg-white/98 border-gray-200"}`}
          >
            <div className={`flex flex-col gap-1 px-6 py-6 text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              <a onClick={() => { setMenuOpen(false); setTimeout(() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }), 300); }} className="cursor-pointer py-3 border-b border-white/[0.06] hover:text-green transition-colors">Home</a>
              <a onClick={() => { setMenuOpen(false); setTimeout(() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }), 300); }} className="cursor-pointer py-3 border-b border-white/[0.06] hover:text-green transition-colors">About</a>
              <a onClick={() => { setMenuOpen(false); setTimeout(() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }), 300); }} className="cursor-pointer py-3 border-b border-white/[0.06] hover:text-green transition-colors">Services</a>
              <a onClick={() => { setMenuOpen(false); setTimeout(() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" }), 300); }} className="cursor-pointer py-3 border-b border-white/[0.06] hover:text-green transition-colors">Team</a>
              <a onClick={() => { setMenuOpen(false); setTimeout(() => document.getElementById("roadmap")?.scrollIntoView({ behavior: "smooth" }), 300); }} className="cursor-pointer py-3 border-b border-white/[0.06] hover:text-green transition-colors">Roadmap</a>
              <a onClick={() => { setMenuOpen(false); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 300); }} className="cursor-pointer py-3 hover:text-green transition-colors">Contact</a>
              <a onClick={() => { setMenuOpen(false); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 300); }} className="cursor-pointer mt-4 px-5 py-3.5 text-center rounded-full bg-gradient-to-r from-blue to-green text-navy font-semibold text-[14px]">
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}