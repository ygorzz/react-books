import fs from "fs";
import path from "path";

// Torna caminho compatível com diferentes SOs 
const filePath = path.resolve("./favoritos.json");

async function findAll() {
  const livros = await fs.promises.readFile(filePath, "utf-8");
  return JSON.parse(livros);
}

async function save(livro) {
  await fs.promises.writeFile(filePath, JSON.stringify(livro, null, 2));
}

export { findAll, save };