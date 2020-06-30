const { NamedModulesPlugin } = require("webpack");

module.exports = {
    entry: "./js/main.js",
    output:{
        filename: "bundle.js",
        path: __dirname + "/build"
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    
};
