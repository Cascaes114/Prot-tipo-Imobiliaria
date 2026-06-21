import { dbGet } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import PropertyGallery from "@/components/properties/PropertyGallery";

export default async function PropertyDetailsPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const property: any = await dbGet('SELECT * FROM Property WHERE id = ?', [id]);

  if (!property) {
    notFound();
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  const whatsappNumber = "5511999999999";
  const message = encodeURIComponent(`Olá, tenho interesse no imóvel ${property.titulo} - ${property.bairro}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Criando um array com 3 fotos (repetidas, variando a URL ligeiramente para o layout)
  const images = [
    property.imagem,
    property.imagem.replace('w=800', 'w=801'),
    property.imagem.replace('w=800', 'w=802')
  ];

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-foreground/60 mb-6">
          <Link href="/" className="hover:text-primary">Início</Link> &gt;{" "}
          <Link href="/imoveis" className="hover:text-primary">Imóveis</Link> &gt;{" "}
          <span className="text-foreground">{property.titulo}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content (Gallery + Details) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Gallery */}
            <div className="rounded-2xl overflow-hidden border border-border bg-card relative">
              <div className="relative h-[400px] sm:h-[500px]">
                <PropertyGallery images={images} />
                
                <div className="absolute top-4 left-4 bg-primary text-white font-bold px-4 py-1.5 rounded-full shadow-lg z-10 pointer-events-none">
                  {property.status}
                </div>
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white font-bold px-4 py-1.5 rounded-full shadow-lg z-10 pointer-events-none">
                  {property.tipo} • {property.finalidade}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <h1 className="text-3xl font-bold text-foreground mb-2">{property.titulo}</h1>
              <p className="text-foreground/70 text-lg mb-6">{property.bairro}</p>
              
              <div className="flex flex-wrap items-center gap-6 py-6 border-y border-border mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🛏️</span>
                  <div>
                    <p className="text-sm text-foreground/60">Quartos</p>
                    <p className="font-bold text-foreground">{property.quartos}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚿</span>
                  <div>
                    <p className="text-sm text-foreground/60">Banheiros</p>
                    <p className="font-bold text-foreground">{property.banheiros}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <p className="text-sm text-foreground/60">Vagas</p>
                    <p className="font-bold text-foreground">{property.vagas}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📏</span>
                  <div>
                    <p className="text-sm text-foreground/60">Área</p>
                    <p className="font-bold text-foreground">{property.area} m²</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Descrição</h2>
              <div className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
                {property.descricao}
              </div>
            </div>

          </div>

          {/* Sidebar / Floating Contact Box */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card p-6 rounded-2xl border border-border shadow-lg">
              <p className="text-sm text-foreground/60 mb-2 uppercase tracking-wide font-semibold">Valor do Imóvel</p>
              <p className="text-4xl font-bold text-primary mb-6">
                {formatCurrency(property.preco)}
              </p>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-xl flex justify-center items-center gap-3 mb-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.003-3.625 2.952-6.574 6.577-6.574a6.56 6.56 0 0 1 4.646 1.928 6.55 6.55 0 0 1 1.921 4.654c-.004 3.627-2.953 6.574-6.578 6.574zm3.603-4.912c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                Falar no WhatsApp
              </a>

              <p className="text-xs text-center text-foreground/60">
                Ao clicar, você será redirecionado para falar com nossa equipe comercial.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
