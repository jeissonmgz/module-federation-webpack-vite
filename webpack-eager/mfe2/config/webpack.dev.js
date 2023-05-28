const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    output: {
        uniqueName: 'mfe2',
        publicPath: 'http://localhost:3011/',
    },
    devServer: {
        port: 3011,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'mfe2',
            filename: 'remoteEntry.js',
            exposes: {
                './RoutesMFE2': './src/bootstrap'
            },
            shared: packageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
module.exports = merge(commonConfig, devConfig)