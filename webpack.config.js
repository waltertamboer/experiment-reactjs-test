var config = {
    entry: './jsx/main.js',
    output: {
        contentBase: './public/',
        path: './',
        filename: 'js/index.js',
    },
    devServer: {
        contentBase: "./public/",
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: [
                        'es2015',
                        'react'
                    ]
                }
            }
        ]
    }
};

module.exports = config;
