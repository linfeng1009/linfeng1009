module.exports = {
    devServer: {
        proxy: {
            '/zfy': {
                target: 'http://xiaoqi.tanggl.cn',
                changeOrigin: true,
            }
        },
    }
}