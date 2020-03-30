module.exports = {
    entry: "./main.js",
    output: {
        filename: "bundle.js"
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
    }
}