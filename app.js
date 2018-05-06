let express = require('express');
let app = express();


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});
app.get('/build-price', (req, res) => {
  res.render('build-price.ejs');
});
app.get('/build-choose', (req, res) => {
  res.render('build-choose.ejs');
});
app.get('/map', (req, res) => {
  res.render('map.ejs');
});
app.get('/checkout', (req, res) => {
  res.render('checkout.ejs');
});
app.get('/purchased', (req, res) => {
  res.render('purchased.ejs');
});

app.listen(process.env.PORT || 3000, ()=> {
  console.log('Server is Running');
});