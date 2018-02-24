const path = require('path')
const express = require('express')
const app = express()

const basePath = 'node_modules/@lunchbox/landing/dist'
const publicPath = path.resolve(__dirname, basePath)

app.use(express.static(publicPath))

app.use('/*', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'))
})

const listener = app.listen(process.env.PORT, () => {
  console.log('Listening on port ' + listener.address().port)
})
