const express = require('express')
const webpack = require('webpack');
const app = express();
const webpackConfig = require('../config/webpack.config.dev');
const compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler,
	{
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
	}
));
app.use(require("webpack-hot-middleware")(compiler));
app.use(express.static('public'));

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/public/index.html')
})

app.listen(3000);
