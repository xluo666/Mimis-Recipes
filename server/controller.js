
const db = require('../db');

const signin = (params, callback) => {
  const string = "select * from mimi"
  db.query(string, [params.name, params.description], (error, data) => {
    if (error) {
      callback(error, null);
    } else {
      callback (null, data);
    }
  })
}

const signup = (params, callback) => {
  const string = "INSERT INTO mimi (name, description) values (?,?)"
  db.query(string, [params.name, params.description], (error,data)) => {
    if (error) {
      callback(error, null);
    } else {
      callback (null, data);
    }
  }
}

module.exports = {signup, signin};