import fs from "fs";
import path from "path";

// Torna caminho compatível com diferentes SOs 
const filePath = path.resolve("./favoritos.json");

async function findAll() {
  const favoritos = await fs.promises.readFile(filePath, "utf-8");
  return JSON.parse(favoritos);
}

async function save(favoritos) {
  await fs.promises.writeFile(filePath, JSON.stringify(favoritos, null, 2));
}

export { findAll, save };