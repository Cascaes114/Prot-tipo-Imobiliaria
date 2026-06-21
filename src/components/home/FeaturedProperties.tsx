import PropertyCard from "../properties/PropertyCard";

export default function FeaturedProperties({ properties }: { properties: any[] }) {
  if (!properties || properties.length === 0) return null;

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Imóveis em Destaque</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Confira as melhores opções que selecionamos especialmente para você na nossa imobiliária.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </div>
    </section>
  );
}
