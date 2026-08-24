"use client";

import { motion } from "framer-motion";
import { Bot, Target, Lightbulb } from "lucide-react";

export function About() {
  const cards = [
    {
      title: "Nuestra Visión",
      description: "Construir soluciones tecnológicas que aporten al desarrollo de las empresas y las comunidades, haciendo de la innovación una herramienta accesible, práctica y capaz de transformar la manera en que hacemos las cosas.",
      icon: Lightbulb,
    },
    {
      title: "Un Aliado Tecnológico",
      description: "Nos involucramos en cada proyecto desde la identificación de la necesidad hasta el desarrollo de la solución. Trabajamos de manera cercana para entender los procesos, encontrar oportunidades de mejora y convertir ideas en resultados funcionales.",
      icon: Target,
    },
    {
      title: "Nuestro Enfoque",
      description: "No partimos de una solución predeterminada. Escuchamos, analizamos cada necesidad y desarrollamos propuestas a la medida, combinando conocimiento técnico, creatividad e innovación.",
      icon: Bot,
    },
  ];

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Quiénes Somos
          </motion.h2>
          <motion.h3
            className="text-xl md:text-2xl text-primary font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transformamos necesidades en soluciones tecnológicas
          </motion.h3>
          <motion.div 
            className="text-lg text-foreground/70 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              Somos una empresa de desarrollo e innovación tecnológica dedicada al diseño y creación de soluciones que integran robótica, electrónica, automatización y tecnología para responder a necesidades reales de empresas, organizaciones y comunidades.
            </p>
            <p>
              Creemos que la tecnología tiene mayor valor cuando resuelve problemas concretos, optimiza procesos y abre nuevas posibilidades.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 mb-16 mx-auto"
        >
          <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
            <img 
              src="/vr-control.jpg" 
              alt="Rafa Robótica Innovation" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

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
