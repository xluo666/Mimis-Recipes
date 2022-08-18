
const db = require('../db');


const signin = (req, res) => {

  const string = `SELECT * FROM account WHERE username = (?)`

  db.query(string, req.body.params.username, (err, data) => {
    if(err) {
      res.send(err);
    } else {
      let user = data[0];
      if(user === undefined) {
        res.status(404).send('Invalid email or password');
      } else if(req.body.params.password !== user.password) {
        res.status(404).send('Invalid email or password');
      } else {
        res.send(data);
      }
    }
  })
    // .then((data) => {
    //   let user = data.row[0];
    //   if(user === undefined) {
    //     res.status(404)
    //   } else if(req.body.params.password !== user.password) {
    //     res.status(400)
    //   }
    //   else {
    //     res.send(data)
    //   }
    //   res.send(data);
    // })
    // .catch((err) => {
    //   res.send(err);
    // })
}

// const signin = (username, callback) => {

//   const str = `SELECT * FROM account WHERE username = (?);`;

//   db.query(str, username, (err, data) => {
//     if(err) {
//       callback(err, null)
//     } else {
//       callback(null, data)
//     }
//   })
// }

const signup = (params, callback) => {
  const str = `INSERT INTO account (username, password) values (?, ?)`;

  db.query(str, [params.username, params.password], (err,data) => {
    if(err) {
      callback(err, null)
    } else {
      callback(null, data);
    }
  })
}

module.exports = { signin, signup };

