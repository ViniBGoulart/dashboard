const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.json())
app.use(cors())

app.get('/overview', function(req, res) {
    res.render('pages/overview');
})

//make routes API

app.listen(5500, () => console.log('rodando na porta 5500'))