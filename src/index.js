const express =  require("express");
const app = express();
const {PORT} = require('../src/config/server-config')

const prepareAndStartServer = async ()=>{

    app.listen(PORT, ()=>{
        console.log(`Server started running at the Port ${PORT}`)
    })
}

prepareAndStartServer();