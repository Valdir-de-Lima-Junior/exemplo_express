const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (request, response) => {
    response.send('Estoy Aqui')
})

/*
{
numero1: 1,
numero2: 3
}
*/

app.post('/soma', (request, response) => {
    const body =  request.body;
    const numero1 = body.numero1;
    const numero2 = body.numero2
    const resultado = {
        resultado: numero1 + numero2
    }
    response.send(resultado);
})

app.get('/noticias', (request, response) => {
    const noticia = {
        id: 1,
        texto: "Atividades culturais no centro de Seara",
        autor: "Globo Reporter"
    }
    response.send(noticia)
})

app.get('/noticias/seara', (request, response) => {
    response.send('Pagina de Noticias sobre Seara')
})

app.listen(port, () => {
    console.log("servidor iniciado na porta " + port)
})

