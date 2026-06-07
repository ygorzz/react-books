import UltimosLancamentos from "../components/UltimosLancamentos/index.jsx";
import styled from "styled-components";

const MeusLivrosContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

// Componente React -> função que retorna um JSX
// MeusLivros -> componente pai
function MeusLivros() {
  return (
    <MeusLivrosContainer>
      <UltimosLancamentos />
    </MeusLivrosContainer>
  );
}

export default MeusLivros;
