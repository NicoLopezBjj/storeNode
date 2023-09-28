const express=require('express')
require('dotenv').config()
require('express-async-errors')

const app = express()
const connectDB=require('./db/conexion')
const productsRouter=require('./routes/products')
const Products = require('./models/product')

const unPuerto= process.env.PUERTO

const conexion = async () =>{
    try {
        // await connectDB(process.env.MONGO_URL)
        app.listen(unPuerto,console.log('servidor ejecutandose'))
    }catch(error){
        console.log(error)
    }
}

app.set('view engine','ejs')

const usuario={
    nombre:Nico,
    apellido: Lopez
}
app.get('/', (req,res)=>{
    res.render('home',{usuario:usuario})
})

app.use('/shop',productsRouter)

conexion()