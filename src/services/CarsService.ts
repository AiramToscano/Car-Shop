import IService from '../interfaces/IService';
import { ICar, ICarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catolog';

class FrameService implements IService<ICar> { 
  private _car:IModel<ICar>;
  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj:ICar):Promise<ICar> {
    const parsed = ICarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._car.create(obj);
  }

  public async read():Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(_id:string):Promise<ICar> {
    const result = await this._car.readOne(_id);
    if (!result) throw new Error(ErrorTypes.EntityNotFound);
    return result;
  }

  public async update(_id:string, obj:ICar):Promise<ICar | null> {
    const parsed = ICarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    await this.readOne(_id);
    const result = await this._car.update(_id, obj);
    return result;
  }

  public async delete(_id:string):Promise<ICar | null> {
    await this.readOne(_id);
    const result = await this._car.delete(_id);
    return result;
  }
}

export default FrameService;