// connection variable required into file
const connection = require("./connection.js");

// helper functions for generating mysql syntax 
const questionMarksString = num => {
  let str = "";

  if (num > 0) {
    str += "?";
  }

  for (let i = 1; i < num; i++) {
    str += ",?";
  }

  return str;
};
// helper functions for generating mysql syntax
const objToSqlString = obj => {
  const arr = [];

  for (let key in obj) {
    let value = obj[key];

    if (Object.hasOwnProperty.call(obj, key)) {
      if (typeof value === "string" && value.indexOf(" ") !== -1) {
        value = `'${value}'`;
      }
      arr.push(`${key}=${value}`);
    }
  }

  return arr.toString();
};
// orm object containing all the sql queries
const orm = {
  // selectAll function to select all from burgers table
    selectAll: (table, cb) => {

        const queryString = `SELECT * FROM ${table};`;

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // insertOne function to create a new burger entry
    insertOne: (table, cols, vals, cb) => {
        
        const queryQuestionMarks = questionMarksString(vals.length);
        
        const queryString = `INSERT INTO ${table} (${cols.toString()}) 
        VALUES (${queryQuestionMarks})`;
        
        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            
            cb(result);
        });
    },
    
    // updateOne function to update burger from not devoured to devoured
    updateOne: (table, objColVals, condition, cb) => {
        
        const objColValsString = objToSqlString(objColVals);
        
        const queryString = `UPDATE ${table} 
        SET ${objColValsString} 
        WHERE ${condition};`;
        
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            
           cb(result);
        });
    }
};
// export orm object
module.exports = orm;
