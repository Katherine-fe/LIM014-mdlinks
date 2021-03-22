const functions = require('../src/index.js');

describe('existsRoute', () => {
  it('should be a function', () => {
    expect(typeof functions.existsRoute).toBe('function');
  });

  it('returns a boolean if the route existsRoute', () => {
    expect(functions.existsRoute('/Users/katty/Desktop/REPOSITORIOS/LIM014-mdlinks/src/Prueba2')).toBe(true);
  });

  it('should return false for invalid path', () => {
    expect(functions.existsRoute('./Desktop/example')).toBe(false);
  });
});

describe('routeIsAbsolute', () => {
  it('should be a function', () => {
    expect(typeof functions.routeIsAbsolute).toBe('function');
  });
  it('returns a boolean if the routeIsAbsolute', () => {
    expect(functions.routeIsAbsolute('/Users/katty/Desktop/REPOSITORIOS/LIM014-mdlinks/src/Prueba2')).toBe(true);
  });

  it('should return false for invalid path', () => {
    expect(functions.routeIsAbsolute('readme2.md')).toBe(false);
  });
});

describe('routeIsFile', () => {
  it('should be a function', () => {
    expect(typeof functions.routeIsFile).toBe('function');
  });
  it('returns a boolean if the routeIsFile', () => {
    expect(functions.routeIsFile('C:/Users/katty/Desktop/REPOSITORIOS/LIM014-mdlinks/src/Prueba2/archivo2.md')).toBe(true);
  });

  it('should return false for invalid path', () => {
    expect(functions.routeIsFile('C:/Users/katty/Desktop/REPOSITORIOS/LIM014-mdlinks/src/Prueba2')).toBe(false);
  });
});

describe('routeIsMd', () => {
  it('should be a function', () => {
    expect(typeof functions.routeIsFile).toBe('function');
  });
  it('returns a boolean if the routeIsMd', () => {
    expect(functions.routeIsMd('./src/Prueba2/archivo2.md')).toBe('.md');
  });

  it('should return false for invalid path', () => {
    expect(functions.routeIsMd('./src/Prueba2/archivo.txt')).toBe('.txt');
  });
});

const resultReadDirectorio = ['archivo.md', 'archivo.txt', 'archivo2.md', 'archivo3.md', 'prueba4.md'];

describe('readDirectorio', () => {
  it('should be a function', () => {
    expect(typeof functions.readDirectorio).toBe('function');
  });
  it('returns a boolean if the readDirectorio', () => {
    expect(functions.readDirectorio('./src/Prueba2')).toEqual(resultReadDirectorio);
  });
});

describe('convertAbsolute', () => {
  it('should be a function', () => {
    expect(typeof functions.convertAbsolute).toBe('function');
  });
  it('returns a boolean if the convertAbsolute', () => {
    expect(functions.convertAbsolute('readme2.md')).toBe('C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\readme2.md');
  });
});

const resultArrayFilesandDirectories = [
  'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\src\\Prueba2\\archivo.md',
  'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\src\\Prueba2\\archivo.txt',
  'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\src\\Prueba2\\archivo2.md',
  'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\src\\Prueba2\\archivo3.md',
  'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\src\\Prueba2\\prueba4.md',
];

describe('ArrayFilesandDirectories', () => {
  it('should be a function', () => {
    expect(typeof functions.ArrayFilesandDirectories).toBe('function');
  });
  it('returns a boolean if the ArrayFilesandDirectories', () => {
    expect(functions.ArrayFilesandDirectories('C:/Users/katty/Desktop/REPOSITORIOS/LIM014-mdlinks/src/Prueba2')).toEqual(resultArrayFilesandDirectories);
  });
});

const resultSearchRoutemd = [
  'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\src\\Prueba2\\archivo.md',
  'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\src\\Prueba2\\archivo2.md',
  'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\src\\Prueba2\\archivo3.md',
  'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\src\\Prueba2\\prueba4.md',
];

describe('ArrayFilesandDirectories', () => {
  it('should be a function', () => {
    expect(typeof functions.searchRoutemd).toBe('function');
  });
  it('returns a boolean if the searchRoutemd', () => {
    expect(functions.searchRoutemd('C:/Users/katty/Desktop/REPOSITORIOS/LIM014-mdlinks/src/Prueba2')).toEqual(resultSearchRoutemd);
  });
});

const resultReadFilePath = '# metodo fs.statSync()';

describe('readFilePath', () => {
  it('should be a function', () => {
    expect(typeof functions.readFilePath).toBe('function');
  });
  it('returns a boolean if the readFilePath', () => {
    expect(functions.readFilePath('C:/Users/katty/Desktop/REPOSITORIOS/LIM014-mdlinks/src/Prueba2/archivo.md')).toEqual(resultReadFilePath);
  });
});

const resultExtraerLinks = [
  {
    href: 'https://nodejs.org/es/about/',
    text: 'Acerca de Node.js - Documentación oficial',
    file: '\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\prueba\\carpeta2\\read.md',
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: 'Node.js file system - Documentación oficial',
    file: '\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\prueba\\carpeta2\\read.md',
  },
  {
    href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ&t=916s',
    text: 'Pill de recursión - video',
    file: '\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\prueba\\probando.md',
  },
  {
    href: 'httpas://nodejs.org/es/abouts/',
    text: 'Acerca de Node.js - Documentación oficial',
    file: '\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\prueba\\probando.md',
  },
];

describe('extraerLinks', () => {
  it('should be a function', () => {
    expect(typeof functions.extraerLinks).toBe('function');
  });
  it('returns a boolean if the extraerLinks', () => {
    expect(functions.extraerLinks('/Users/katty/Desktop/REPOSITORIOS/LIM014-mdlinks/prueba')).toEqual(resultExtraerLinks);
  });
});

const resultOptionValidate = [
  {
    href: 'https://www.figma.com/',
    text: 'Figma',
    file: 'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\test\\Prueba\\carpeta1\\pruebita.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://nodejs.org/es/about/',
    text: 'Definicón de Node js',
    file: 'C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\test\\Prueba\\Prueba1.md',
    status: 200,
    statusText: 'OK',
  },
];

describe('optionValidate', () => {
  it('should be a function', () => {
    expect(typeof functions.optionValidate).toBe('function');
  });
  it('Links encontrados - retornar un array:  file, href, status, statusMessage y text',
    () => functions
      .optionValidate('./test/Prueba')
      .then((resp) => {
        expect(resp).toEqual(resultOptionValidate);
      }));
});

const resultOptionValidate2 = [
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

describe('optionValidate', () => {
  it('should be a function', () => {
    expect(typeof functions.optionValidate).toBe('function');
  });
  it('Links encontrados - retornar un array:  file, href, status, statusMessage y text',
    () => functions
      .optionValidate('./Prueba')
      .catch((resp) => {
        expect(resp).toEqual(resultOptionValidate2);
      }));
});
