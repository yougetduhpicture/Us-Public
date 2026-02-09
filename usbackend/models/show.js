const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)
mongoose
  .connect(url)
  .then((result) => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const showSchema = new mongoose.Schema({
  _id: String,
  id: Number,
  tour: String,
  date: String,
  venue: String,
  location: String,
  country: String,
  link: String,
})

showSchema.set('toJSON')

module.exports = mongoose.model('Show', showSchema)
