import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const frameMongooseSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  seatsQty: Number,
  doorsQty: Number,
}, { versionKey: false });

class Car extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Car', frameMongooseSchema)) {
    super(model);
  }
}

export default Car;