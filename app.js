const express = require ('express')
const app = express()
const path = require('path')

app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'), () => console.log("Server iniciado en el http://localhost:" + app.get('port')));

app.use(express.static(path.join(__dirname, './public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/productos', require('./routes/products'));
