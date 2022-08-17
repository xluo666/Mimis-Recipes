
const db = require('../db');


const signin = (req, res) => {
  const string = `SELECT * FROM account WHERE username = '${req.body.username}'`
  db.query(string)
    .then((data) => {
      let user = data.row[0];
      if(user === undefined) {
        res.status(404).send('user not found');
      } else if(req.body.password !== user.password) {
        res.status(400).send('invalid password');
      } else {
        console.log('success');
      }
    })
}

module.exports = { signin };

