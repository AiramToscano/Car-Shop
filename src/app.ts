import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/Error';
import CarRouter from './routes/ICarRoute';

const app = express();
app.use(express.json());
app.use(CarRouter);
app.use(errorHandler);

export default app;
