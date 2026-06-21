import Link from "next/link";

export default function ContatoPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      
      {/* Hero Header */}
      <section className="bg-primary/5 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Fale Conosco</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Estamos prontos para ajudar você a encontrar o imóvel ideal. 
            Entre em contato ou venha tomar um café com a gente!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Informações e Formulário */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Informações de Contato</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl shrink-0">📍</div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Endereço</h3>
                  <p className="text-foreground/70">
                    Av. Principal do Bairro, 1234<br />
                    Vila Verde - Cidade/UF<br />
                    CEP: 00000-000
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl shrink-0">📞</div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Telefone / WhatsApp</h3>
                  <p className="text-foreground/70">(11) 99999-9999</p>
                  <p className="text-foreground/70">(11) 3333-3333</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl shrink-0">✉️</div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">E-mail</h3>
                  <p className="text-foreground/70">contato@imobvilaverde.com.br</p>
                </div>
              </div>
            </div>

            {/* Formulário de Contato Fake para protótipo */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-4">Envie uma Mensagem</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground/80">Nome Completo</label>
                  <input type="text" className="w-full border border-border rounded-md px-4 py-2 bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground/80">Telefone / WhatsApp</label>
                  <input type="text" className="w-full border border-border rounded-md px-4 py-2 bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground/80">Mensagem</label>
                  <textarea rows={4} className="w-full border border-border rounded-md px-4 py-2 bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button type="button" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-md transition-colors">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>

          {/* Mapa do Google Maps */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Nossa Localização</h2>
            <div className="rounded-2xl overflow-hidden border border-border shadow-md bg-card h-[600px]">
              {/* O usuário solicitou que fosse um iframe do maps para ele alterar depois */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197500120286!2d-46.65860738447573!3d-23.561337467475143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1628108169123!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Mapa da Imobiliária"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
