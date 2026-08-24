import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-surface-light pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="#" className="inline-block">
              <span className="text-2xl font-bold text-foreground">Rafa <span className="text-primary">Robótica</span></span>
            </Link>
            <p className="text-foreground/70 max-w-md">
              {siteConfig.description}
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Enlaces Rápidos</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="#about" className="text-foreground/70 hover:text-primary transition-colors">Quiénes Somos</Link>
              <Link href="#services" className="text-foreground/70 hover:text-primary transition-colors">Servicios</Link>
              <Link href="#projects" className="text-foreground/70 hover:text-primary transition-colors">Proyectos</Link>
              <Link href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contacto</Link>
            </nav>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Síguenos</h4>
            <nav className="flex flex-col space-y-3">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">LinkedIn</a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">Instagram</a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">Facebook</a>
            </nav>
          </div>
        </div>

        <div className="border-t border-surface-light pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/50">
            &copy; {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-foreground/50 hover:text-foreground transition-colors">Política de Privacidad</Link>
            <Link href="#" className="text-sm text-foreground/50 hover:text-foreground transition-colors">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
