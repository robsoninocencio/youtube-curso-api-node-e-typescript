import { server } from './server/Server';

const PORT = 3333;

server.listen(PORT, () => {
  console.log('Server started on port = ' + PORT);
});
