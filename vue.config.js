const path = require('path');
module.exports = {
    runtimeCompiler: true,
    configureWebpack: {
        resolve: {
          alias: {
            "@": path.resolve(__dirname, 'src/'),
            "@types": path.resolve(__dirname, 'src/types/'),
            "@assets": path.resolve(__dirname, 'src/assets/'),
            "@views": path.resolve(__dirname, 'src/views/'),
            "@components": path.resolve(__dirname, 'src/components/'),
            "@public": path.resolve(__dirname, 'public/')

          },
          extensions: ['*', '.js', '.vue', '.json', '.scss','.css']
        }
      }
};