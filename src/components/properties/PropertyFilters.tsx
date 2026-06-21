import Form from "next/form";

export default function PropertyFilters({ currentParams }: { currentParams: any }) {
  return (
    <div className="bg-card p-6 rounded-lg border border-border sticky top-24">
      <h2 className="text-xl font-bold mb-4 text-foreground">Filtros Avançados</h2>
      <Form action="/imoveis" className="space-y-4">
        
        <div>
          <label htmlFor="q" className="block text-sm font-medium mb-1 text-foreground/80">Palavra-chave</label>
          <input type="text" id="q" name="q" defaultValue={currentParams.q} placeholder="Ex: vista mar, piscina..." className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label htmlFor="tipo" className="block text-sm font-medium mb-1 text-foreground/80">Tipo</label>
            <select id="tipo" name="tipo" defaultValue={currentParams.tipo} className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Todos</option>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apto</option>
              <option value="Terreno">Terreno</option>
              <option value="Chácara">Chácara</option>
            </select>
          </div>
          <div>
            <label htmlFor="finalidade" className="block text-sm font-medium mb-1 text-foreground/80">Finalidade</label>
            <select id="finalidade" name="finalidade" defaultValue={currentParams.finalidade} className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Todos</option>
              <option value="Comprar">Comprar</option>
              <option value="Alugar">Alugar</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-foreground/80">Preço (R$)</label>
          <div className="grid grid-cols-2 gap-2">
            <input type="number" name="precoMin" defaultValue={currentParams.precoMin} placeholder="Mínimo" className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="number" name="precoMax" defaultValue={currentParams.precoMax} placeholder="Máximo" className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
        </div>

        <div>
          <label htmlFor="bairro" className="block text-sm font-medium mb-1 text-foreground/80">Bairro</label>
          <input type="text" id="bairro" name="bairro" defaultValue={currentParams.bairro} placeholder="Digite o bairro..." className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div>
            <label htmlFor="quartos" className="block text-xs font-medium mb-1 text-foreground/80">Quartos+</label>
            <input type="number" id="quartos" name="quartos" defaultValue={currentParams.quartos} min="0" placeholder="0" className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label htmlFor="banheiros" className="block text-xs font-medium mb-1 text-foreground/80">Banh.+</label>
            <input type="number" id="banheiros" name="banheiros" defaultValue={currentParams.banheiros} min="0" placeholder="0" className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label htmlFor="vagas" className="block text-xs font-medium mb-1 text-foreground/80">Vagas+</label>
            <input type="number" id="vagas" name="vagas" defaultValue={currentParams.vagas} min="0" placeholder="0" className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
        </div>

        <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-md font-medium transition-colors mt-6">
          Aplicar Filtros
        </button>
      </Form>
    </div>
  );
}
