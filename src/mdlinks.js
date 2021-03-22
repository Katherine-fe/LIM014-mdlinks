const funciones = require('./index.js');

const mdlinks = (stringpath, options = {}) => {
  if (!funciones.existsRoute(stringpath)) {
    throw new Error('Ruta invalida');
  }
  const links = funciones.extraerLinks(stringpath);
  const links5 = funciones.optionValidate(stringpath);
  return new Promise(
    (resolve) => {
      if (options.validate === true) {
        resolve(links5);
      } else if (options.validate === false) {
        resolve(links);
      }
    },
  );
};
mdlinks('./test/Prueba', { validate: true }).then((response) => { console.log(response); });

module.exports = mdlinks;
