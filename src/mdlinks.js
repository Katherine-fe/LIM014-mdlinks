const funciones = require('./index.js');

const mdlinks = (stringpath, options = {}) => {
  if (!funciones.existsRoute(stringpath)) {
    throw new Error('Ruta invalida');
  }
  const extractLinks = funciones.extraerLinks(stringpath);
  const validatedArray = funciones.optionValidate(stringpath);
  return new Promise(
    (resolve) => {
      if (options.validate === true) {
        resolve(validatedArray);
      } else if (options.validate === false) {
        resolve(extractLinks);
      }
    },
  );
};
mdlinks('./test/Prueba', { validate: true }).then((response) => { console.log(response); });

module.exports = mdlinks;
