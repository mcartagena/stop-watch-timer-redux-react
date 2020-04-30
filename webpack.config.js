var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //  Entry point of webpack
    entry: './src/app.js',    
    output: {
        // Need to be resolved to absolute path
        path: path.resolve(__dirname, 'dist'),
        // bundled/compiled file name  
        filename: './bundle.js',
        // For webpack dev server to identify the full path.                
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['es2015'] }
                    }
                ]
            },
            { test: /\.(css)$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    mode: 'development',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'  // we are providing our index.html which has all our code.
        })
    ]
}