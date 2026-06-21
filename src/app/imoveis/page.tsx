import { dbAll } from "@/lib/db";
import PropertyCard from "@/components/properties/PropertyCard";
import PropertyFilters from "@/components/properties/PropertyFilters";

export default async function ImoveisPage(
  props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }
) {
  const searchParams = await props.searchParams;
  const tipo = searchParams.tipo as string;
  const bairro = searchParams.bairro as string;
  const q = searchParams.q as string;
  const finalidade = searchParams.finalidade as string;
  
  const precoMin = searchParams.precoMin as string;
  const precoMax = searchParams.precoMax as string;
  const quartos = searchParams.quartos as string;
  const banheiros = searchParams.banheiros as string;
  const vagas = searchParams.vagas as string;

  let query = 'SELECT * FROM Property WHERE 1=1';
  const params: any[] = [];

  if (tipo) {
    query += ' AND tipo = ?';
    params.push(tipo);
  }
  if (finalidade) {
    query += ' AND finalidade = ?';
    params.push(finalidade);
  }
  if (bairro) {
    query += ' AND bairro LIKE ?';
    params.push(`%${bairro}%`);
  }
  if (q) {
    query += ' AND (titulo LIKE ? OR descricao LIKE ? OR bairro LIKE ?)';
    params.push(`%${q}%`, `%${q}%`, `%${q}%`);
  }
  
  if (precoMin) {
    query += ' AND preco >= ?';
    params.push(Number(precoMin));
  }
  if (precoMax) {
    query += ' AND preco <= ?';
    params.push(Number(precoMax));
  }
  if (quartos) {
    query += ' AND quartos >= ?';
    params.push(Number(quartos));
  }
  if (banheiros) {
    query += ' AND banheiros >= ?';
    params.push(Number(banheiros));
  }
  if (vagas) {
    query += ' AND vagas >= ?';
    params.push(Number(vagas));
  }

  const properties = await dbAll(query, params);

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <aside className="w-full lg:w-1/4">
            <PropertyFilters currentParams={{ tipo, finalidade, bairro, q, precoMin, precoMax, quartos, banheiros, vagas }} />
          </aside>

          <main className="w-full lg:w-3/4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Catálogo de Imóveis</h1>
              <p className="text-foreground/70">
                Mostrando {properties.length} imóveis encontrados.
              </p>
            </div>

            {properties.length === 0 ? (
              <div className="bg-card border border-border p-8 rounded-lg text-center">
                <p className="text-xl text-foreground/80 mb-4">Nenhum imóvel encontrado com os filtros selecionados.</p>
                <a href="/imoveis" className="text-primary hover:underline font-medium">
                  Limpar filtros
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {properties.map((p: any) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            )}
          </main>
          
        </div>
      </div>
    </div>
  );
}
