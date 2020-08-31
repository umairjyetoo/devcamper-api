const express = require('express')
const dotenv = require('dotenv');

//Load env vars
dotenv.config({ path: './config/config.env' })

const app = express()
const PORT = process.env.PORT || 5000

app.use('/api/v1', require('./routes/index'))

app.listen(PORT, (req, res) => {
    console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`)
})