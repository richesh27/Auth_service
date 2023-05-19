const express =  require("express");
const BodyParser = require("body-parser");
const apiRoutes = require('./routes/index') 
const {PORT} = require('../src/config/server-config');

const app = express();  

const prepareAndStartServer = async ()=>{

    app.use(BodyParser.json());
    app.use(BodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(PORT, ()=>{
        console.log(`Server started running at the Port ${PORT}`)
    })
}

prepareAndStartServer();