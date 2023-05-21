const express =  require("express");
const BodyParser = require("body-parser");
const apiRoutes = require('./routes/index') 
const {PORT} = require('../src/config/server-config');

const db  = require('./models/index');
const {User,Role} = require('./models/index')
const app = express();  

const prepareAndStartServer = async ()=>{

    app.use(BodyParser.json());
    app.use(BodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(PORT, async()=>{
        console.log(`Server started running at the Port ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true})
        }

        // const u1 = await User.findByPk(2);
        // const r1 = await Role.findByPk(2);

        // // u1.addRole(r1);
        // const response = await u1.getRoles();
        // console.log(response)

    })
}

prepareAndStartServer();