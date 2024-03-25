const dotenv = require('dotenv');
const mongoose = require('mongoose');

process.on('uncaughtException', err => {
  console.log(err);
  console.log(err.name, err.message);
  console.log('UNHANDEL REJECTION!💥Shutting down...');
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = require('./app');

// const DB = process.env.DATABASE_LOCAL_URL;
const DB = process.env.DATABASE_ATLAS_URL.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('DB connection successful'));

const port = 3000;
const server = app.listen(port, 'localhost', () => {
  // custom console
  // eslint-disable-next-line no-console
  console.log('App running on port 3000....');
});
process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('UNHANDEL REJECTION!💥Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
