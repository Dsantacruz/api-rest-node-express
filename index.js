'use strict'
//Nodemon escucha cualquier cambio y lo refleja en el navegador (como livereload)
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/hola/:name', (req, res) => {
	res.send({ message: `Hola ${req.params.name}!` })
})

app.listen(port, () => {
	console.log(`API REST corriendo en http://localhost:${port}`)
})