import express from 'express';
import bodyParser from 'body-parser';

const port = process.env.PORT || 8080;
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/test', function (req, res) {
  return res.send('test!');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});
app.listen(port, function () {
  console.log(`app listening on port ${port}`);
});
