module.exports = {
    mode: 'production',
    entry: './src/style.js',
    output: {
        path: __dirname + '/dist',
        filename: 'style.js',
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
}