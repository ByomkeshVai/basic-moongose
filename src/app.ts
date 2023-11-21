import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { BikeRouters } from './app/modules/bike.router';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/v1/bike', BikeRouters);

app.get('/', (req: Request, res: Response) => {
  res.send("Hello world, running")
});

export default app;
