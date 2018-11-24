const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpack = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const PurifyCSS = require('purifycss-webpack');
const glob = require('glob-all');
const path = require('path');
const fse = require('fs-extra');

const baseConfig = {
    devtool: 'inline-source-map',
    entry: {
        vendor: [],
        common: './app/common/Common.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash:5].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devServer: {
        port: 3000,
        /*proxy: {
            '/': {
                target: 'http://localhost:3002',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {
                    '': '/api/'
                }
            }
        },*/
        hot: true,
        hotOnly: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.less$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: {
                        loader: 'style-loader',
                        options: {
                            singleton: true
                        }
                    },
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                                localIdentName: '[path][name]_[local]_[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: [
                                    require('autoprefixer')(),
                                    require('cssnano')()
                                ]
                            }
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 10,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    // useRelativePath: true,
                                    // publicPath: '../img',
                                    outputPath: './dist-ts/img',
                                }
                            }
                        }
                    },
                    {
                        loader: 'img-loader'
                    }
                ]
            },
            {
                test: /\.(eot|woff2|woff|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 50,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    // useRelativePath: true,
                                    // publicPath: '../fonts',
                                    outputPath: './dist-ts/fonts',
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new ExtractTextWebpackPlugin({
            filename: 'css/[name].[hash].css'                   // 输出路径
        }),

        new CleanWebpack(path.resolve(__dirname, 'dist')),

        new webpack.optimize.CommonsChunkPlugin({               // 提取三方生成的代码, 包括模块代码
            names: ['vendor'],
            minChunks: Infinity
        }),

        new PurifyCSS({
            paths: glob.sync([
                path.join(__dirname, './app/*.html'),
                path.join(__dirname, './app/*.js')
            ]),
        }),

        new webpack.optimize.UglifyJsPlugin()
    ]
};

const generatePage = function ({
                                   title = '',
                                   entry = '',
                                   template = './app/index.html',
                                   name = '',
                                   chunks = []
                               } = {}) {
    return {
        entry,
        plugins: [
            new HtmlWebpackPlugin({
                chunks,
                template,
                title,
                filename: name + '.html'
            })
        ]
    }
};

const appPaths = fse.readdirSync(path.resolve(__dirname, 'app', 'pages'));
let appItemPath = '';
let myPages = [];
let appItemHtmlTemplate = '';
appPaths.map(function (item) {
    appItemPath = path.resolve(__dirname, 'app', 'pages', item, 'index.ts');
    appItemHtmlTemplate = path.resolve(__dirname, 'app', 'pages', item, 'index.html');
    if(fse.pathExistsSync(appItemPath)) {
        myPages.push(generatePage({
            title: item,
            entry: {
                [item]: `./app/pages/${item}/index.ts`
            },
            name: item,
            chunks: [item, 'vendor', 'common'],
            template: fse.pathExistsSync(appItemHtmlTemplate) ? path.resolve(__dirname, 'app', 'pages', item, 'index.html') : './app/index.html',
        }))
    }
});

module.exports = merge([baseConfig].concat(myPages));