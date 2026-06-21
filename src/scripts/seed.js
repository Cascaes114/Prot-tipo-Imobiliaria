const { createClient } = require('@libsql/client');
require('dotenv').config();

async function seed() {
  const client = createClient({
    url: process.env.TURSO_DATABASE_URL || 'file:imobiliaria.db',
    authToken: process.env.TURSO_AUTH_TOKEN,
  });

  console.log('Conectando ao Turso...');
  console.log('URL:', process.env.TURSO_DATABASE_URL);

  await client.execute('DROP TABLE IF EXISTS Property');
  await client.execute('DROP TABLE IF EXISTS Broker');

  await client.execute(`
    CREATE TABLE IF NOT EXISTS Property (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      tipo TEXT NOT NULL,
      finalidade TEXT NOT NULL DEFAULT 'Comprar',
      bairro TEXT NOT NULL,
      preco REAL NOT NULL,
      quartos INTEGER NOT NULL,
      banheiros INTEGER NOT NULL,
      area REAL NOT NULL,
      vagas INTEGER DEFAULT 0,
      descricao TEXT,
      status TEXT NOT NULL,
      destaque INTEGER DEFAULT 0,
      imagem TEXT
    )
  `);

  await client.execute(`
    CREATE TABLE IF NOT EXISTS Broker (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      telefone TEXT,
      email TEXT,
      foto TEXT
    )
  `);

  const properties = [
    { titulo: "Casa 3 Quartos Centro", tipo: "Casa", finalidade: "Comprar", bairro: "Centro", preco: 350000, quartos: 3, banheiros: 2, area: 120, vagas: 2, descricao: "Linda casa no centro da cidade.", status: "Disponível", destaque: 1, imagem: "https://images.unsplash.com/photo-1518780602961-a3112b322a36?auto=format&fit=crop&q=80&w=800" },
    { titulo: "Apartamento Vista Mar", tipo: "Apartamento", finalidade: "Comprar", bairro: "Praia", preco: 450000, quartos: 2, banheiros: 2, area: 85, vagas: 1, descricao: "Excelente apartamento com vista panorâmica.", status: "Disponível", destaque: 1, imagem: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800" },
    { titulo: "Cobertura Duplex", tipo: "Apartamento", finalidade: "Comprar", bairro: "Jardins", preco: 850000, quartos: 4, banheiros: 4, area: 210, vagas: 3, descricao: "Cobertura espaçosa.", status: "Disponível", destaque: 0, imagem: "https://images.unsplash.com/photo-1502672260266-1c1e5250ff51?auto=format&fit=crop&q=80&w=800" },
    { titulo: "Casa de Vila", tipo: "Casa", finalidade: "Comprar", bairro: "Vila Mariana", preco: 280000, quartos: 2, banheiros: 1, area: 90, vagas: 1, descricao: "Casa charmosa.", status: "Vendido", destaque: 0, imagem: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=800" },
    { titulo: "Sobrado Novo", tipo: "Casa", finalidade: "Comprar", bairro: "Jardim Botânico", preco: 520000, quartos: 3, banheiros: 3, area: 150, vagas: 2, descricao: "Sobrado recém construído.", status: "Disponível", destaque: 1, imagem: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" },
    { titulo: "Studio Moderno", tipo: "Apartamento", finalidade: "Comprar", bairro: "Centro", preco: 180000, quartos: 1, banheiros: 1, area: 45, vagas: 0, descricao: "Studio compacto.", status: "Disponível", destaque: 0, imagem: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800" },
    { titulo: "Terreno Comercial", tipo: "Terreno", finalidade: "Comprar", bairro: "Distrito Industrial", preco: 900000, quartos: 0, banheiros: 0, area: 1000, vagas: 0, descricao: "Amplo terreno ideal para construção.", status: "Disponível", destaque: 0, imagem: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" },

    /* 3 imóveis para Aluguel */
    { titulo: "Casa Ampla para Alugar", tipo: "Casa", finalidade: "Alugar", bairro: "Bela Vista", preco: 2500, quartos: 3, banheiros: 2, area: 150, vagas: 2, descricao: "Ótima casa para locação com quintal grande.", status: "Disponível", destaque: 1, imagem: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800" },
    { titulo: "Apartamento Central (Locação)", tipo: "Apartamento", finalidade: "Alugar", bairro: "Centro", preco: 1800, quartos: 2, banheiros: 1, area: 70, vagas: 1, descricao: "Apartamento bem localizado, perto de metrô e padarias.", status: "Disponível", destaque: 0, imagem: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800" },
    { titulo: "Kitnet Estudante", tipo: "Apartamento", finalidade: "Alugar", bairro: "Universitário", preco: 900, quartos: 1, banheiros: 1, area: 35, vagas: 0, descricao: "Kitnet ideal para estudantes, condomínio fechado.", status: "Disponível", destaque: 0, imagem: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800" }
  ];

  for (const p of properties) {
    await client.execute({
      sql: 'INSERT INTO Property (titulo, tipo, finalidade, bairro, preco, quartos, banheiros, area, vagas, descricao, status, destaque, imagem) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      args: [p.titulo, p.tipo, p.finalidade, p.bairro, p.preco, p.quartos, p.banheiros, p.area, p.vagas, p.descricao, p.status, p.destaque, p.imagem]
    });
  }

  console.log('Seed concluído com sucesso! 10 imóveis inseridos no Turso (Comprar e Alugar).');
}

seed().catch(err => console.error('Erro no seed:', err));
