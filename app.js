
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
app.post('/callback', (req, res) => res.sendStatus(200))
app.listen(port)