var path = require("path");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "client"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      query: {
        presets: ["es2015", "react"]
      }
    },
    {
      test: /\.css$/,
      loader: ["style-loader", "css-loader"]
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: "url-loader?name=client/img/[name].[ext]"
    }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "client"),
    proxy: {
      "/**": { //catch all requests
        target: "/index.html", //default target
        secure: false,
        bypass: function(req) {
          if (req.path.indexOf("/img/") !== -1 || req.path.indexOf("/public/") !== -1) {
            return "/";
          }

          if (req.headers.accept.indexOf("html") !== -1) {
            return "/index.html";
          }
        }
      }
    }
  }
};
