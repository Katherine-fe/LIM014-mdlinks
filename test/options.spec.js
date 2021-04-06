const stats = require('../src/options.js');

const arrayLinks1 = [
  {
    href: 'https://nodejs.org/es/about/',
    text: 'Acerca de Node.js - Documentación oficial',
    file: 'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\Prueba\\carpeta2\\read.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: 'Node.js file system - Documentación oficial',
    file: 'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\Prueba\\carpeta2\\read.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ&t=916s',
    text: 'Pill de recursión - video',
    file: 'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\Prueba\\probando.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'httpas://nodejs.org/es/abouts/',
    text: 'Acerca de Node.js - Documentación oficial',
    file: 'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\Prueba\\probando.md',
    status: 'no status',
    statusText: 'FAIL',
  },
];
describe('Show Statistic', () => {
  describe('Should show statistic about total and unique of href', () => {
    it('Deberia la cantidad de links', () => {
      const total = 4;
      expect(stats.totalStats(arrayLinks1)).toEqual(total);
    });
    it('Deberia un array y retornar la cantidad de links que no se repiten', () => {
      const total = 4;
      expect(stats.uniqueStats(arrayLinks1)).toBe(total);
    });
    it('Deberia retornar la cantidad de links rotos', () => {
      const total = 1;
      expect(stats.brokenStats(arrayLinks1)).toBe(total);
    });
  });
});
