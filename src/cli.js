#!/usr/bin/env node
const mdLinks = require('./mdlinks-cli');
// process.argv -> Matriz que contiene los argumentos de la linea de comandos
// 1°nodo 2°nombre del archivo (desde)3°argumentos de la linea de comandos adicionales
// console.log(process.argv);
const path = process.argv[2];
const options = {
  stats: process.argv[3],
  validate: process.argv[4],
};
mdLinks.cli(path, options).then((res) => console.log(res)).catch(() => console.log('Ingrese una ruta valida'));
