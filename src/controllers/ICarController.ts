import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class FrameController {
  constructor(private _service: IService<ICar>) { }

  public async create(
    req: Request & { body: ICar }, 
    res: Response<ICar>,
  ) {
    const { model, year, color, buyValue, seatsQty, doorsQty } = req.body;
    const frame = { model, year, color, buyValue, seatsQty, doorsQty };
    const results = await this._service.create(frame);
    return res.status(201).json(results);
  }
}