module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module:{
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules|bower_components/,
        loader:"babel"
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test:/\.css$/,
        loader:"style!css"
      },
      {
        test:/\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.(woff|eot|ttf|svg|gif|png|ico|woff(2))(\?.*)?$/,
        loader: 'url-loader?limit=1000000'
      },
      {
        include: /\.json/, loaders:["json-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    contentBase: "./"
  }
};
