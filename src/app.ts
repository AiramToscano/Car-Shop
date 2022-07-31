import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/Error';
import CarRouter from './routes/ICarRoute';
import MotorRouter from './routes/MotorcycleRoute';

const app = express();
app.use(express.json());
app.use(CarRouter, MotorRouter);
app.use(errorHandler);

export default app;
