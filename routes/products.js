const express = require('express')
const router=express.routes()
const {getAllProduct,getAllProductStatic}=require('../controllers/products')


router.route('/').get(getAllProduct)
// localhost:3600/shop
router.route('/static').get(getAllProductStatic)
// localhost:3600/shop/static

module.exports=router