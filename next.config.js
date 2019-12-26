// next.config.js is not transformed by Babel. So you can only use javascript features supported by your version of Node.js.
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css')
const path = require('path');
const config = require('./config');

const resolve = (dir) => {
    return path.join(__dirname, dir);
}

module.exports = withCSS(withLess({
    webpack: (config, { webpack }) => {
        // 添加别名
        Object.assign(config.resolve.alias, {
            'styles': resolve('styles'),
            'components': resolve('components'),
            'api': resolve('api'),
            'types': resolve('types')
        });
        config.plugins.push(new webpack.ContextReplacementPlugin(
            /highlight\.js\/lib\/languages$/,
            new RegExp(`^./(${['javascript', 'typescript', 'bash', 'basic', 'json'].join('|')})$`)
        ));
        config.optimization.splitChunks && (config.optimization.splitChunks.cacheGroups.react.test = /[\\/]node_modules[\\/](react|react-dom|scheduler|use-subscription|@material-ui\/styles\/esm|@material-ui\/core\/esm\/styles)[\\/]/);
        return config;
    },
    env: {
        ...config[process.env.NODE_ENV]
    }
}));
