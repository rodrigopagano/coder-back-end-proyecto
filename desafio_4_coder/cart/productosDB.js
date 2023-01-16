const productos = require('./productos')

module.exports = class productosDB {
    constructor(){
        this.contID = productos.length
        this.products = productos
    }

    getallProducts (){
        return this.products
    }

    getProductByID(id){
        return this.products.find(obj => obj.id === parseInt(id))
    }

    PostProduct({title, price, thumbnail}){
        this.contID++
        const newProduct = {id: this.contID, title, price: Number(price),thumbnail}
        this.products.push(newProduct)
        return newProduct
    }

    putProduct({id, title, price, thumbnail}){
        const index = this.products.findIndex(product => product.id === parseInt(id))
        if(index < 0) return null
        this.products.splice(index,1, updateProduct)
        return updateProduct
    }

    deleteProduct (id){
        const index = this.products.findIndex(product => product.id === parseInt(id))
        if(index < 0) return null
        this.products.splice(index,1)
        return id
    }
};

