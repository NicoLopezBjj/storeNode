const express=require('express')
require('dotenv').config()

const app = express()
const connectDB=require('./db/conexion')

const unPuerto= process.env.PUERTO

const conexion = async () =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(unPuerto,console.log('servidor ejecutandose'))
    }catch(error){
        console.log(error)
    }
}


app.get('/', (req,res)=>{
    res.send('hola mundo')
})

conexion()