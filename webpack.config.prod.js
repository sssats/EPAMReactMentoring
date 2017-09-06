const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin("/styles/[name].css");

module.exports = {
	entry: ['./front/src/jsx/app.jsx',
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'front/public')
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: extractCSS.extract(["css-loader", "sass-loader"])
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}]
	},
	plugins: [extractCSS]
};