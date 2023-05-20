const UserService = require('../services/user-services')

const userService = new UserService();

const create = async (req,res)=>{
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(200).json({
            data:response,
            success: true,
            err: {},
            message : "Successfully created a user"
        })
    } 
    catch (error) {
        console.log("Something wrong in user controller layer");
        return res.status(400).json({
            data:{},
            success: false,
            err:error,
            message: "Error in creating user"
        })
    }
}

const signIn = async (req,res) =>{
    try {
        const response = await userService.signIn(req.body.email,req.body.password);
        return res.status(200).json({
            data:response,
            success: true,
            err: {},
            message : "Successfully signed in as a user"
        })
    } 
    catch (error) {
        console.log("Something wrong in user controller signIN layer");
        return res.status(400).json({
            data:{},
            success: false,
            err:error,
            message: "Error in user signIn"
        })
    }
}

module.exports = {
    create,
    signIn
}