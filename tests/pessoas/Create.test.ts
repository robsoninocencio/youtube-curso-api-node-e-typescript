import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Pessoas - Create', () => {
  let cidadeId: number | undefined = undefined;
  beforeAll(async () => {
    const resCidade = await testServer
      .post('/cidades')
      .send({ nome: 'cidade teste' });
    cidadeId = resCidade.body;
  });
  it('Cria registro 1', async () => {
    const res1 = await testServer.post('/pessoas').send({
      email: 'pessoa1@gmail.com',
      cidadeId,
      nomeCompleto: 'nome completo1',
    });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });

  it('Cria registro 2', async () => {
    const res2 = await testServer.post('/pessoas').send({
      email: 'pessoa2@gmail.com',
      cidadeId,
      nomeCompleto: 'nome completo2',
    });
    expect(res2.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res2.body).toEqual('number');
  });

  it('Tenta criar registro com email duplicado', async () => {
    const res3 = await testServer.post('/pessoas').send({
      cidadeId,
      nomeCompleto: 'nome completo3',
      email: 'pessoa3@gmail.com',
    });
    expect(res3.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res3.body).toEqual('number');

    const res4 = await testServer.post('/pessoas').send({
      cidadeId,
      email: 'pessoa3@gmail.com',
      nomeCompleto: 'nome completo4',
    });
    expect(res4.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res4.body).toHaveProperty('errors.default');
  });

  it('Tenta criar um registro com nomeCompleto muito curto', async () => {
    const res5 = await testServer.post('/pessoas').send({
      email: 'pessoa5@gmail.com',
      cidadeId,
      nomeCompleto: 'no',
    });
    expect(res5.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res5.body).toHaveProperty('errors.body.nomeCompleto');
  });

  it('Tenta criar registro sem nomeCompleto', async () => {
    const res6 = await testServer.post('/pessoas').send({
      cidadeId,
      email: 'pessoa6@gmail.com',
    });

    expect(res6.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res6.body).toHaveProperty('errors.body.nomeCompleto');
  });

  it('Tenta criar registro sem email', async () => {
    const res7 = await testServer.post('/pessoas').send({
      cidadeId,
      nomeCompleto: 'nome completo7',
    });

    expect(res7.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res7.body).toHaveProperty('errors.body.email');
  });

  it('Tenta criar registro com email inválido', async () => {
    const res8 = await testServer.post('/pessoas').send({
      cidadeId,
      email: 'pessoa8',
      nomeCompleto: 'nome completo8',
    });

    expect(res8.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res8.body).toHaveProperty('errors.body.email');
  });

  it('Tenta criar registro sem cidadeId', async () => {
    const res9 = await testServer.post('/pessoas').send({
      email: 'pessoa9@gmail.com',
      nomeCompleto: 'nome completo9',
    });

    expect(res9.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res9.body).toHaveProperty('errors.body.cidadeId');
  });

  it('Tenta criar registro com cidadeId inválido', async () => {
    const res10 = await testServer.post('/pessoas').send({
      cidadeId: 'cidadeInvalida_wx4hjx',
      email: 'pessoa10@gmail.com',
      nomeCompleto: 'nome completo10',
    });

    expect(res10.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res10.body).toHaveProperty('errors.body.cidadeId');
  });

  it('Tenta criar registro sem enviar nenhuma propriedade', async () => {
    const res11 = await testServer.post('/pessoas').send({});

    expect(res11.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res11.body).toHaveProperty('errors.body.email');
    expect(res11.body).toHaveProperty('errors.body.cidadeId');
    expect(res11.body).toHaveProperty('errors.body.nomeCompleto');
  });
});
