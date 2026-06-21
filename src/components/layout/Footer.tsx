import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2 mb-4">
              <span className="text-2xl">🏡</span> VilaVerde
            </Link>
            <p className="text-sm text-foreground/70 mb-4">
              Sua imobiliária de confiança. Encontre o lar dos seus sonhos conosco.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-foreground/70 hover:text-primary">Início</Link></li>
              <li><Link href="/imoveis" className="text-sm text-foreground/70 hover:text-primary">Comprar Imóveis</Link></li>
              <li><Link href="/imoveis" className="text-sm text-foreground/70 hover:text-primary">Alugar Imóveis</Link></li>
              <li><Link href="/anuncie" className="text-sm text-foreground/70 hover:text-primary">Anuncie Conosco</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Institucional</h3>
            <ul className="space-y-3">
              <li><Link href="/sobre" className="text-sm text-foreground/70 hover:text-primary">Sobre a VilaVerde</Link></li>
              <li><Link href="/contato" className="text-sm text-foreground/70 hover:text-primary">Fale Conosco</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li>(11) 99999-9999</li>
              <li>contato@imobvilaverde.com.br</li>
              <li>Rua das Flores, 123 - Centro</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Imobiliária VilaVerde. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
