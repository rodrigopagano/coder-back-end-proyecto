const productsRouter = require('express').Router()
const productosDB = require('../../cart/productosDB')
const productsDB = new productosDB()

productsRouter.get('/',getallProducts)
productsRouter.get('/:id',getProductByID)
productsRouter.post('/',validateProduct,postProduct)
productsRouter.put('/:id',validateProduct,putProduct)
productsRouter.delete('/:id',deleteProduct)

function getallProducts(req, res){
    res.json(productosDB,getallProducts())
}

function getProductByID(req, res){
    const {id} = req.params
    const product = productosDB.getProductByID(id)
    if(!product) return res.json({error:'producto no encontrado'})
    res.json(product)
}

function postProduct(req, res){
    const {title, price, thumbnail} = req.body
    const newProduct = productsDB.PostProduct({title, price, thumbnail})
    res.json(newProduct)
}

function putProduct(req, res){
    const {id} = req.params
    const {title, price, thumbnail} = req.body
    const updateProduct = productsDB.putProduct({id,title,price,thumbnail})
    if(!updateProduct) return res.json({error:'producto no encontrado para editar'})
    res.send(updateProduct)
}

function deleteProduct (req, res){
    const {id} = req.params
    const deletedID = productsDB.deleteProduct(id)
    if (!deletedID) return res.json({error:'producto no encontrado para eliminar'})
    res.json({id})
}

function validateProduct (req, res, next){
    const {title, price, thumbnail} = req.body
    if (!title || !price || !thumbnail || !title.trim() || !thumbnail.trim()) return res.json({error:'faltan datos del producto'})
    if (isNaN(price)) return res.json({error:'la URL de la foto debe iniciar con http'})
    next()
}

module.exports = productsRouter