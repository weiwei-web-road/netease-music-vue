module.exports = {
    chainWebpack: config => {
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
        config.plugin('html').tap(args => {
            args[0].inject = 'body';
            return [args[0]];
        });
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }  
};