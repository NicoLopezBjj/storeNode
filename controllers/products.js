const Product = require('../models/product')

const getAllProduct= async (req,res)=>{
    const products = await Product.find(req.query)
    res.status(200).json(products)
}

const getAllProductStatic= async (req,res)=>{
    const products= await Product.find({featured:true})
    res.status(200).json({products,numProducts:products.length})
// para trabajar y buscar desde el back propiedades o campos de la base de datos
// ejemplo estatico 
}

module.exports={
    getAllProduct,
    getAllProductStatic
}
