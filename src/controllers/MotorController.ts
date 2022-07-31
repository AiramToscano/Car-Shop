import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class CarController {
  constructor(private _service: IService<IMotorcycle>) { }

  public async create(
    req: Request & { body: IMotorcycle }, 
    res: Response<IMotorcycle>,
  ) {
    const { model,
      year, color,
      buyValue, seatsQty, doorsQty, category, engineCapacity } = req.body;
    const car = { model,
      year,
      color,
      buyValue,
      seatsQty,
      doorsQty,
      category,
      engineCapacity,
    };
    const results = await this._service.create(car);
    return res.status(201).json(results);
  }

  public async read(
    _req: Request & { body: IMotorcycle }, 
    res: Response<IMotorcycle[]>,
  ) {
    const results = await this._service.read();
    return res.status(200).json(results);
  }

  public async readOne(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const { id } = req.params;
    const result = await this._service.readOne(id);
    return res.status(200).json(result);
  }

  public async update(
    req: Request, 
    res: Response<IMotorcycle | null>,
  ) {
    const { id } = req.params;    
    const result = await this._service.update(id, req.body);
    return res.status(200).json(result);
  }

  public async delete(
    req: Request, 
    res: Response<IMotorcycle | null>,
  ) {
    const { id } = req.params;    
    await this._service.delete(id);
    return res.status(204).json();
  }
}