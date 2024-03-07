const express = require('express')
const path = require('path')
const app = express()
const port = 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  let options = {
    root: path.join(__dirname, 'dist', 'html'),
  }
  res.sendFile('home.html', options);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})