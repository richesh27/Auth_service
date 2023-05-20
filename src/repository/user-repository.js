const {User} = require('../models/index');
const user = require('../models/user');

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

    async get (userId){
        try {
            const user = await User.findByPk(userId, {
                attributes : ['email', 'id']
            })    
        } 
        catch (error) {
            
        }
    }
}

module.exports = UserRepository;