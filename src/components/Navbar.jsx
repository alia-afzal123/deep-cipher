import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { Menu, X, ChevronDown, Moon, Sun, ArrowRight } from "lucide-react";

const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "roadmap", label: "Roadmap" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const hoverActive = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav item for the section currently in view
  useEffect(() => {
    const sections = NAV_SECTIONS
      .map((s) => ({ ...s, el: document.getElementById(s.id) }))
      .filter((s) => s.el);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.el === entry.target);
            if (match && hoverActive.current === null) {
              setActive(match.label);
            }
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s.el));
    return () => observer.disconnect();
  }, []);

  const navItemClass = (name) => {
    if (active === name) {
      return "px-[18px] py-2 rounded-full transition-all duration-200 bg-gradient-to-r from-blue/20 to-green/20 text-white shadow-[0_0_20px_rgba(16,185,129,0.5),0_0_40px_rgba(59,130,246,0.3)] border border-green/30";
    }
    return "px-[18px] py-2 rounded-full transition-all duration-200 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue/10 hover:to-green/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.4),0_0_35px_rgba(59,130,246,0.25)] hover:border hover:border-green/20 border border-transparent";
  };

  // Underline that animates from 0 -> full width on hover, sliding left to right
  const NavLink = ({ name, href, children, extraClass = "" }) => (
    <a
      href={href}
      onMouseEnter={() => { hoverActive.current = name; setActive(name); }}
      onMouseLeave={() => { hoverActive.current = null; }}
      className={`relative group ${navItemClass(name)} ${extraClass}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute left-[18px] right-[18px] -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-blue to-green scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
    </a>
  );

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className={`relative px-4 sm:px-6 lg:px-12 transition-all duration-300 border-b ${
        scrolled
          ? "py-3 bg-[#070B12]/80 backdrop-blur-2xl border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "py-4 bg-[#070B12]/40 backdrop-blur-md border-white/[0.04]"
      }`}>

        <div className="absolute -top-16 left-[10%] w-60 h-32 bg-green/15 rounded-full blur-[60px] pointer-events-none"></div>
        <div className="absolute -top-16 right-[15%] w-48 h-32 bg-blue/15 rounded-full blur-[60px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto flex items-center justify-between relative z-10">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <img src={logo} alt="DeepCiphers" className="h-15 sm:h-18 w-auto object-contain -ml-2" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5 bg-white/[0.03] border border-white/[0.06] rounded-full p-1.5 text-[13px] font-medium">
            <NavLink name="Home" href="#home">Home</NavLink>
            <NavLink name="About" href="#about">About</NavLink>

            <div
              className="relative"
              onMouseEnter={() => { setServicesOpen(true); hoverActive.current = "Services"; setActive("Services"); }}
              onMouseLeave={() => { setServicesOpen(false); hoverActive.current = null; }}
            >
              <button className={`relative group ${navItemClass("Services")} flex items-center gap-1`}>
                <span className="relative z-10 flex items-center gap-1">
                  Services <ChevronDown size={13} className={servicesOpen ? "transition-transform duration-200 rotate-180" : "transition-transform duration-200"} />
                </span>
                <span className="absolute left-[18px] right-[18px] -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-blue to-green scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
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

            <NavLink name="Projects" href="#projects">Projects</NavLink>
            <NavLink name="Roadmap" href="#roadmap">Roadmap</NavLink>
            <NavLink name="Contact" href="#contact">Contact</NavLink>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="w-10 h-[23px] rounded-full bg-white/[0.05] border border-white/[0.08] relative flex items-center px-[2px]">
              <motion.div
                className="w-[17px] h-[17px] rounded-full bg-gradient-to-br from-blue to-green flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                animate={{ x: darkMode ? 19 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              >
                {darkMode ? <Moon size={9} className="text-navy" /> : <Sun size={9} className="text-navy" />}
              </motion.div>
            </button>

            <a href="#contact" className="flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue to-green text-[13px] font-semibold text-navy shadow-[0_6px_24px_rgba(16,185,129,0.3)] hover:scale-[1.03] transition-transform duration-200 whitespace-nowrap">
              Start a project <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button className="lg:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#070B12]/98 backdrop-blur-xl border-t border-white/[0.06] overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6 text-gray-300 text-sm">
  <a onClick={() => { setMenuOpen(false); setTimeout(() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }), 300); }} className="cursor-pointer py-3 border-b border-white/[0.06] hover:text-green transition-colors">Home</a>
  <a onClick={() => { setMenuOpen(false); setTimeout(() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }), 300); }} className="cursor-pointer py-3 border-b border-white/[0.06] hover:text-green transition-colors">About</a>
  <a onClick={() => { setMenuOpen(false); setTimeout(() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }), 300); }} className="cursor-pointer py-3 border-b border-white/[0.06] hover:text-green transition-colors">Services</a>
  <a onClick={() => { setMenuOpen(false); setTimeout(() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }), 300); }} className="cursor-pointer py-3 border-b border-white/[0.06] hover:text-green transition-colors">Projects</a>
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
