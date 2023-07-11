import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Pessoas - GetAll', () => {
  let cidadeId: number | undefined = undefined;
  beforeAll(async () => {
    const resCidade = await testServer
      .post('/cidades')
      .send({ nome: 'cidade teste' });
    cidadeId = resCidade.body;
  });
  it('Buscar todos os registros', async () => {
    const res1 = await testServer.post('/pessoas').send({
      cidadeId,
      email: 'pessoa1@gmail.com',
      nomeCompleto: 'nome completo1',
    });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    const res2 = await testServer.post('/pessoas').send({
      cidadeId,
      email: 'pessoa2@gmail.com',
      nomeCompleto: 'nome completo2',
    });
    expect(res2.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer.get('/pessoas').send();
    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });
});
