const path = require('path');
const fs = require('fs');
const marked = require('marked');

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

// Funcion para convertir route relativa a absoluta
const convertAbsolute = ((route) => {
  if (!Isabsolute(route)) {
    const newAbsolute = path.resolve(route);
    return newAbsolute;
  }
  return route;
});
// console.log(convertAbsolute('readme2.md'));

//Funcion lee todo el directorio y especifica ruta
const ArrayFilesandDirectories = (route) => {
  return readDirectorio(route).map(element => // se crea una nueva matriz con los elementos encontrados
    path.join(route, element)); // une los segmentos de ruta especificados en una ruta
};
// console.log(ArrayFilesandDirectories('C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\src\\Prueba2'));

// Funcion que devuelva archivos .md -- en proceso
const searchRoutemd = (route) => {
  let arrayMdFiles = [];
  const filePath = convertAbsolute(route);
};


module.exports = {  
  existsRoute,
  IsFile,
  IsMd,
  convertAbsolute,
  ArrayFilesandDirectories,
 };