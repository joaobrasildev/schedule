import express, { request, response } from 'express'

const app = express();

app.get('/', (request, response) => {
    return response.send('Começamos!');
});

app.get('/app', (request, response) => {
    return response.send('Ta Fluindo!');
});
app.listen(3333);