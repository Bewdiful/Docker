import express from 'express';
import connectToDatabase from './helpers.mjs';

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hi there!</h2>');
});

const startServer = async () => {
  await connectToDatabase();
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
};

startServer();
