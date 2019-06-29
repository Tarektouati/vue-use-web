const mkdirpNode = require('mkdirp');
const chalk = require('chalk');
const { promisify } = require('util');
const { configs, utils, paths } = require('./config');

const mkdirp = promisify(mkdirpNode);

async function build () {
  await mkdirp(paths.dist);
  // eslint-disable-next-line
  console.log(chalk.cyan('Generating ESM build...'));
  await utils.writeBundle(configs.esm, 'elweb.esm.js');
  // eslint-disable-next-line
  console.log(chalk.cyan('Done!'));

  // eslint-disable-next-line
  console.log(chalk.cyan('Generating UMD build...'));
  await utils.writeBundle(configs.umd, 'elweb.js', true);
  // eslint-disable-next-line
  console.log(chalk.cyan('Done!'));
};

build();
