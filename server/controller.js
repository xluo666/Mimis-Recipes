
const db = require('../db');


const signin = (req, res) => {

  const string = `SELECT * FROM account WHERE username = '${req.body.username}'`

  db.query(string)
    .then((res) => {
      let user = res.row[0];
      if(user === undefined) {
        // res.status(404)
        console.log('40444444444')
      } else if(req.body.password !== user.password) {
        // res.status(400)
        console.log('4000000000')
      } else {
        console.log('success111');
      }
    })
}

module.exports = { signin };

