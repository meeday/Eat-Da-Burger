
const connection = require("./connection.js");


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

const orm = {
    selectAll: (table, cb) => {

        const queryString = `SELECT * FROM ${table};`;

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    
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

module.exports = orm;
