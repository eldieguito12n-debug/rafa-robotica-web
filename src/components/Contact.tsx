"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contáctanos
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ¿Tienes un proyecto en mente o necesitas asesoría técnica? Escríbenos y nuestro equipo de ingenieros te contactará a la brevedad.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-background p-8 rounded-2xl border border-surface-light h-full flex flex-col justify-center space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Información de Contacto</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Llámanos o escríbenos por WhatsApp</p>
                  <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Correo Electrónico</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-lg font-medium text-foreground hover:text-primary transition-colors break-all">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Ubicación</p>
                  <p className="text-lg font-medium text-foreground">
                    {siteConfig.contact.location}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-light">
                <p className="text-sm text-foreground/60 mb-4">Síguenos en nuestras redes</p>
                <div className="flex gap-4">
                  <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center text-foreground hover:bg-[#1877F2] hover:text-white transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center text-foreground hover:bg-[#E4405F] hover:text-white transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                  </a>
                  <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center text-foreground hover:bg-[#000000] hover:text-white transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v11a7 7 0 1 1-7-7z" /></svg>
                  </a>
                  <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center text-foreground hover:bg-[#25D366] hover:text-white transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.06-.301-.15-1.265-.462-2.406-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.21 2.095 3.18 5.077 4.46 2.021.868 2.846.945 3.962.795 1.211-.165 3.731-1.5 4.256-2.954.524-1.455.524-2.7.374-2.955-.15-.255-.55-.39-1.046-.645z"/><path d="M12 21.5c-1.622 0-3.21-.437-4.596-1.266l-4.908 1.286 1.309-4.786C2.906 15.344 2.5 13.697 2.5 12c0-5.239 4.261-9.5 9.5-9.5s9.5 4.261 9.5 9.5-4.261 9.5-9.5 9.5z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3 bg-background p-8 rounded-2xl border border-surface-light"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-surface border border-surface-light rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-surface border border-surface-light rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="tu@correo.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-surface border border-surface-light rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-surface border border-surface-light rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Describe tu proyecto o consulta..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-cyan-400 text-background font-bold text-lg py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Enviar Mensaje
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
