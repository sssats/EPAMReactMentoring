const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		path.resolve(__dirname, '../front/src/jsx/app.jsx'),
		'webpack-hot-middleware/client'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../server/public'),
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader","css-loader", "sass-loader"]
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
	devtool: 'inline-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
};