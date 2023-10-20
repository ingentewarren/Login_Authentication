const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv').config()
const port = 8000
const app = express()

mongoose.connect('mongodb+srv://ingentewarren2:oZmz8afvCmXQxYn3@cluster0.qqyfdeq.mongodb.net/')
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Failed to connect', err))


app.use(express.json())
app.use('/', require('./router/authRouter'))
app.listen(port, () => console.log(`Server is running on ${port}`))