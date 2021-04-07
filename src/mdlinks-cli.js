const colors = require('colors');
const stats = require('./options');
const mdlinks = require('./mdlinks');

const help = colors.rainbow(`
====================== help =======================
md-links <path-to-file> -- validate
md-links <path-to-file> --stats
md-links <path-to-file> -- stats --validate
===================================================`);

const cli = (path, options) => {
  if (options.stats === '--stats' && options.validate === '--validate') {
    return mdlinks.mdLinks(path, { validate: true }).then((data) => {
      let sValidate = '';
      sValidate += colors.white(`✔ Total: ${colors.green(stats.totalStats(data))}\n✔ Uniques: ${colors.green(stats.uniqueStats(data))}\n✖ Broken: ${colors.red(stats.brokenStats(data))}`);
      return sValidate;
    });
  }
  if (options.stats === '--stats') {
    return mdlinks.mdLinks(path, { validate: true }).then((data) => {
      let stat = '';
      stat += colors.white(`✔ Total: ${colors.green(stats.totalStats(data))}\n✔ Uniques: ${colors.green(stats.uniqueStats(data))}`);
      return stat;
    });
  }
  if (options.stats === '--validate') {
    return mdlinks.mdLinks(path, { validate: true }).then((data) => {
      let validate = '';
      data.forEach((element) => {
        validate += `${colors.italic.yellow(element.file)} ${colors.italic.white(element.href)} ${(element.statusText === 'OK' ? colors.italic.green(element.statusText)
          : colors.italic.red(element.statusText))} ${element.status === 'no status' ? colors.italic.red(element.status) : colors.italic.green(element.status)} ${colors.italic.cyan(element.text)} \n`;
      });
      return validate;
    });
  }

  return mdlinks.mdLinks(path, { validate: false }).then((data) => {
    let links = '';
    console.log(help);
    data.forEach((element) => {
      links += `${colors.italic.yellow(element.file)} ${colors.italic.white(element.href)} ${colors.italic.cyan(element.text)} \n`;
    });
    return links;
  });
};
module.exports = { cli };

// cli('./pruebatest/probando.md', { stats: '--validate' }).then((response) => { console.log(response); });
