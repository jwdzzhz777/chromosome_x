// next.config.js is not transformed by Babel. So you can only use javascript features supported by your version of Node.js.
const withLess = require('@zeit/next-less');
var path = require('path');
const config = require('./config');

const resolve = (dir) => {
    return path.join(__dirname, dir);
}

module.exports = withLess({
    webpack: (config) => {
        Object.assign(config.resolve.alias, {
            'styles': resolve('styles'),
            'components': resolve('components'),
            'api': resolve('api'),
            'types': resolve('types')
        });
        return config;
    },
    env: {
        ...config[process.env.NODE_ENV]
    }
});
