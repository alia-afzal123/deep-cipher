import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";
import useReveal from "../hooks/useReveal";

const socials = [
  {
    href: "https://www.instagram.com/deepciphers___official",
    label: "Instagram",
    icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    href: "https://www.facebook.com/share/1ESoEWjUu2/",
    label: "Facebook",
    icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    href: "https://www.linkedin.com/company/deepcipherstech/",
    label: "LinkedIn",
    icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    href: "https://github.com",
    label: "GitHub",
    icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  },
];

const footerLinks = {
  Company: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Roadmap", href: "#roadmap" },
  ],
  Services: [
    { name: "Web Development", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "AI Systems", href: "#services" },
    { name: "Cybersecurity", href: "#services" },
  ],
  Contact: [
    { name: "+92 342 4869651", href: "tel:+923424869651" },
    { name: "deepciphers644@gmail.com", href: "mailto:deepciphers644@gmail.com" },
  ],
};

export default function Footer() {
  const revealRef = useReveal();

  return (
    <footer ref={revealRef} className="section-reveal relative overflow-hidden border-t border-white/[0.06]">
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-green/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="py-12 md:py-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 border-b border-white/[0.06]">

          {/* Logo + description + socials */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5 mb-6">
              <img src={logo} alt="DeepCiphers" className="h-10 sm:h-12 w-auto object-contain" />
            </a>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
              We don't just build software — we engineer digital breakthroughs. AI, web, mobile, and cybersecurity solutions built for impact.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-gray-400 hover:text-green hover:border-green/40 hover:bg-green/5 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-200"
                >
                  <s.icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="col-span-1">
              <h4 className="font-display font-bold text-white text-xs sm:text-sm tracking-wider mb-4 sm:mb-5 uppercase">{heading}</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-xs sm:text-sm hover:text-green transition-colors duration-200 flex items-center gap-1 group break-all sm:break-normal"
                    >
                      <span className="w-0 group-hover:w-2 h-[1px] bg-green transition-all duration-200 inline-block shrink-0" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 md:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2025 <span className="text-white font-semibold">DeepCiphers</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_6px_rgba(16,185,129,0.8)] animate-pulse" />
            <span className="text-gray-500 text-xs sm:text-sm">Unlocking the Digital Possibilities</span>
          </div>
          <motion.a
            href="mailto:deepciphers644@gmail.com"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue to-green text-navy text-xs sm:text-sm font-semibold shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_30px_rgba(16,185,129,0.5)] transition-all duration-200 whitespace-nowrap"
          >
            Get in Touch <ArrowRight size={14} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
