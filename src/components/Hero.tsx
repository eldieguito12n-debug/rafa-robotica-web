"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Desarrollo · Innovación · <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Tecnología</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl text-foreground/70 max-w-2xl mx-auto mb-10 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Creamos soluciones para los desafíos de hoy y las oportunidades de mañana.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            href="#projects" 
            className="px-8 py-3 rounded-full bg-primary text-background font-bold text-lg hover:bg-cyan-400 transition-colors w-full sm:w-auto"
          >
            Conoce nuestros proyectos
          </Link>
          <Link 
            href="#contact" 
            className="px-8 py-3 rounded-full bg-surface-light text-foreground font-bold text-lg hover:bg-surface-light/80 transition-colors w-full sm:w-auto border border-surface-light hover:border-foreground/20"
          >
            Contáctanos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
