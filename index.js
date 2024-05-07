const app = require('express')()

app.get('/', (req, res) => {
    res.send('Welcome handyman services')
})

app.listen(80, '0.0.0.0', () => {
    console.log('App running on ', 80)
})