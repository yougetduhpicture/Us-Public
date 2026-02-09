require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'build')))

const Show = require('./models/show')

//GET

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/build', 'index.html'))
})

app.get('/api/shows', (request, response) => {
  Show.find({}).then((shows) => {
    response.json(shows)
  })
})


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
