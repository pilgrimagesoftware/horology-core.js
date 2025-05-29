const { join } = require('path');

module.exports = {
  extends: [join(__dirname, '../eslint-config-starter')],
  parserOptions: { tsconfigRootDir: __dirname },
};
