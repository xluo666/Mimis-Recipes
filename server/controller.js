
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

}

const signup = (req, res) => {
  const str = `INSERT INTO account (username, password) values (?, ?)`;

  db.query(str, [req.body.params.username, req.body.params.password], (err,data) => {
    if(err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
}

module.exports = { signin, signup };

