import express from 'express';

const server = express();

server.get('/recurso', (req, res) => {
  res.send('Olá, DEV! Este é um exemplo de rota de leitura, método http GET');
});

server.post('/recurso', (req, res) => {
  res.json({
    texto: 'Olá, DEV! Este é um exemplo de rota criação, método http POST',
  });
});

server.put('/recurso', (req, res) => {
  res.json({
    texto: 'Olá, DEV! Este é um exemplo de rota alteração, método http PUT',
  });
});

server.delete('/recurso', (req, res) => {
  res.json({
    texto: 'Olá, DEV! Este é um exemplo de rota exclusão, método http DELETE',
  });
});

export { server };
