import Link from "next/link";
import Image from "next/image";

type PropertyProps = {
  id: number;
  titulo: string;
  tipo: string;
  bairro: string;
  preco: number;
  quartos: number;
  banheiros: number;
  area: number;
  vagas: number;
  status: string;
  imagem: string;
};

export default function PropertyCard({ property }: { property: PropertyProps }) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <Link href={`/imoveis/${property.id}`} className="group block bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        {/* Usando tag img padrão para evitar configuração de domínios no next.config.js no protótipo */}
        <img 
          src={property.imagem || "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"} 
          alt={property.titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
          {property.status}
        </div>
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
          {property.tipo}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-foreground mb-1 line-clamp-1">{property.titulo}</h3>
        <p className="text-sm text-foreground/60 mb-4">{property.bairro}</p>
        
        <p className="text-2xl font-bold text-primary mb-4">
          {formatCurrency(property.preco)}
        </p>
        
        <div className="flex items-center justify-between border-t border-border pt-4 text-sm text-foreground/70">
          <div className="flex items-center gap-1">
            <span>🛏️</span> {property.quartos}
          </div>
          <div className="flex items-center gap-1">
            <span>🚿</span> {property.banheiros}
          </div>
          <div className="flex items-center gap-1">
            <span>🚗</span> {property.vagas}
          </div>
          <div className="flex items-center gap-1">
            <span>📏</span> {property.area}m²
          </div>
        </div>
      </div>
    </Link>
  );
}
