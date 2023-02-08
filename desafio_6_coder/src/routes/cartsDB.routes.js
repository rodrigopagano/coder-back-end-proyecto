const {Router} = require('express');
const cartsControllerBd = require('../controller/cartsDB.controller')


const router =  Router();

router.post('/', cartsControllerBd.createCarts)
router.get('/:cid', cartsControllerBd.bdgetCartId)
router.post('/:cid/product/:pid', cartsControllerBd.addProductToCart);


module.exports = router;