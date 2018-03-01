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
		},
		{	
			test: /\.css$/,
			loader: "css-loader",
			query: {
				modules: true,
			    localIdentName: '[name]__[local]___[hash:base64:5]'
			},
		},
	    { 
			test: /\.png$/, 
			loader: "url-loader?limit=100000" 
		 },
		{ 
			test: /\.jpg$/, 
			loader: "file-loader" 
		},
		{
			test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
			loader: 'url?limit=10000&mimetype=application/font-woff'
		},
		{
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
			loader: 'url?limit=10000&mimetype=application/octet-stream'
		},
		{
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
			loader: 'file'
		},
		{
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
			loader: 'url?limit=10000&mimetype=image/svg+xml'
		}]
	},
	devServer: {
		contentBase: path.resolve(__dirname, "client")
	}
}
