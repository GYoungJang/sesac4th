const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use(cookieParser('1234'));

const config = {
  maxAge : 60*60*24*1000,
  //httpOnly: true,
  signed: true
}

app.get('/cookie', (req, res) => {
  res.cookie('popUp', '1234', config);
  res.render('modal1.ejs');
});



// app.use(session({
//   secret : 'secret key',
//   resave : false,
//   saveUninitialized : false
// }) )

app.listen( port, () => {
  console.log('Server Port : ', port);
})