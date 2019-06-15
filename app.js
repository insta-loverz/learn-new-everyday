const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const BodyParser = require('body-parser');

const cors = require('cors');
const request = require('request');
const connectDb = require('./database');

const userRouter = require('./routes/user.route')();
const instaRouter = require('./routes/insta.route')();
// eslint-disable-next-line import/order
const cron = require('node-cron');

const app = express();
app.use(morgan('tiny'));
app.use(BodyParser.json());
app.use(cors());
app.use(BodyParser.urlencoded({ extended: true }));
dotenv.config();

const port = process.env.PORT || 4000;

(async () => {
  await connectDb();
})();

app.use('/users', userRouter);
app.use('/insta', instaRouter);

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/ping', async (req, res) => {
  console.log('running a task every two minute');
  res.send('pong');
});

cron.schedule('*/2 * * * * ', () => {
  request.get('http://localhost:4000/ping', () => 1);
});

app.listen(port, () => console.log(`Example app listening on port ${chalk.red(port)}!`));