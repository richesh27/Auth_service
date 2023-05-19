const UserRepository = require('../repository/user-repository');

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
}

module.exports = UserServices