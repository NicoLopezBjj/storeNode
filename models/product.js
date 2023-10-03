const mongoose= require ('mongoose')
const productsSchema= new mongoose.Schema({
    name:{
        type: String,
        required:[true,'nombre del producto']
    },
    price:{
        type:Number,
        required:[true,'precio del producot']
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:['ikea','liddy','soniac','easy'],
            message:'{value} no tiene stock'
        }
    },
    img:{
        type:String
    }
})    

module.exports=mongoose.model('product',productsSchema)