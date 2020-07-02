// Require orm file
const orm = require("../config/orm.js");
// burger object created
const burger = {
    selectAll: cb => {
        orm.selectAll("burgers", res => {
            cb(res);
        });
    },
    // The variables cols and vals are arrays
    insertOne: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, res => {
            cb(res);
        });
    },
    // The objColVals is an object specifying columns as object keys with associated values
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, res => {
            cb(res);
        });
    }
};
// export burger object
module.exports = burger;