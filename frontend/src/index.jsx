import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.jsx";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index.jsx";
import Favoritos from "./routes/Favoritos.jsx";
import MeusLivros from "./routes/MeusLivros.jsx";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* CSS padrão em toda página, geralmente injetado no <head> do HTML */}
    <GlobalStyle />
    {/* BrowserRouter -> informa a aplicação que existirá roteamento de componentes */}
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/livros" element={<MeusLivros />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
