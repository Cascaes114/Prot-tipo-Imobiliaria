export default function SobrePage() {
  const team = [
    { 
      id: 1, 
      nome: "Carlos Silva", 
      cargo: "Corretor Sênior", 
      foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 2, 
      nome: "Ana Paula", 
      cargo: "Corretora de Alto Padrão", 
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 3, 
      nome: "Roberto Almeida", 
      cargo: "Gerente de Vendas", 
      foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" 
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
            alt="Escritório Imobiliária" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a ImobVilaVerde</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Conectando você ao lar dos seus sonhos com confiança, transparência e dedicação há mais de 10 anos.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Nossa História</h2>
            <div className="text-foreground/80 space-y-4 text-lg leading-relaxed">
              <p>
                Fundada no coração do bairro, a ImobVilaVerde nasceu do sonho de simplificar 
                o mercado imobiliário local. Percebemos que as famílias da nossa região precisavam 
                de um atendimento mais humano, próximo e sem burocracias desnecessárias.
              </p>
              <p>
                Ao longo dos anos, expandimos nossa atuação, mas nunca perdemos a nossa essência: 
                ser a imobiliária do seu bairro, onde você entra para tomar um café e sai com a 
                chave do seu novo lar.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-80">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
              alt="Fachada ou Equipe" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-2xl border border-border text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">🎯</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Nossa Missão</h3>
              <p className="text-foreground/70">
                Proporcionar a melhor experiência na compra, venda ou aluguel de imóveis, garantindo 
                segurança jurídica e satisfação total.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-2xl border border-border text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">👁️</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Nossa Visão</h3>
              <p className="text-foreground/70">
                Ser a imobiliária referência e a escolha número um dos moradores da nossa região 
                e bairros vizinhos.
              </p>
            </div>

            <div className="bg-background p-8 rounded-2xl border border-border text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">💎</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Nossos Valores</h3>
              <p className="text-foreground/70">
                Ética, transparência, foco no cliente, inovação constante e valorização das pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Nossa Equipe de Especialistas</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Conheça os profissionais dedicados a encontrar as melhores oportunidades imobiliárias para você.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((broker) => (
            <div key={broker.id} className="bg-card border border-border rounded-2xl overflow-hidden group hover:shadow-lg transition-all text-center pb-6">
              <div className="h-64 overflow-hidden">
                <img 
                  src={broker.foto} 
                  alt={broker.nome} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mt-6 mb-1">{broker.nome}</h3>
              <p className="text-primary font-medium">{broker.cargo}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
