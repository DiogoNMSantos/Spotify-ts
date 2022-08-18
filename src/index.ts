import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';

dotenv.config();

const app: Express = express();
const port = process.env['PORT'];
const BASE_URL = process.env['BASE_URL'];

app.get('/', (req: Request, res: Response) => {
  console.log(req.query);
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at ${BASE_URL}:${port}`);
});
