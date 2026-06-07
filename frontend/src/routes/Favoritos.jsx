import Search from "../components/Search/index.jsx";
import styled from "styled-components";

const FavoritosContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

// Componente React -> função que retorna um JSX
// Favoritos -> componente pai
function Favoritos() {
  return (
    <FavoritosContainer>
      <Search />
    </FavoritosContainer>
  );
}

export default Favoritos;
