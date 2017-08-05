module.exports = function (object) {
    let result = [];
    for (let key of Object.keys(object)) {
        result.push(object[key]);
    }

    return result;
};
