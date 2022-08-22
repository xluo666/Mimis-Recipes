const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const { signin, signup } = require('./server/controller.js');


app.use("/", express.static('./client/dist'));
app.use("/signin", express.static('./client/dist'));


app.post('/signin', signin);

app.post('/signup', signup);




app.listen(port,() => {
  console.log('Server is running at http://localhost' + port);
});

