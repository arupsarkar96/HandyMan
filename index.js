const express = require('express')
const app = express()
var compression = require('compression')
var morgan = require('morgan')

app.use(morgan('short'))
app.use(compression())
app.use(express.static("./public"))


// app.get('/', (req, res) => {
//     res.render('index')
// })

// app.get('/about', (req, res) => {
//     res.render('about')
// })

// app.get('/service', (req, res) => {
//     res.render('service')
// })

// app.get('/contact', (req, res) => {
//     res.render('contact')
// })


app.listen(8080, '0.0.0.0', () => {
    console.log('App running on ', 8080)
})