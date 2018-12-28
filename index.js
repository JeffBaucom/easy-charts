import express from 'express';
import bodyParser from 'body-parser';

const port = 8000;
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.listen(port, function() {
  console.log(`app listening on port ${port}`);
});
