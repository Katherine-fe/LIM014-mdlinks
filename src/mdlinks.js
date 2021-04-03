const funcs = require('./index.js');

const mdLinks = (path, options) => new Promise((resolve) => {
  const absRoute = funcs.convertAbsolute(path);
  if (options.validate === true) {
    resolve(funcs.optionValidate(absRoute));
  }
  resolve(funcs.extraerLinks(absRoute));
});
mdLinks('./test/Prueba', { validate: true }).then((response) => { console.log(response); });

module.exports = { mdLinks };
