module.exports = {
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		path: __dirname + '/public/',
		publicPath: 'public/',
		filename: 'build.js'
	},
	module: {
		loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
	},
	babel: {
		presets: ['es2015', 'react', 'stage-2'],
		plugins: ['transform-runtime']
	}
};
