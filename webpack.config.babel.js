'use strict';
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './app/client/js/react/app.js'
    ],
    output: {
        path: path.join(__dirname, 'public/js/react'),
        publicPath: '/',
        filename: 'main.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'public/components'],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        // 	compress: {
        // 		warnings: false
        // 	}
        // }),
        new webpack.ResolverPlugin([
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        ], ['normal', 'loader'])
    ]
}