const {
  existsRoute,
  IsFile,
  IsMd,
  convertAbsolute,
} = require('../src/index.js');

describe('existsRoute', () => {
  it('should be a function', () => {
    expect(typeof existsRoute).toBe('function');
  });

  it('returns a boolean if the route existsRoute', () => {
     expect(existsRoute('/Users/katty/Desktop/REPOSITORIOS/LIM014-mdlinks/src/Prueba2')).toBe(true);
  });

  it('should return false for invalid path', () => {
      expect(existsRoute('./documents/example/')).toBe(false);
  });
});


describe('Testing to find out if convertAbsolute is a function', () => {
  it('should be a function', () => {
    expect(typeof convertAbsolute).toBe('function');
  });
    it('should convert an absolute path', () => {
      expect(convertAbsolute('../Prueba2/archivo.md')).toBe('C:\\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\src\\Prueba2');
    });
  });


describe('Testing to find out if IsFile is a function', () => {
  it('should be a function', () => {
    expect(typeof IsFile).toBe('function');
  });
  it('it is expected to be a IsFile', () => {
    expect(IsFile('C:\\Users\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\test\\Prueba\\Prueba1.md')).toBe(true);
  });
  it('It should return false if it is not an IsFile', () => {
    expect(IsFile('./test')).toBe(false);
  });
});


describe('Testing to find out if IsMd is a function', () => {
  it('should be a function', () => {
    expect(typeof IsMd).toBe('function');
  });
  it('should return the file extension', () => {
    expect(IsMd('C:\Users\\katty\\Desktop\\REPOSITORIOS\\LIM014-mdlinks\\src\\Prueba2\\archivo.md')).toBe('.md');
  });
  it('should return empty if there is no extension', () => {
    expect(IsMd('.tex')).toBe('');
  });
});