import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import {
	CarMock,
	CarMockWithId,
} from '../../mocks/CarMoks';
import CarController from '../../../controllers/ICarController';
import CarService from '../../../services/CarsService';
import CarModel from '../../../models/CarModel';


describe('Car Controller', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  const req = {} as Request; 
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(CarMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create Car', () => {
    it('Success', async () => {
      req.body = CarMock;
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(CarMockWithId)).to.be.true;
    });
  });
});