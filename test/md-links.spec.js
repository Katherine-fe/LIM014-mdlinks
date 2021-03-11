const {
  existsRoute,
  IsFile,
  IsMd,
  convertAbsolute,
} = require('../src/index.js');

const mdlinks = require('../src/mdlinks');


describe('existsRoute', () => {
  it('should be a function', () => {
    expect(typeof existsRoute).toBe('function');
  });

  it('returns a boolean if the route existsRoute', () => {
     expect(existsRoute('C:\\Users\\KELLY-PC\\Documents\\md-links\\LIM013-fe-md-links\\test\\Prueba\\Prueba1.md')).toBe(true);
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
      expect(convertAbsolute('../Prueba2/archivo.md')).toBe('C:\\Users\\KELLY-PC\\Documents\\md-links\\Prueba2\\archivo.md');
    });
  });


describe('Testing to find out if IsFile is a function', () => {
  it('should be a function', () => {
    expect(typeof IsFile).toBe('function');
  });
  it('it is expected to be a IsFile', () => {
    expect(IsFile('C:\\Users\\KELLY-PC\\Documents\\md-links\\LIM013-fe-md-links\\test\\Prueba\\Prueba1.md')).toBe(true);
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
    expect(IsMd('C:\\Users\\KELLY-PC\\Documents\\md-links\\LIM013-fe-md-links\\src\\Prueba2\\archivo.md')).toBe('.md');
  });
  it('should return empty if there is no extension', () => {
    expect(IsMd('.tex')).toBe('');
  });
});

