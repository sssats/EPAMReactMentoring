const express = require('express')
const webpack = require('webpack');
const app = express();
const webpackConfig = require('../config/webpack.config.dev');
const compiler = webpack(webpackConfig);
const NODE_ENV = process.env.NODE_ENV;

console.log(NODE_ENV)

app.use(require("webpack-dev-middleware")(compiler,
	{
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
	}
));
app.use(require("webpack-hot-middleware")(compiler));
app.listen(3000);
