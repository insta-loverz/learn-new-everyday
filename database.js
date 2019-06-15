const mongoose = require('mongoose');

const url = 'mongodb+srv://instaluv:instawillbedown@cluster0-nezgz.mongodb.net/test?retryWrites=true&w=majority';
let db = null;

async function connectDb() {
  if (db) { return db; }
  // const client = await MongoClient.connect(url, { useNewUrlParser: true });
  // db = client.db();
  // console.log('Db connected');
  await mongoose.connect(url, { useNewUrlParser: true });
  db = mongoose.connection;
  db.on('error', () => 0);
  db.once('open', () => db);
  db.on('connected', () => db);

  // db.exit(0);
  return db;
}

module.exports = connectDb;
