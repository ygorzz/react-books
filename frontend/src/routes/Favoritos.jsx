import { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteFavoritos, getFavoritos } from "../services/favoritosService.js";

const FavoritosContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 200px;
    color: #fff;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
`;

function Favoritos() {
  const [favoritos, setLivrosFavoritos] = useState([]);

  useEffect(() => {
    fetchFavoritos();
  }, []);

  async function fetchFavoritos() {
    const favoritosDaApi = await getFavoritos();
    setLivrosFavoritos(favoritosDaApi);
  }

  async function deleteFavorito(id){
    await deleteFavoritos(id);
    alert('Livro removido de favoritos!');
    fetchFavoritos();
  }

  return (
    <FavoritosContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          <Resultado>
            {
              favoritos.message ? <p>{favoritos.message}</p> :  
                favoritos.map((favorito) => (
                  <p onClick={() => deleteFavorito(favorito.id)}>
                    {favorito.titulo}
                  </p>
                ))
            }
          </Resultado>
        </ResultadoContainer>
      </div>
    </FavoritosContainer>
  );
}

export default Favoritos;
