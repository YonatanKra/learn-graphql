const users = require('./users');
const hobbies = require('./hobbies');

let root = {
    user: users.user,
    login: users.login,
    signup: users.signup,
    hobby: hobbies.hobby
};

module.exports = root;