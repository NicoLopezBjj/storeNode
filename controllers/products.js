const Product = require('../models/product')

const getAllProduct=(req,res)=>{

}

const getAllProductStatic= async (req,res)=>{
    const products= await Product.find()
    res.status(200).json({products})
}

module.exports={
    getAllProduct,
    getAllProductStatic
}
