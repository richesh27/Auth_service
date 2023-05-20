const UserRepository = require('../repository/user-repository');
const JWT = require("jsonwebtoken");
const { JWT_KEY } = require('../config/server-config');
const bcrypt  = require("bcrypt")

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

    async signIn(email,plainPassword){
        try {
            // step 1 : fetch the user using the email
            const user = await this.userRepository.getByEmail(email);
            //step 2 : compare incoming plain password with the encrypted password
            const passwordMatch = await this.checkPassword(plainPassword,user.password);
            if (!passwordMatch){
                console.log("Password did not matched");
                throw { error: "Incorrect password"};
            }
            //step 3 : if password matched then create a token and send it to the user
            const newJWT = await this.createToken({email:user.email , id:user.id});
            return newJWT;
        } 
        catch (error) {
            console.log("Something wrong in user services layer");
            throw error;
        }
    }

    createToken(user) {
        try {
            const token = JWT.sign(user, JWT_KEY, {expiresIn:'1h'})
            return token;
        } 
        catch (error) {
            console.log("Something wrong in token creation");
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = JWT.verify(token, JWT_KEY)
            return response;
        } 
        catch (error) {
            console.log("Something wrong in token verificaton",error);
            throw error;
        }
    }

    checkPassword( plainPassword, encryptedPassword){
        try {
            return bcrypt.compareSync(plainPassword,encryptedPassword);
        } 
        catch (error) {
            console.log("Something wrong in password checking",error);
            throw error;
        }
    }

}

module.exports = UserServices