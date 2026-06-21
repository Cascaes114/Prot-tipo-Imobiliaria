"use client";

import { useActionState } from "react";
import { login } from "../actions";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, null);

  return (
    <div className="py-20 bg-background flex items-center justify-center px-4">
      <div className="bg-card w-full max-w-md p-8 rounded-2xl border border-border shadow-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
            🔒
          </div>
          <h1 className="text-2xl font-bold text-foreground">Acesso Restrito</h1>
          <p className="text-foreground/70 mt-2">Área Administrativa ImobVilaVerde</p>
        </div>
        
        {state?.error && (
          <div className="bg-red-500/10 text-red-500 p-4 rounded-md mb-6 text-center font-medium border border-red-500/20">
            {state.error}
          </div>
        )}

        <form action={formAction} className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2 text-foreground/80">Senha de Acesso</label>
            <input 
              type="password" 
              name="password" 
              required
              className="w-full border border-border rounded-md px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" 
              placeholder="Digite a senha..." 
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isPending ? "Autenticando..." : "Entrar no Painel"}
          </button>
        </form>
      </div>
    </div>
  );
}
