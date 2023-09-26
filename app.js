const express=require('express')
require('dotenv').config()

const app = express()

const unPuerto= process.env.PUERTO

app.get('/', (req,res)=>{
    res.send('hola mundo')
})

app.listen(unPuerto) 