
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/assets/dist' : 'http://localhost:8080',
    outputDir: "../djangolms/assets/dist",
    indexPath:'../../templates/base-vue.html',

    chainWebpack: config => {
 

        config.devServer
            .public('http://localhost:8080')
            .hotOnly(true)
            .writeToDisk(filePath => filePath.endsWith('index.html'))
            .headers({'Access-Control-Allow-Origin': '*'})
    }
};