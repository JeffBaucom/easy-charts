import express from 'express';
import bodyParser from 'body-parser';
import * as path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import connectToDb from './db/connect';
import logger from './core/logger/app-logger';
import config from './core/config/config.dev'
import charts from './routes/charts.route'
import users from './routes/users.route'
import { auth } from './auth';


const port = config.serverPort;
logger.stream = {
  write: function(message, encoding){
      logger.info(message);
  }
};

connectToDb();
let app = express();

auth(passport);
app.use(passport.initialize());
// app.use(passport.session());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(morgan('dev', { 'stream': logger.stream }));
app.use(express.static('./client/build'));

app.use('/charts', charts);
app.use('/users', users);

app.use('/auth/google', passport.authenticate('google', {
  scope: ['profile'],
}));

// app.use('/auth/google/callback',
//   passport.authenticate('google', {
//     failureRedirect: '/',
//   }),
//   (req, res) => {}
// );

app.get('/test', (req, res) => res.send('test!'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
);
app.listen(port,  () => console.log(`app listening on port ${port}`)
);
