module.exports = {
    entry: "./index.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                loader: "style-loader!css-loader"
            },
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            },
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel', // 'babel-loader' is also a legal name to reference
              query: {
                presets: ['es2015']
              }
            },
            {
              test: /\.(woff|png|jpg|gif)$/,
              loader: 'url-loader?limit=10000&name=[path][name].[ext]'
            }


        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
