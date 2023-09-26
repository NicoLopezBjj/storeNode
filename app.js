const express=require('express')
require('dotenv').config()
require('express-async-errors')

const app = express()
const connectDB=require('./db/conexion')
const productsRouter=require('./routes/products')

const unPuerto= process.env.PUERTO

const conexion = async () =>{
    try {
        // await connectDB(process.env.MONGO_URL)
        app.listen(unPuerto,console.log('servidor ejecutandose'))
    }catch(error){
        console.log(error)
    }
}

app.get('/', (req,res)=>{
    res.send('hola mundo')
})

app.use('/shop',productsRouter)

conexion()