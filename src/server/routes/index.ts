import { Router } from 'express';

import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (_, res) => {
  return res.send(
    'Olá, DEV! Este é um exemplo de rota de leitura, método http GET'
  );
});

router.get(
  '/cidades',
  CidadesController.getAllValidation,
  CidadesController.getAll
);

router.get(
  '/cidades/:id',
  CidadesController.getByIdValidation,
  CidadesController.getById
);

router.post(
  '/cidades',
  CidadesController.createValidation,
  CidadesController.create
);

router.put(
  '/cidades/:id',
  CidadesController.updateByIdValidation,
  CidadesController.updateById
);

router.delete(
  '/cidades/:id',
  CidadesController.deleteByIdValidation,
  CidadesController.deleteById
);

export { router };
