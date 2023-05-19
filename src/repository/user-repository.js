const {User} = require('../models/index');

class UserRepository {

    async create (data) {
        try {
            const user = await User.create(data);
            return user;
        } 
        catch (error) {
            console.log("Something wrong in user repo layer")
            throw error;
        }
    }

    async destroy (id){
        try {
            await User.findByPk(id);
            return true;    
        } 
        catch (error) {
            console.log("Something wrong in user repo layer")
            throw error;
        }
    }
}

module.exports = UserRepository;