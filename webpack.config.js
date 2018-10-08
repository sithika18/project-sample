var path = require("path")
module.exports = [{
    context: __dirname,
    entry: {
        server_bundle: './Routes/ServerEntry.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            'node_modules'
        ]
    },
    target:"node"
}];

