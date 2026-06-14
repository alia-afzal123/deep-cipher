import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
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

export default function Contact() {
  const revealRef = useReveal();

  return (
    <section ref={revealRef} id="contact" className="section-reveal relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-green/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green/20 bg-green/5 text-sm text-green mb-5">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
              <h3 className="font-display font-bold text-white text-xl mb-6">Contact Information</h3>

              <div className="space-y-5">
                <a href="tel:+923424869651" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue/20 to-green/20 border border-white/10 flex items-center justify-center group-hover:border-green/40 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-200">
                    <Phone size={18} className="text-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                    <p className="text-white font-medium group-hover:text-green transition-colors duration-200">+92 342 4869651</p>
                  </div>
                </a>

                <a href="mailto:deepciphers644@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer">
  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue/20 to-green/20 border border-white/10 flex items-center justify-center group-hover:border-green/40 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-200">
    <Mail size={18} className="text-green" />
  </div>
  <div>
    <p className="text-xs text-gray-500 mb-0.5">Email</p>
    <p className="text-white font-medium group-hover:text-green transition-colors duration-200">deepciphers644@gmail.com</p>
  </div>
</a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-gray-400 text-sm mb-4">Follow us on social media</p>
                <div className="flex items-center gap-3">
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
                      <s.icon size={17} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-green/5 rounded-full blur-[60px] pointer-events-none" />

            <h3 className="font-display font-bold text-white text-xl mb-6 relative z-10">Send a Message</h3>

            <div className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-green/40 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-green/40 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-1.5 block">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-400 text-sm focus:outline-none focus:border-green/40 transition-all duration-200 appearance-none">
                  <option value="" className="bg-navy">Select a service</option>
                  <option value="web" className="bg-navy">Web Development</option>
                  <option value="mobile" className="bg-navy">Mobile App Development</option>
                  <option value="uiux" className="bg-navy">UI/UX Design</option>
                  <option value="ai" className="bg-navy">AI Systems</option>
                  <option value="cyber" className="bg-navy">Cybersecurity</option>
                  <option value="marketing" className="bg-navy">Marketing Strategies</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-1.5 block">Project Details</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-green/40 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-200 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue to-green text-navy font-bold flex items-center justify-center gap-2 shadow-[0_8px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.5)] transition-all duration-200"
              >
                Send Message <Send size={16} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}