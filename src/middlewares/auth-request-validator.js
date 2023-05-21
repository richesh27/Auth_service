const validateUserAuth = (req,res,next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            success: false,
            data: {},
            message: "something went wrong",
            err: 'Email or password missing in the process'
        })
    }
    next();
}

const validateUserAdmin = (req,res,next)=>{
    if(!req.body.id ){
        return res.status(400).json({
            success: false,
            data: {},
            message: "something went wrong",
            err: 'ID missing'
        })
    }
    next();
}

module.exports = {
    validateUserAuth,
    validateUserAdmin
}