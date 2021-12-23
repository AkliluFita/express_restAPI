import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
// Import Route
import postRoute from './routes/posts.js'
import cors from 'cors'


// app config
const app = express()
dotenv.config();
const port = process.env.PORT || 8001


// middleware for cors
app.use(cors())


// Middleware for data parser
app.use(express.json());


// route(API end point)
app.get('/', (req, res) => {
    res.send('we are the home')
})


// Middleware for post route
app.use('/post', postRoute)

// connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => console.log('the DB is connected'))

// listen to the server
app.listen(port, console.log(`the server connected @${port}`))

