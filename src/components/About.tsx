"use client";

import { motion } from "framer-motion";
import { Bot, Target, Lightbulb } from "lucide-react";

export function About() {
  const cards = [
    {
      title: "Nuestra Misión",
      description: "Desarrollar soluciones tecnológicas accesibles y altamente eficientes que impulsen el progreso en la industria y la agricultura mediante robótica e IA.",
      icon: Target,
    },
    {
      title: "Nuestra Visión",
      description: "Ser líderes en el desarrollo de hardware y software inteligente, creando un ecosistema tecnológico que facilite la vida humana y proteja el medio ambiente.",
      icon: Lightbulb,
    },
    {
      title: "Nuestro Enfoque",
      description: "Innovación continua, diseño centrado en el usuario, desarrollo a medida y uso de tecnologías de vanguardia para asegurar el éxito de cada proyecto.",
      icon: Bot,
    },
  ];

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¿Quiénes Somos?
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            En Rafa Robótica, somos un equipo apasionado por la tecnología, dedicado a transformar ideas complejas en realidades funcionales a través de la robótica, automatización e inteligencia artificial.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-background border border-surface-light hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <card.icon className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{card.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
