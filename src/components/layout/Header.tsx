import Link from "next/link";
import ThemeToggle from "@/components/shared/ThemeToggle";

export default function Header() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      Este site é apenas um protótipo
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
              <span className="text-3xl">🏡</span> VilaVerde
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </Link>
            <Link href="/imoveis" className="text-foreground hover:text-primary transition-colors font-medium">
              Imóveis
            </Link>
            <Link href="/sobre" className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre Nós
            </Link>
            <Link href="/contato" className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </Link>
          </nav>
          <div className="hidden md:flex items-center">
            <Link 
              href="/anuncie" 
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Anuncie seu Imóvel
            </Link>
            <ThemeToggle />
          </div>
          {/* Mobile menu button could go here */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button className="text-foreground hover:text-primary p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
