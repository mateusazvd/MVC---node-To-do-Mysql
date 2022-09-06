const express = require('express')
const exphbs = require('express-handlebars')

//setup express
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

//setup handlebars

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Conexão com o banco de dados 
const conn = require('./db/conn')

//Models
const Task = require('./models/Task')

//Rotas
const taskRoutes = require('./routes/taskRoutes')
app.use('/tasks', taskRoutes)

conn.sync().then(()=>{
    app.listen(3000)
}).catch((err)=>console.log(err))