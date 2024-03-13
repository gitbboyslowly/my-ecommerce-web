const webpack = require('webpack');
let customEnvConfig = require('dotenv')?.config({ path: '.env' })?.parsed || {};

function stringifyValues(object = {}) {
  return Object.entries(object).reduce(
    (acc, curr) => ({ ...acc, [`${curr[0]}`]: JSON.stringify(curr[1]) }),
    {}
  );
}

customEnvConfig = { ...stringifyValues(process.env), ...stringifyValues(customEnvConfig) };
console.info('Custom webpack build environment - ' + (customEnvConfig?.ENVIRONMENT_NAME || 'NA'));
module.exports = {
  plugins: [ new webpack.DefinePlugin({ 'process.env': customEnvConfig }) ],
};
