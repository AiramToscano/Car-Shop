import { Router } from 'express';
import ICarController from '../controllers/ICarController';
import ICarModel from '../models/CarModel';
import ICarService from '../services/CarsService';

const route = Router();
 
const Car = new ICarModel();
const CarService = new ICarService(Car);
const CarController = new ICarController(CarService);

route.post('/cars', (req, res) => CarController.create(req, res));
route.get('/cars', (req, res) => CarController.read(req, res));
route.get('/cars/:id', (req, res) => CarController.readOne(req, res));

export default route;