const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express()
const connectDB = require('./database/db')
const projectRoute = require('./routes/projects')

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use('/api/projects', projectRoute)

// port
const port = process.env.PORT || 1337
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
// server

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`server has started on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()