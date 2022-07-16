const clientConfig = require('./cfg/webpack.client.config');
const serverConfig = require('./cfg/webpack.server.config');

// Если мы передаем массив, тогда webpack исполняет каждую кофигурацию и
// генерит для нее соответствующий бандл.
module.exports = [
  clientConfig,
  serverConfig,
];