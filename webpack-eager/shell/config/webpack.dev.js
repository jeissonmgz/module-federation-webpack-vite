const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    output: {
        uniqueName: 'shell',
        publicPath: 'http://localhost:3000/'
    },
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'shell',
            remotes: {
                microFrontendReact: 'microFrontendReact@http://localhost:3010/remoteEntry.js',       
                mfe2: 'mfe2@http://localhost:3011/remoteEntry.js'
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, devConfig)