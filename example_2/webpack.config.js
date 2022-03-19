module.exports = {

    entry: './src/index.js',
    output: {
      filename: './app.bundle.js'
    },
    module: {
      rules:[
        {
          test: /\.(png|jpg)$/,
          use: [
                {
                loader: 'url-loader',
                options: {
                limit: 8192
                    }   
                }
            ]
        }
    ]
    },
};