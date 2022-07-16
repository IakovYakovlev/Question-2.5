// В этом файле мы будем вызывать webpack и запускать его программно.

// Программно вызываем webpack.
// Запустить компиляцию
// Потом настроить webpack, чтобы при изменении кода он перезапускал компиляцию бандла.
// 
// Потом воспользоваться пакетом nodemond - для того, чтобы запустить наш сервер и 
// перезапускать его каждый раз когда изменться бандлы.

const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const nodemon = require('nodemon');
const path = require('path');

const compiler = webpack(webpackConfig);

// Холодный старт
compiler.run((err) => {
  if(err) {
    console.log('Compilation failed: ', err);
  }

  compiler.watch({}, (err) => {
    if(err) {
      console.log('Compilation failed: ', err);
    }
    console.log('/compilation was successfully');
  });

  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [
      path.resolve(__dirname, '../dist/server'),
      path.resolve(__dirname, '../dist/client'),
    ]
  })
});