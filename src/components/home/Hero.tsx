import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-primary-dark text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920" 
          alt="Família feliz na casa nova" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Encontre o lar perfeito para você e sua família
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Na Imobiliária VilaVerde, simplificamos a busca pela casa dos seus sonhos no seu bairro favorito.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/imoveis" 
              className="bg-white text-primary hover:bg-slate-100 font-semibold py-3 px-6 rounded-md transition-colors text-lg"
            >
              Ver Imóveis
            </Link>
            <Link 
              href="/contato" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary font-semibold py-3 px-6 rounded-md transition-colors text-lg"
            >
              Falar com Corretor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
