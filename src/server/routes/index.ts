import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/recurso', (_, res) => {
  return res.send(
    'Olá, DEV! Este é um exemplo de rota de leitura, método http GET'
  );
});

router.post('/recurso', (req, res) => {
  console.log(req.body);
  return res.status(StatusCodes.CREATED).json(req.body);
});

router.put('/recurso', (req, res) => {
  return res.json({
    texto: 'Olá, DEV! Este é um exemplo de rota alteração, método http PUT',
  });
});

router.delete('/recurso', (req, res) => {
  return res.json({
    texto: 'Olá, DEV! Este é um exemplo de rota exclusão, método http DELETE',
  });
});

export { router };
