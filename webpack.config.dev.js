const path = require('path');

module.exports = {
	entry: ['./front/src/jsx/app.jsx',
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'front/public'),
		publicPath: '/front/public'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
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
	devtool: 'inline-source-map'
};