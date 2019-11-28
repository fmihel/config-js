const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { PageReloadPlugin } = require('page-reload-webpack-plugin');
const ServerConfig = require('./server/config');


function defArg(name){
    return process.argv.find( a=> ( (a===name) || (a===('--'+name)) ) )!==undefined;
}

const toProduction  = defArg('prod');
const runPluginReload = defArg('pluginReload');

const SOURCE_PATH = './app/';
const PUBLIC_PATH = ServerConfig.public;
const TEMPLATE_PATH = './app/template/';
const MEDIA_PATH = './app/media/';

module.exports = {
    mode: toProduction?'production':'development',
    devtool: toProduction?'inline-source-map':false,
    devServer: {
        // contentBase: path.join(__dirname, 'public'),
        // watchContentBase: true,

        port: ServerConfig.port,
    },

    entry: `${SOURCE_PATH}index.js`,
    output: {
        path: path.resolve(__dirname, PUBLIC_PATH),
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new HtmlWebPackPlugin({
            template: `${TEMPLATE_PATH}index.html`,
            filename: './index.html',
        }),
        new CopyWebpackPlugin([
            { from: `${MEDIA_PATH}favicon.ico` },
        ]),
        new PageReloadPlugin({ port: ServerConfig.port ,enable:runPluginReload}),
    ],
};
