import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import {
	CarMock,
	CarMockWithId,
  allcarMock,
  CarMockChangeWithId,
  CarMockChange,
  CarMockError
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
    sinon.stub(carService, 'read').resolves(allcarMock);
    sinon.stub(carService, 'update').resolves(CarMockWithId);
    sinon.stub(carService, 'readOne').resolves(CarMockWithId);
    sinon.stub(carService, 'delete').resolves();

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

  describe('Read Cars', () => {
    it('Success', async () => {
      req.body = CarMock;
      await carController.read(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(allcarMock)).to.be.true;
    });
  });

  describe('ReadOne Car', () => {
    it('Success', async () => {
      req.params = { id: CarMockWithId._id };
      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(CarMockWithId)).to.be.true;
    });
  });

  describe('Update Car', () => {
    it('Success', async () => {
      req.params = { id: CarMockWithId._id }
      req.body = CarMockChange
      await carController.update(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(CarMockWithId)).to.be.true;
    });
  });

  describe('Delete Car', () => {
    it('Success', async () => {
      req.params = { id: CarMockWithId._id }
      await carController.delete(req, res);
      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith()).to.be.true;
    });
  });
});