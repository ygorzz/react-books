import axios from 'axios'; // Lib para requisições para o servidor 

const livroAPI = axios.create({baseURL: "http://localhost:8000/livros"});

async function getLivros(){
    const response = await livroAPI.get("/");
    return response.data.livros || []; // Se não houver livros retornados do server, envia um array vazio para o client
}

export {
    getLivros
}