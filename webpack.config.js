var path = require("path");
var webpack = require("webpack");

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
			loader: "style-loader",
			exclude: /node_modules/
		},
		{	
			test: /\.css$/,
			loader: "css-loader",
			query: {
				modules: true,
			    localIdentName: '[name]__[local]___[hash:base64:5]'
			},
			exclude: /node_modules/
		}]
	},
	devServer: {
		contentBase: path.join(__dirname, "client")
	}
}
