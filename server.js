const path = require('path')
const express = require('express')
const compression = require('compression')
const app = express()

const basePath = 'node_modules/@lunchbox/landing/dist'
const publicPath = path.resolve(__dirname, basePath)

const redirect = (req, res, next) => {
  const protoHeader = req.headers['x-forwarded-proto']
  const protoArray = protoHeader.split(',')
  const originalProtocol = protoArray[0]

  if (originalProtocol === 'http')
    res.redirect(301, `https://${req.headers.host}${req.url}`)
  else next()
}

const fallback = (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'))
}

app.use(redirect)
app.use(compression())
app.use(express.static(publicPath))
app.use(fallback)

app.listen(process.env.PORT)
