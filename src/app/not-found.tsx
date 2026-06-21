import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-background flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="text-8xl mb-6">🚧</div>
      <h1 className="text-5xl font-bold text-foreground mb-4">Erro 404</h1>
      <h2 className="text-2xl font-semibold text-foreground/80 mb-4">Página não encontrada</h2>
      <p className="text-lg text-foreground/70 mb-8 max-w-md">
        Desculpe, parece que o imóvel ou a página que você está tentando acessar não existe mais ou foi movido.
      </p>
      <Link 
        href="/"
        className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition-colors shadow-md"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}
