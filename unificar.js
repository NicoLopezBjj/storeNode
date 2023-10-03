require('dotenv').config()

const Product = require('./models/product')

const connectDB = require('./db/conexion')

const jsonProduct = require('./products.json')

const iniciar= async () =>{
    try{
        await connectDB(process.env.MONGO_URL)
        await Product.deleteMany()
        await Product.create(jsonProduct)
        console.log('cambios realizados')
    }catch(error){
        console.log(error)
    }
}

iniciar()