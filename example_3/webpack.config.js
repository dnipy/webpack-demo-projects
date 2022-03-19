module.exports = {
    entry : "./src/index.js",
    output : {
        filename : "./app.bundle.js"
    },
    module: {
        rules:[
          {
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
}