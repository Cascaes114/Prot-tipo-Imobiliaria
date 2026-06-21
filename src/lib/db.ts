import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

let db: Database<sqlite3.Database, sqlite3.Statement> | null = null;

export async function openDb() {
  if (!db) {
    db = await open({
      filename: path.join(process.cwd(), 'imobiliaria.db'),
      driver: sqlite3.Database
    });
  }
  return db;
}

export async function setupDb() {
  const database = await openDb();
  
  await database.exec(`
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
      destaque BOOLEAN DEFAULT 0,
      imagem TEXT
    );
  `);
}
