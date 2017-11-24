const resolve = require('path').resolve;
const webpack = require('webpack');
const url = require('url');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin");
const publicPath = '';

module.exports = (options = {}) => ({
    entry: {
        vendor: ['./src/vendor.js', './src/config/config-' + options.config + '.js'],
        index: './src/main.js',
    },
    output: {
        path: resolve(__dirname, 'dist/' + options.config),
        filename: options.dev ? '[name].js' : '[name].js?v=[chunkhash]',
        chunkFilename: '[id].js?v=[chunkhash]',
        publicPath: options.dev ? '/assets/' : publicPath
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
                include: [
                    resolve('src'),
                    resolve('test'),
                    resolve('node_modules/element-ui/packages')
                ]
            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                minimize: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1,
                        name: '[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(htm|html)$/i,
                use: [{
                    loader: 'html-withimg-loader',
                }]
            }
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/run.html'
        }),
        new extractTextPlugin({
            filename: '[name].css?v=[hash]',
            ignoreOrder: true
        })
    ],
    resolve: {
        alias: {
            '~': resolve(__dirname, 'src'),
            'vue': 'vue/dist/vue.js'
        }
    },
    devServer: {
        host: '127.0.0.1',
        port: 8011,
        historyApiFallback: {
            index: url.parse(options.dev ? '/assets/' : publicPath).pathname
        }
    }, devtool: options.dev ? '#eval-source-map' : '#cheap-module-source-map'
});
