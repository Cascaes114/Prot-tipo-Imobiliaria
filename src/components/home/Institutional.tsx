import Link from "next/link";

export default function Institutional() {
  return (
    <section className="py-20 bg-card border-t border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800" 
              alt="Sobre a VilaVerde" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-foreground mb-6">Tradição e Confiança em cada Negócio</h2>
            <p className="text-foreground/70 mb-6 text-lg leading-relaxed">
              A Imobiliária VilaVerde nasceu com o propósito de conectar pessoas aos seus lares dos sonhos. 
              Com profundo conhecimento do bairro e uma equipe dedicada, oferecemos um atendimento próximo, 
              transparente e focado nas suas necessidades.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-foreground/80">
                <span className="text-primary text-xl">✓</span> Atendimento personalizado
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <span className="text-primary text-xl">✓</span> Imóveis selecionados e vistoriados
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <span className="text-primary text-xl">✓</span> Assessoria jurídica completa
              </li>
            </ul>
            <Link 
              href="/sobre" 
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors"
            >
              Conheça Nossa História
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
