const express = require('express')
const router=express.routes()
const {getAllProduct,getAllProductStatic, getAllIkea}=require('../controllers/products')


router.route('/').get(getAllProduct)
// localhost:3600/shop
router.route('/static').get(getAllProductStatic)
// localhost:3600/shop/static
router.route('/ikea').get(getAllIkea)

module.exports=router