import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, X, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import useReveal from "../hooks/useReveal";

const WHATSAPP_NUMBER = "923424869651";

const WhatsAppIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const socials = [
  {
    href: "tel:+923424869651",
    label: "Phone",
    icon: () => <Phone size={17} />,
  },
  {
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    label: "WhatsApp",
    isWhatsApp: true,
    icon: () => <WhatsAppIcon size={17} />,
  },
  {
    href: "mailto:deepciphers644@gmail.com",
    label: "Email",
    icon: () => <Mail size={17} />,
  },
  {
    href: "https://www.instagram.com/deepciphers___official",
    label: "Instagram",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/share/1ESoEWjUu2/",
    label: "Facebook",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/deepcipherstech/",
    label: "LinkedIn",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: "https://github.com",
    label: "GitHub",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
];

// ── Floating Contact Bubble (WhatsApp + Email) ─────────────────────────────
function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <>
            <motion.a
              href="mailto:deepciphers644@gmail.com"
              initial={{ opacity: 0, y: 10, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.85 }}
              transition={{ duration: 0.18, delay: 0.04 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-blue to-green flex items-center justify-center text-navy shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              aria-label="Email us"
            >
              <Mail size={20} />
            </motion.a>

            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.85 }}
              transition={{ duration: 0.18 }}
              className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,211,102,0.5)]"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon size={22} />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue to-green flex items-center justify-center text-navy shadow-[0_4px_24px_rgba(16,185,129,0.5)] hover:shadow-[0_6px_32px_rgba(16,185,129,0.7)] transition-shadow duration-200"
        aria-label="Contact options"
      >
        {!open && <span className="absolute w-14 h-14 rounded-full bg-green/40 animate-ping" />}
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
          {open ? <X size={24} /> : <MoreHorizontal size={24} />}
        </motion.div>
      </motion.button>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function Contact() {
  const revealRef = useReveal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");

  const handleSendWhatsApp = () => {
    const message =
      `*New Message from DeepCiphers Website*%0A%0A` +
      `*Name:* ${name || "Not provided"}%0A` +
      `*Email:* ${email || "Not provided"}%0A` +
      `*Service:* ${service || "Not selected"}%0A` +
      `*Project Details:* ${details || "Not provided"}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <>
      <FloatingWhatsApp />

      <section ref={revealRef} id="contact" className="section-reveal relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] lg:w-[800px] h-[300px] md:h-[400px] lg:h-[500px] bg-green/8 rounded-full blur-[180px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 md:mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green/20 bg-green/5 text-sm text-green mb-5">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Have a project in mind? Send us a message and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-start">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="p-6 md:p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <h3 className="font-display font-bold text-white text-lg md:text-xl mb-2">Connect With Us</h3>
                <p className="text-gray-500 text-sm mb-6">Reach out through any of these channels</p>

                <div className="flex items-center gap-3 flex-wrap">
                  {socials.map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                      title={s.label}
                      whileHover={{ y: -3, scale: 1.12 }}
                      transition={{ duration: 0.18 }}
                      className={`w-10 h-10 md:w-11 md:h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
                        s.isWhatsApp
                          ? "border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366]/70 hover:shadow-[0_0_20px_rgba(37,211,102,0.35)]"
                          : "border-white/10 bg-white/[0.03] text-gray-400 hover:text-green hover:border-green/40 hover:bg-green/5 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                      }`}
                    >
                      <s.icon />
                    </motion.a>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green inline-block" />
                    +92 342 4869651
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green inline-block" />
                    deepciphers644@gmail.com
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-6 md:p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-green/5 rounded-full blur-[60px] pointer-events-none" />
              <h3 className="font-display font-bold text-white text-lg md:text-xl mb-5 md:mb-6 relative z-10">Send a Message</h3>

              <div className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-400 mb-1.5 block">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-green/40 focus:bg-white/[0.06] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-green/40 focus:bg-white/[0.06] transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block">Service Needed</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-400 text-sm focus:outline-none focus:border-green/40 transition-all duration-200 appearance-none"
                  >
                    <option value="" className="bg-navy">Select a service</option>
                    <option value="Web Development" className="bg-navy">Web Development</option>
                    <option value="Mobile App Development" className="bg-navy">Mobile App Development</option>
                    <option value="UI/UX Design" className="bg-navy">UI/UX Design</option>
                    <option value="AI Systems" className="bg-navy">AI Systems</option>
                    <option value="Cybersecurity" className="bg-navy">Cybersecurity</option>
                    <option value="Marketing Strategies" className="bg-navy">Marketing Strategies</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block">Project Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-green/40 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                  />
                </div>

                <motion.button
                  onClick={handleSendWhatsApp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue to-green text-navy font-bold flex items-center justify-center gap-2 shadow-[0_8px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.5)] transition-all duration-200"
                >
                  <WhatsAppIcon size={16} />
                  Send Message
                </motion.button>

                <p className="text-center text-xs text-gray-600">
                  Opens WhatsApp with your message pre-filled
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}