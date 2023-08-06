
// this file is our express server :



const connectToMongo=require('./db')
const express = require('express')

connectToMongo()

const app = express()
const port = 8000


app.use(express.json())

// available routes

app.use('/api/auth',require('./routes/auth'))



app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})