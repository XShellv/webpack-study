var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

let plugins = [
    new HtmlwebpackPlugin({
        title: "webpack-demo",
        template: 'index.html'
    }),
    // new webpack.ProvidePlugin({
    //     $: 'jquery',
    //     jQuery: 'jquery'
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'vendor',
    //     filename: 'vendor.js'
    // }),
    devFlagPlugin
]
process.env.NODE_ENV === "prod" && plugins.push(new BundleAnalyzerPlugin())

module.exports = {
    entry: {
        a: "./main1.js",
        b: "./main2.js",
        // vendor: ['jquery'],
    },
    output: {
        filename: "[name].bundle.js"
    },
    plugins,
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                },
                // vendor: {
                //     name: "vendor",
                //     chunks: "initial",
                // }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                // use: ["style-loader", "css-loader"] // 注意，您必须使用两个加载程序来转换CSS文件。首先是用于读取CSS文件的CSS-loader，然后是用于将标记插入HTML页面的Style-loader<style>
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|gif|svg|png|bmp)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        esModule: false
                    }
                }
            },
        ]
    },
    externals:{
        jquery: 'jQuery'
    }
}