const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    code:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    status:{
       type:Boolean
    },
    stock:{
        type:Number,
        default: 0
    },
    category:{
        type:String,
        require:true,
    },
    thumbnail:{
        type:String
    }


})

const productModel = mongoose.model('products', productSchema);

module.exports = productModel