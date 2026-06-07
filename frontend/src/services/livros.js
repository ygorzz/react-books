import axios from 'axios'; // Lib para requisições para o servidor 

const livroAPI = axios.create({baseURL: "http://localhost:8000/livros"});

async function getLivros(){
    const response = await livroAPI.get("/");
    return response.data.livros;
}

export {
    getLivros
}