import axios from 'axios'; // Lib para requisições para o servidor 

const livroAPI = axios.create({baseURL: "http://localhost:8000/livros"});

async function getLivros(){
    const response = await livroAPI.get("/");
    return response.data || []; // Se não houver livros retornados do server, envia um array vazio para o client
}

async function deleteLivros(id){
    await livroAPI.delete(`${id}`);
}

async function insertLivros({titulo, autor}){
    await livroAPI.post(`/`, {titulo, autor}); // O segundo argumento do post é o corpo da requisição
}

async function updateLivros(id, {titulo, autor}) {
    await livroAPI.patch(`${id}`, {titulo, autor})
}

export {
    getLivros,
    deleteLivros,
    insertLivros,
    updateLivros
}