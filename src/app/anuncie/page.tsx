"use client";

import { useState } from "react";
import Link from "next/link";

export default function AnunciePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen pb-20">
      
      {/* Hero */}
      <section className="bg-primary/5 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Anuncie seu Imóvel Conosco</h1>
          <p className="text-xl text-foreground/70 mb-8">
            Venda ou alugue seu imóvel de forma rápida, segura e sem dor de cabeça. 
            Nossa equipe de especialistas está pronta para ajudar você a fazer o melhor negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center mt-8">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex-1">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-lg text-foreground mb-2">Venda Rápida</h3>
              <p className="text-sm text-foreground/70">Mais de 100 mil acessos por mês na nossa plataforma.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex-1">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-lg text-foreground mb-2">Segurança Total</h3>
              <p className="text-sm text-foreground/70">Assessoria jurídica completa do início ao fim.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex-1">
              <div className="text-3xl mb-3">📸</div>
              <h3 className="font-bold text-lg text-foreground mb-2">Fotos Profissionais</h3>
              <p className="text-sm text-foreground/70">Valorizamos o seu imóvel com imagens de alta qualidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-card border border-border rounded-2xl shadow-lg p-8 sm:p-12">
          
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                ✓
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Solicitação Enviada!</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Nossa equipe recebeu os dados do seu imóvel e entrará em contato em até 24 horas para agendar uma avaliação.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition-colors"
              >
                Enviar novo imóvel
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-foreground mb-8 border-b border-border pb-4">
                Preencha os dados abaixo
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Dados Pessoais */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">1. Seus Dados</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1 text-foreground/80">Nome Completo *</label>
                      <input required type="text" className="w-full border border-border rounded-md px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Ex: João da Silva" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-foreground/80">Telefone / WhatsApp *</label>
                      <input required type="text" className="w-full border border-border rounded-md px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-foreground/80">E-mail</label>
                      <input type="email" className="w-full border border-border rounded-md px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" placeholder="joao@exemplo.com" />
                    </div>
                  </div>
                </div>

                {/* Dados do Imóvel */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">2. Dados do Imóvel</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-foreground/80">Tipo de Imóvel *</label>
                      <select required className="w-full border border-border rounded-md px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none">
                        <option value="">Selecione...</option>
                        <option value="Casa">Casa</option>
                        <option value="Apartamento">Apartamento</option>
                        <option value="Terreno">Terreno</option>
                        <option value="Comercial">Comercial / Sala</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-foreground/80">Finalidade *</label>
                      <select required className="w-full border border-border rounded-md px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none">
                        <option value="">Selecione...</option>
                        <option value="Vender">Quero Vender</option>
                        <option value="Alugar">Quero Alugar</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-foreground/80">Bairro / Região *</label>
                      <input required type="text" className="w-full border border-border rounded-md px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Onde fica o imóvel?" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-foreground/80">Valor Estimado (Opcional)</label>
                      <input type="number" className="w-full border border-border rounded-md px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" placeholder="R$ 0,00" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1 text-foreground/80">Breve Descrição do Imóvel</label>
                      <textarea rows={4} className="w-full border border-border rounded-md px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Ex: Apartamento 2 quartos, recém reformado, 1 vaga coberta..."></textarea>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      "Quero Anunciar Meu Imóvel"
                    )}
                  </button>
                  <p className="text-xs text-center mt-4 text-foreground/60">
                    Ao enviar, você concorda com nossos Termos de Privacidade e autoriza o contato da nossa equipe.
                  </p>
                </div>

              </form>
            </>
          )}

        </div>
      </section>

    </div>
  );
}
