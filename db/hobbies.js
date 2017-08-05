const values = require('../helper');
let database = require('./base-db');

function hobby({id, name}) {
    let allHobbies = values(database.hobbies);
    if (id || name)
        return allHobbies.find(hobby => hobby.id === id || hobby.name === name);
    return allHobbies;
}

module.exports = {
    hobby
};