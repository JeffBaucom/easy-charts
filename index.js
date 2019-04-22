import express from 'express';
import bodyParser from 'body-parser';
import * as path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import connectToDb from './db/connect';
import logger from './core/logger/app-logger';
import config from './core/config/config.dev'
import charts from './routes/charts.route'


const port = config.serverPort;
logger.stream = {
  write: function(message, encoding){
      logger.info(message);
  }
};

connectToDb();
let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(morgan('dev', { 'stream': logger.stream }));
app.use(express.static('./client/build'));

app.use('/charts', charts);

app.get('/test', (req, res) => res.send('test!'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
);
app.listen(port,  () => console.log(`app listening on port ${port}`)
);
