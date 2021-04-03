const colors = require('colors');
const stats = require('./options');
const mdlinks = require('./mdlinks');

const cli = (path, options) => {
  if (options.stats === '--stats' && options.validate === '--validate') {
    return mdlinks.mdLinks(path, { validate: true }).then((data) => {
      let sValidate = '';
      sValidate += colors.cyan(`✔ Total: ${stats.totalStats(data)}\n✔ Uniques: ${stats.uniqueStats(data)}\n✖ Broken: ${stats.brokenStats(data)}`);
      return sValidate;
    });
  }
  if (options.stats === '--stats') {
    return mdlinks.mdLinks(path, { validate: true }).then((data) => {
      let stat = '';
      stat += colors.cyan(`✔ Total: ${stats.totalStats(data)}\n✔ Uniques: ${stats.uniqueStats(data)}`);
      return stat;
    });
  }
  if (options.stats === '--validate') {
    return mdlinks.mdLinks(path, { validate: true }).then((data) => {
      let validate = '';
      data.forEach((element) => {
        validate += colors.cyan(`${element.file} ${element.href} ${element.statusText} ${element.status} ${element.text} \n`);
      });
      return validate;
    });
  }

  return mdlinks.mdLinks(path, { validate: false }).then((data) => {
    let links = '';
    data.forEach((element) => {
      links += `${element.file} ${element.href} ${element.text} \n`;
    });
    return links;
  });
};
module.exports = { cli };

// cli('./pruebatest/probando.md', { stats: '--validate' }).then((response) => { console.log(response); });
