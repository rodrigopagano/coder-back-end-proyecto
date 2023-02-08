const cartsModel = require('../dao/models/carts.model')
const productModel = require('../dao/models/products.model')

class CartManagerDB {
	constructor() {
		this.carts = []
	}

    CreateCarts = async (cart)=>{
        try{  
            const Createcart = await cartsModel.create(cart);
            return Createcart

         } catch (error) {
           return {msg:"Error al crear Carritos"}
           
         }   
    } 	

	getCarts = async (id) => {
        try{  
            const cart = await cartsModel.findById(id);
            return cart

        } catch (error) {
           return {msg:"Error Al Mostrar Carrito"}
         }   
	}

    addProductToCarts = async (carts, product) => {

    }  
}

module.exports = CartManagerDB