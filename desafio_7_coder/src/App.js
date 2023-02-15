const express = require('express');
const {Server} = require('socket.io');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const productsRoute = require('./routes/products.routes');
const productsDBroute = require('./routes/ProductsDB.routes');
const cartsDBroute = require('./routes/cartsDB.routes');
const Chatroute = require('./routes/chat.routes')
const cardsRoute = require ('./routes/carts.routes');
const viewRoute = require('./routes/views.route');
const {connectionSocket} = require('./utils/soket.io');
const server = express();
mongoose.set('strictQuery',false);

mongoose.connect('mongodb+srv://CoderUser:874@codercluster.haaqxj8.mongodb.net/?retryWrites=true&w=majority',(error)=>{
    if(error){
        console.log("no se puede conectar a la base de datos: "+error)
        process.exit()
    }else{
        console.log('conexion exitosa con mongoose');
    }
})

const httpServer = server.listen(8080, ()=> {
    console.log('Servidor escuchando en puerto 8080')
})


server.engine('handlebars', handlebars.engine());
server.set('views', __dirname + '/views');
server.set('view engine', 'handlebars');

server.use(express.static(__dirname+'/public'));
server.use(express.json())
server.use(express.urlencoded({extended:true}))


server.use("/api/products/", productsRoute);
server.use("/api/carts/", cardsRoute);
server.use("/", viewRoute);
server.use("/api/productsDB/",productsDBroute);
server.use("/api/cartsDB/",cartsDBroute);
server.use("/api/chat/",Chatroute)



connectionSocket (httpServer);
