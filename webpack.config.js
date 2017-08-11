module.exports = {
    entry: "./js/entry.js",
    output: {
        path: __dirname,
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.min.js'
        }
    }
};