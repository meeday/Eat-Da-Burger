const connection = require("./connection.js");

const printQuestionMarks = num => {
  const arr = [];
  for (i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

const objToSql = ob => {
  const arr = [];
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

const orm = {
  selectAll: (tableInput, cb) => {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;

      }
      cb(result);

    });

  },

  insertOne: (tableInput, cols, vals, cb) => {
    const QuestionMarks = printQuestionMarks(vals.length);
    
    const queryString = `INSERT INTO ${tableInput} (${cols.toString()}) VALUES (${QuestionMarks})`;
  
    console.log(queryString);
    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;

      }
      cb(result);

    });
  },

  updateOne: (tableInput, objColVals, condition, cb) => {
    const queryString = `UPDATE ${tableInput} SET ${objToSql(objColVals)} WHERE ${condition}`
   
    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;

      }
      cb(result);

    });
  },
};

module.exports = orm;