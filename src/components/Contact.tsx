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
                  <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center hover:scale-110 transition-transform" title="Facebook">
                    <img src="https://api.iconify.design/logos:facebook.svg" alt="Facebook" className="w-6 h-6" />
                  </a>
                  <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center hover:scale-110 transition-transform" title="Instagram">
                    <img src="https://api.iconify.design/skill-icons:instagram.svg" alt="Instagram" className="w-6 h-6" />
                  </a>
                  <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center hover:scale-110 transition-transform" title="TikTok">
                    <img src="https://api.iconify.design/logos:tiktok-icon.svg" alt="TikTok" className="w-6 h-6" />
                  </a>
                  <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center hover:scale-110 transition-transform" title="WhatsApp">
                    <img src="https://api.iconify.design/logos:whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6" />
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
