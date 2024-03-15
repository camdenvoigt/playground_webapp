const express = require('express')
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const port = 3000;

// Setup static folder to get public assests from
app.use(express.static(path.join(__dirname, 'dist')));

// Setup webpack for dev
const config = require('../webpack.config.js');
const compiler = webpack(config);
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    writeToDisk: true,
  })
);

// Basic Home Page
app.get('/', (req, res) => {
  let options = {
    root: path.join(__dirname, 'dist', 'html'),
  }
  res.sendFile('home.html', options);
})

app.listen(port, () => {
  console.log(`playground_webapp listening on port ${port}`)
})
