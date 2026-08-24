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
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors" title="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-colors" title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" title="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v11a7 7 0 1 1-7-7z" />
                </svg>
              </a>
              <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors" title="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.06-.301-.15-1.265-.462-2.406-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.21 2.095 3.18 5.077 4.46 2.021.868 2.846.945 3.962.795 1.211-.165 3.731-1.5 4.256-2.954.524-1.455.524-2.7.374-2.955-.15-.255-.55-.39-1.046-.645z"/>
                  <path d="M12 21.5c-1.622 0-3.21-.437-4.596-1.266l-4.908 1.286 1.309-4.786C2.906 15.344 2.5 13.697 2.5 12c0-5.239 4.261-9.5 9.5-9.5s9.5 4.261 9.5 9.5-4.261 9.5-9.5 9.5z"/>
                </svg>
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
