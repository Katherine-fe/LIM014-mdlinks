const md = require('../src/mdlinks.js');

const outputValidate = [
  {
    href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
    text: 'Asíncronía en js',
    file: 'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\test\\Prueba\\carpeta1\\pruebita.md',
  },
  {
    href: 'https://www.youtube.com/watchtt',
    text: 'link de prueba - prueba',
    file: 'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\test\\Prueba\\carpeta1\\pruebita.md',
  },
  {
    href: 'https://nodejs.org/es/about/',
    text: 'Definicón de Node js',
    file: 'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\test\\Prueba\\Prueba1.md',
  },
];

const outputValidateOkFail = [
  {
    href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
    text: 'Asíncronía en js',
    file: 'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\test\\Prueba\\carpeta1\\pruebita.md',
    status: 'no status',
    statusText: 'FAIL',
  },
  {
    href: 'https://www.youtube.com/watchtt',
    text: 'link de prueba - prueba',
    file: 'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\test\\Prueba\\carpeta1\\pruebita.md',
    status: 404,
    statusText: 'FAIL',
  },
  {
    href: 'https://nodejs.org/es/about/',
    text: 'Definicón de Node js',
    file: 'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\test\\Prueba\\Prueba1.md',
    status: 200,
    statusText: 'OK',
  },
];

describe('mdLinks,funcion que devuelve un arreglo de objetos', () => {
  it('Debería ingresar un string con la ruta mas el objeto validate con la propiedad true y retorna un array de objetos con las propiedades href,text,file,status,statusText', (done) => {
    const route = (__dirname, './test/Prueba');
    const object = { validate: true };
    md.mdLinks(route, object).then((res) => {
      expect(res).toEqual(outputValidateOkFail);
      done();
    });
  });
});

it('Debería ingresar un string con la ruta mas el objeto validate con la propiedad false y retorna un array de objetos con las propiedades href,text,file', (done) => {
  const route = (__dirname, './test/Prueba');
  const object = { validate: false };
  md.mdLinks(route, object).then((res) => {
    expect(res).toEqual(outputValidate);
    done();
  });
});
