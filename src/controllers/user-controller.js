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
        return res.status(error.StatusCode).json({
            data:{},
            success: false,
            err:error.explanation,
            message: error.message
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

const isAuthenticated = async (req,res)=>{
    try {
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            success:true,
            err:{},
            data: response,
            message : "User is authenticated and token is valid"
        })
    } 
    catch (error) {
        console.log("Something wrong in user controller authentication layer");
        return res.status(400).json({
            data:{},
            success: false,
            err:error,
            message: "Error in user signIn"
        })
    }
}

const isAdmin = async (req,res)=>{
    try {
        const response = await userService.isAdmin(req.body.id);
        return res.status(200).json({
            success:true,
            err:{},
            data: response,
            message : "User authorised for admin role or not is successfully fetched"
        })
    } 
    catch (error) {
        console.log("Something wrong in user controller IsAdmin layer");
        return res.status(400).json({
            data:{},
            success: false,
            err:error,
            message: "User is not an Admin"
        })
    }
}

module.exports = {
    create,
    signIn,
    isAuthenticated,
    isAdmin      
}