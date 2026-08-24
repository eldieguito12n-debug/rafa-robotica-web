import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-surface-light pt-16 pb-8">
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
            <div className="flex gap-4">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center hover:scale-110 transition-transform" title="Facebook">
                <img src="https://api.iconify.design/logos:facebook.svg" alt="Facebook" className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center hover:scale-110 transition-transform" title="Instagram">
                <img src="https://api.iconify.design/skill-icons:instagram.svg" alt="Instagram" className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center hover:scale-110 transition-transform" title="TikTok">
                <img src="https://api.iconify.design/logos:tiktok-icon.svg" alt="TikTok" className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center hover:scale-110 transition-transform" title="WhatsApp">
                <img src="https://api.iconify.design/logos:whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-surface-light pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/50">
            &copy; {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
