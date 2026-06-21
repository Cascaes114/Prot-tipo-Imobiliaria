export default function QuickSearch() {
  return (
    <section className="relative -mt-12 z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-card shadow-lg rounded-lg p-6 border border-border">
        <form action="/imoveis" className="flex flex-col md:flex-row gap-4 items-end">
          
          <div className="w-full md:w-1/3">
            <label htmlFor="finalidade" className="block text-sm font-medium text-foreground/80 mb-1">
              O que você busca?
            </label>
            <select 
              id="finalidade" 
              name="finalidade" 
              className="w-full border border-border bg-background rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue=""
            >
              <option value="" disabled hidden>Comprar ou Alugar?</option>
              <option value="Comprar">Comprar</option>
              <option value="Alugar">Alugar</option>
            </select>
          </div>

          <div className="w-full md:w-1/3">
            <label htmlFor="bairro" className="block text-sm font-medium text-foreground/80 mb-1">
              Onde?
            </label>
            <input 
              type="text" 
              id="bairro" 
              name="bairro" 
              placeholder="Digite o bairro..." 
              className="w-full border border-border bg-background rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="w-full md:w-1/3">
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md transition-colors h-[50px]"
            >
              Buscar Imóveis
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
