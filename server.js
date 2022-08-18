const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const { signin, signup } = require('./server/controller.js');


app.use("/", express.static('./client/dist'));
app.use("/signin", express.static('./client/dist'));


// app.post('/signin', (req, res) => {
//   signin(req.body.params.username, (err,data) => {
//     if(err) {
//       res.send(err);
//     } else {
//       res.send(data);
//     }
//   })
// });
app.post('/signin', signin)

// app.post('/signin', (req, res) => {
//   signup(req.body.params, (err, data) => {
//     if(err) {
//       res.send(err)
//     } else {
//       res.send(data)
//     }
//   })
// });



app.listen(port,() => {
  console.log('Server is running at http://localhost' + port);
});

