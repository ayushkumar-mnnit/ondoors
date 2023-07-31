
// this file is our express server :



const connectToMongo=require('./db')
const express = require('express')

connectToMongo()

const app = express()
const port = 8000




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})