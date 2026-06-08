import { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteLivros, getLivros } from "../services/livrosService.js";
import trash from "../imagens/trash.svg";

const LivrosContainer = styled.div`
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
  img{
    height: 25px;
  }
  &:hover {
    outline: 1px solid white;
  }
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
`;

function Livros() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros();
  }, []);

  async function fetchLivros() {
    const livrosDaApi = await getLivros();
    setLivros(livrosDaApi);
  }

  async function deleteLivro(id){
    await deleteLivros(id);
    fetchLivros();
  }

  return (
    <LivrosContainer>
      <div>
        <Titulo>Aqui estão seus livros:</Titulo>
        <ResultadoContainer>
            {
              livros.message ? 
              <Resultado>
                <p>{livros.message}</p>
              </Resultado> :  
              livros.map((favorito) => (
                <Resultado>
                  <p>{favorito.titulo}</p>
                  <img src={trash} alt="lixeira" onClick={() => deleteLivro(favorito.id)} />
                </Resultado>
              ))
            }
        </ResultadoContainer>
      </div>
    </LivrosContainer>
  );
}

export default Livros;
