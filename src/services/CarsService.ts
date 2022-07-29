import IService from '../interfaces/IService';
import { ICar, ICarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

class FrameService implements IService<ICar> { 
  private _frame:IModel<ICar>;
  constructor(model:IModel<ICar>) {
    this._frame = model;
  }

  public async create(obj:ICar):Promise<ICar> {
    const parsed = ICarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._frame.create(obj);
  }
}

export default FrameService;