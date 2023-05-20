const validateUserAuth = (req,res)=>{
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

module.exports = {
    validateUserAuth
}