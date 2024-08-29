/*-------- Required dependencies ---------*/

const express = require('express')
const cors = require('cors')
const logger = require('morgan')
require('dotenv').config()
const plantsRouter = require('./routes/plants')

/*-------- Create Express App ---------*/


const PORT = 3000

const app = express()

/*-------- Middleware Pipeline ---------*/

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

/*-------- Routes ---------*/

app.get('/', function(req, res) {
    res.send({msg: 'server running'})
})

app.use('/plants', plantsRouter)

/*-------- app.listen method ---------*/

app.listen(PORT, function () {
    console.log(`server running on ${PORT}`)
})