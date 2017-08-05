const values = require('../helper');
let database = require('./base-db');
const hobbies = require('./hobbies');

function user({id}) {
    let users = [];
    if (id) {
        if (database.users[id]) {
            users.push(database.users[id]);
        }
    }
    else {
        users = values(database.users);
    }

    let result = [];
    for (let user of users) {
        let cloned = Object.assign({}, user);
        cloned.hobbies = user.hobbies.map(name => hobbies.hobby({name}));
        result.push(cloned);
    }

    return result;
}

function login({userName, password}) {
    let allUsers = values(database.users);
    return allUsers.some(user => user.name === userName && user.password === password);
}

function signup({userName, password}) {
    if (root.login({userName, password})) {
        return `user '${userName}' already exists`;
    }
    else {
        let id = `${userName}_${password}`;
        database.users[id] = {
            name: userName,
            password,
            id
        };
        return `user '${userName}' successfully sign up :-)`;
    }
}

module.exports = {
    user, login, signup
};