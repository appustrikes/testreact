var path = require('path');
var webpack = require('webpack');
var ExtraTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');



var name = 'deepak';

module.exports = {
	node: {
		child_process: 'empty',
		fs: 'empty'
	},

	context: path.join(__dirname,"app"),
	entry:{
		webpackDevServer :'webpack/hot/dev-server',
		less:"./less/app-build.less",
		html:"./index.html",
		javascript:"./js/main.js"
	},
	output:{
		filename: name+"-[name].js",
		path: path.join(__dirname,"dist/app"),
		publicPath: "/deepu/app/",
		sourceMapFilename: "debugging/[file].map"
	},
	module:{
		loaders:[
			{
				test: /\.jsx?$/,
				exclude: /node_modules|bower_components/,
				loader:"babel"
			},
			{
				test: /\.less$/,
				loader: "style!css!less"
			},
			{
				test:/\.css$/,
				loader:"style!css"
			},
			{
				test:/\.html$/,
				loader: "file?name=[name].[ext]"
			},
			{
				test: /\.(woff|eot|ttf|svg|gif|png|ico|woff(2))(\?.*)?$/,
				loader: 'url-loader?limit=1000000'
			},
			{
				include: /\.json/, loaders:["json-loader"]
			}
		]
	},
	plugins:[
		new webpack.DefinePlugin({
			"require.specified":"require.resolve"
		}),
		new ExtraTextPlugin(name+"[name].css"),
		new HtmlWebpackPlugin({
			hash:true,
			title:'deepu',
			inject:'body'
		})
	],
	resolve: {
		extensions:['','.js','.json','.jsx']
	},
	resolveLoader:{
		root: [__dirname,path.join(__dirname,"bower_components"),path.join(__dirname,"node_modules")]
	}
};