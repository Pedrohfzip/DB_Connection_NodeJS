const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const port = 4000;


app.get('/', (req, res) => {
    res.send('Ola mundo!')
})

app.listen(port, () => {
    console.log("Servidor iniciado!");
})