const express = require("express")
const app = express()
const hbs = require("hbs")

// middleware, agregamos permisos para usar la carpeta public
app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials', function (err){})
app.set('view engine', 'hbs')

// get para mostrar la pagina principal ("home")
app.get('/', function (req, res) {
    res.render("home")
})

app.get('/contacto', function (req, res) {
    res.render("contacto", {email:"mail@mymail.com", tel: 5527729918})
})

app.listen(3000)