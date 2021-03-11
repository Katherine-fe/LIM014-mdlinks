const path = require('path');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');

// Función que verifica si existe la ruta
const existsRoute = (route) => (fs.existsSync(route));
// console.log(existsRoute('/Users/katty/Desktop/REPOSITORIOS/LIM014-mdlinks/src/Prueba2'));

// Función devuelve false si es relativa
const Isabsolute = (route) => (path.isAbsolute(route));
// console.log(Isabsolute('readme2.md'));

// Función que verifica si es archivo
const IsFile = ((route) => fs.statSync(route).isFile());
// console.log(IsFile('C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\src/Prueba2\\archivo2.md'));

// Función que extrae si tiene extención .md
const IsMd = (route) => (path.extname(route));
// console.log(IsMd('C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\src\\Prueba2\\archivo2.md'));

// Función que lee directorio
const readDirectorio = (ruta) => fs.readdirSync(ruta);
console.log(readDirectorio('C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\src\\Prueba2'));

// Funcion para convertir route relativa a absoluta
const convertAbsolute = ((route) => {
  if (!Isabsolute(route)) {
    const newAbsolute = path.resolve(route);
    return newAbsolute; 
  }
  return route;
});
// console.log(convertAbsolute('readme2.md'));

module.exports = {
  existsRoute,
  IsFile,
  IsMd,
  convertAbsolute,
  readDirectorio,
};