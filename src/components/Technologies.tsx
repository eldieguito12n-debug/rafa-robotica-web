"use client";

import { motion } from "framer-motion";
import { technologies } from "@/data/technologies";

export function Technologies() {
  return (
    <section id="technologies" className="py-24 bg-background overflow-hidden border-y border-surface-light/50">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Tecnologías que dominamos
          </motion.h2>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Animated Marquee */}
        <div className="animate-marquee whitespace-nowrap flex items-center py-4">
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <span 
              key={index} 
              className="mx-4 text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-surface-light to-foreground/40 uppercase tracking-wider"
            >
              {tech} <span className="text-primary mx-4">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
