import dotenv from 'dotenv';
import express, { Express } from 'express';

import { connectDB } from './db/index';
import { SongModelFactory } from './db/song.model';
import songRoute from './router/song.router';

dotenv.config();

const app: Express = express();
const port = process.env['PORT'];
const BASE_URL = process.env['BASE_URL'];

app.use(express.json());
app.use('/song', songRoute(new SongModelFactory()));

connectDB().then(async (error: any) => {
  if (error) {
    console.log(error);
  }
});

const server = app
  .listen(port, () => {
    console.log(`Server is running on ${BASE_URL}:${port}`);
  })
  .on('error', (err: Error) => {
    console.log(err);
  });

export default server;
