const UserRepository = require('../repository/user-repository');
const JWT = require("jsonwebtoken");
const { JWT_KEY } = require('../config/server-config');

class UserServices {
    constructor(){
        this.userRepository =new UserRepository();
    }

    async create (data){
        try {
            const response = await this.userRepository.create(data);
            return response;
        } 
        catch (error) {
            console.log("Something wrong in user services layer");
            throw error;
        }
        
    }

    createToken(user) {
        try {
            const token = JWT.sign(user, JWT_KEY, {expiresIn:'1h'})
            return user;
        } 
        catch (error) {
            console.log("Something wrong in token creation");
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = JWT.verify(token, JWT_KEY)
            return user;
        } 
        catch (error) {
            console.log("Something wrong in token verificaton",error);
            throw error;
        }
    }

}

module.exports = UserServices