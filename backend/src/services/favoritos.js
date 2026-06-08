import Erro404 from "../errors/Erro404.js";
import * as FavoritosRepository from "../repositories/favoritos.js";
import * as LivrosRepository from "../repositories/livro.js";

async function getTodosFavoritos() {
  const favoritos = await FavoritosRepository.findAll();
  if (favoritos.length === 0) return [];
  return favoritos;
}

async function addFavorito(id) {
  const livrosAtuais = await LivrosRepository.findAll();
  const favoritosAtuais = await FavoritosRepository.findAll();
  const novoFavorito = livrosAtuais.find(livro => livro.id === id); 
  if(!novoFavorito){
    throw new Erro404();
  }
  favoritosAtuais.push(novoFavorito);
  await FavoritosRepository.save(favoritosAtuais);
}

async function deleteFavoritos(id) {
  const favoritos = await FavoritosRepository.findAll();
  const index = favoritos.findIndex(favorito => favorito.id === id);
  if (index === -1) {
    throw new Erro404();
  }
  const novosfavoritos = favoritos.filter(favorito => favorito.id !== id);
  await FavoritosRepository.save(novosfavoritos);
}

export { getTodosFavoritos, addFavorito, deleteFavoritos };