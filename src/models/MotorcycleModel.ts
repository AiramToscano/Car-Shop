import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const frameMongooseSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
});

class Car extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motorcycle', frameMongooseSchema)) {
    super(model);
  }
}

export default Car;