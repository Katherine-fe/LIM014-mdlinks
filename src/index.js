const path = require('path');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');
// const { normalize } = require('path');

// Función que verifica si existe la ruta
const existsRoute = (route) => (fs.existsSync(route));
// console.log(existsRoute('/Users/katty/Desktop/REPOSITORIOS/LIM014-mdlinks/src/Prueba2'));

// Función devuelve false si es relativa
const routeIsAbsolute = (route) => (path.isAbsolute(route));
// console.log(routeIsAbsolute('readme2.md'));

// Función que verifica si es archivo
const routeIsFile = ((route) => fs.statSync(route).isFile());
// const normalizar= path.normalize;
// console.log(routeIsFile('C:/Users/katty/Desktop/REPOSITORIOS/LIM014-mdlinks/src/Prueba2/archivo2.md'));

// Función que extrae si tiene extención .md
const routeIsMd = (route) => (path.extname(route));
// console.log(routeIsM('./src/Prueba2/archivo2.md'));

// Función que lee directorio
const readDirectorio = (ruta) => fs.readdirSync(ruta);
// console.log(readDirectorio('./src/Prueba2'));

// Funcion para convertir route relativa a absoluta
const convertAbsolute = ((route) => {
  if (!routeIsAbsolute(route)) {
    return path.resolve(route);
  }
  return route;
});
// console.log(convertAbsolute('readme2.md'));

// Funcion lee todo el directorio y especifica ruta => se crea una nueva matriz con los elementos encontrados => une los segmentos de ruta especificados en una ruta
const ArrayFilesandDirectories = (route) => readDirectorio(route).map((element) => path.join(route, element));
// console.log(ArrayFilesandDirectories('C:/Users/katty/Desktop/REPOSITORIOS/LIM014-mdlinks/src/Prueba2'));

// Funcion que devuelva archivos .md
const searchRoutemd = (route) => {
  let arrayMdFiles = [];
  const filePath = convertAbsolute(route);
  if (routeIsFile(filePath)) {
    if (routeIsMd(filePath) === '.md') { // por cada elemento preguntamos si tiene extencion .md y la extrae
      arrayMdFiles.push(filePath);
    }
  } else {
    ArrayFilesandDirectories(route).forEach((element) => { // recorrido por cada elemento de directorio
      const filesOfNewRoute = element;
      const getMDFilesInNewRoute = searchRoutemd(filesOfNewRoute); // recursion searchRoutemd se llama a si mismo
      arrayMdFiles = arrayMdFiles.concat(getMDFilesInNewRoute);
    });
  }
  return arrayMdFiles;
};
// console.log(searchRoutemd('C:/Users/katty/Desktop/REPOSITORIOS/LIM014-mdlinks/src/Prueba2'));

// Funcion que devuelve informacion del archivo
const readFilePath = (route) => fs.readFileSync(route).toString();
// console.log(readFilePath('C:/Users/katty/Desktop/REPOSITORIOS/LIM014-mdlinks/src/Prueba2/archivo2.md'));

// Funcion que permite extraer links de archivos y los devuelve en array de objetos
const extraerLinks = (route) => {
  const arrayLinks = [];
  const renderer = new marked.Renderer(); // customizar dependiendo de la sintaxis
  searchRoutemd(route).forEach((file) => {
    renderer.link = (href, title, text) => { // renderer define salida ouput con tres propiedades
      const linkProperties = {
        href,
        text,
        file,
      };
      arrayLinks.push(linkProperties);
    };
    marked(readFilePath(file), { renderer });
  });
  return arrayLinks;
};
// console.log(extraerLinks('/Users/katty/Desktop/REPOSITORIOS/LIM014-mdlinks/prueba'));

const optionValidate = (route) => {
  const arrayValidate = [];
  const linksArray = extraerLinks(route);
  linksArray.forEach((el) => {
    const obj = { ...el };
    arrayValidate.push(fetch(el.href)
      .then((res) => {
        if ((res.status >= 200) && (res.status <= 399)) {
          obj.status = res.status;
          obj.statusText = 'OK';
          return obj;
        }
        obj.status = res.status;
        obj.statusText = 'FAIL';
        return obj;
      })
      .catch(() => {
        obj.status = 'no status';
        obj.statusText = 'FAIL';
        return obj;
      }));
  });
  return Promise.all(arrayValidate);
};

// Si se pasa un array vacío a all , la promesa se cumple inmediatamente.
// se cumple cuando todas las promesas del iterable dado se han cumplido
// optionValidate('./test/Prueba').then((res) => console.log(res)).catch((err) => console.log(err));
// optionValidate('C:/Users/katty/Desktop/REPOSITORIOS/LIM014-mdlinks/Prueba').then((res) => console.log(res)).catch((err) => console.log(err));

module.exports = {
  existsRoute,
  routeIsFile,
  routeIsMd,
  convertAbsolute,
  ArrayFilesandDirectories,
  optionValidate,
  extraerLinks,
  searchRoutemd,
  readFilePath,
  routeIsAbsolute,
  readDirectorio,
};
