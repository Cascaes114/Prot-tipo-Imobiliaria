import { dbAll } from "@/lib/db";
import { logout } from "./actions";

export default async function AdminDashboard() {
  const properties: any[] = await dbAll('SELECT * FROM Property') as any[];
  const totalImoveis = properties.length;
  const imoveisVenda = properties.filter(p => p.finalidade === 'Comprar').length;
  const imoveisAluguel = properties.filter(p => p.finalidade === 'Alugar').length;
  const imoveisDestaque = properties.filter(p => p.destaque === 1).length;
  
  return (
    <div className="bg-background pb-20">
      {/* Barra superior de admin */}
      <div className="bg-primary text-white px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-bold text-xl flex items-center gap-2">
          ⚙️ Painel de Controle
        </div>
        <form action={logout}>
          <button type="submit" className="bg-black/20 hover:bg-black/40 px-4 py-2 rounded-md font-medium text-sm transition-colors">
            Sair do Painel
          </button>
        </form>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-8">Visão Geral</h1>
        
        {/* Metricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex flex-col">
            <h3 className="text-foreground/60 text-sm font-bold uppercase mb-2">Total de Imóveis</h3>
            <p className="text-5xl font-black text-foreground mt-auto">{totalImoveis}</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex flex-col">
            <h3 className="text-foreground/60 text-sm font-bold uppercase mb-2">Para Venda</h3>
            <p className="text-5xl font-black text-blue-500 mt-auto">{imoveisVenda}</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex flex-col">
            <h3 className="text-foreground/60 text-sm font-bold uppercase mb-2">Para Aluguel</h3>
            <p className="text-5xl font-black text-green-500 mt-auto">{imoveisAluguel}</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex flex-col">
            <h3 className="text-foreground/60 text-sm font-bold uppercase mb-2">Em Destaque (Home)</h3>
            <p className="text-5xl font-black text-yellow-500 mt-auto">{imoveisDestaque}</p>
          </div>
        </div>

        {/* Gerenciar Imóveis */}
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-xl font-bold text-foreground">Gerenciar Imóveis</h2>
            <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-md font-bold text-sm transition-colors shadow-md">
              + Adicionar Novo Imóvel
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-background/50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-sm font-bold text-foreground/70 uppercase">ID</th>
                  <th className="px-6 py-4 text-sm font-bold text-foreground/70 uppercase">Título</th>
                  <th className="px-6 py-4 text-sm font-bold text-foreground/70 uppercase">Finalidade</th>
                  <th className="px-6 py-4 text-sm font-bold text-foreground/70 uppercase">Preço</th>
                  <th className="px-6 py-4 text-sm font-bold text-foreground/70 uppercase">Status</th>
                  <th className="px-6 py-4 text-sm font-bold text-foreground/70 uppercase text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {properties.map(p => (
                  <tr key={p.id} className="hover:bg-foreground/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground/70 font-mono">#{p.id}</td>
                    <td className="px-6 py-4 text-sm font-bold text-foreground">{p.titulo}</td>
                    <td className="px-6 py-4 text-sm text-foreground/70">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${p.finalidade === 'Comprar' ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'}`}>
                        {p.finalidade}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground/70">R$ {Number(p.preco).toLocaleString('pt-BR')}</td>
                    <td className="px-6 py-4 text-sm text-foreground/70">{p.status}</td>
                    <td className="px-6 py-4 text-sm text-right space-x-4">
                      <button className="text-blue-500 hover:text-blue-700 font-medium transition-colors">Editar</button>
                      <button className="text-red-500 hover:text-red-700 font-medium transition-colors">Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
