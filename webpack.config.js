'use strict';

const webpack = require('webpack');

module.exports = {
	watch: true,
	output: {
		filename: '[name].js',
		chunkFilename: '[id].chunk.js'
	},
	resolve: {
		modulesDirectories: ['node_modules', 'public/components'],
		alias: {
			'js': __dirname + '/app/client/js'
		}
	},
	module: {
		loaders: [
			{ test: /\.jade$/, loader: 'jade' }
		],
		noParse: [
		]
	},
	devtool: 'eval',
	plugins: [
		new webpack.ProvidePlugin({
			jQuery: 'jquery'
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.ResolverPlugin([
			new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
		], ['normal', 'loader'])
	]
};