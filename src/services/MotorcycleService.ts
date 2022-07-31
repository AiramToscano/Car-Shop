import IService from '../interfaces/IService';
import { IMotorcycle, MotorCycleZodSchema } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catolog';

class MotorcycleService implements IService<IMotorcycle> { 
  private _car:IModel<IMotorcycle>;
  constructor(model:IModel<IMotorcycle>) {
    this._car = model;
  }

  public async create(obj:IMotorcycle):Promise<IMotorcycle> {
    const parsed = MotorCycleZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._car.create(obj);
  }

  public async read():Promise<IMotorcycle[]> {
    return this._car.read();
  }

  public async readOne(_id:string):Promise<IMotorcycle> {
    const result = await this._car.readOne(_id);
    if (!result) throw new Error(ErrorTypes.EntityNotFound);
    return result;
  }

  public async update(_id:string, obj:IMotorcycle):Promise<IMotorcycle | null> {
    const parsed = MotorCycleZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    await this.readOne(_id);
    const result = await this._car.update(_id, obj);
    return result;
  }

  public async delete(_id:string):Promise<IMotorcycle | null> {
    await this.readOne(_id);
    const result = await this._car.delete(_id);
    return result;
  }
}

export default MotorcycleService;