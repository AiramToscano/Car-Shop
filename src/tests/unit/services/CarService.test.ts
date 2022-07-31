import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catolog';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarsService';
import {
	CarMock,
	CarMockWithId,
	allcarMock,
	CarMockChangeWithId,
} from '../../mocks/CarMoks';


describe('Car Service', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);
 
	before(() => {
		sinon.stub(carModel, 'create').resolves(CarMockWithId);
		sinon.stub(carModel, 'read').resolves(allcarMock);
		sinon.stub(carModel, 'update').resolves(CarMockChangeWithId);
		sinon.stub(carModel, 'delete').resolves(CarMockChangeWithId);
		sinon.stub(carModel, 'readOne')
			.onCall(0).resolves(CarMockWithId) 
			.onCall(1).resolves(null)
			.onCall(2).resolves(CarMockWithId)
			.onCall(3).resolves(CarMockWithId); 
	})
	after(() => {
		sinon.restore()
	})
	describe('Create Car', () => {
		it('Success', async () => {
			const carCreated = await carService.create(CarMock);
			expect(carCreated).to.be.deep.equal(CarMockWithId);
		});

		it('Failure', async () => {
			try {
				await carService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('searching all car', () => {
		it('successfully found all frames', async () => {
			const carFound = await carService.read();
			expect(carFound).to.be.deep.equal(allcarMock);
		});
	});

	describe('ReadOne Car', () => {
		it('Success', async () => {
			const carCreated = await carService.readOne('62cf1fc6498565d94eba52cd');
			expect(carCreated).to.be.deep.equal(CarMockWithId);
		});
		it('Failure', async () => {
			try {
				await carService.readOne('62cf1fc6498565d94eba52cd');
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});

	describe('Update Car', () => {
		it('Success', async () => {
		  const car = await carService.update('62cf1fc6498565d94eba52cd', CarMock);
		  expect(car).to.be.deep.equal(CarMockChangeWithId);
		});

		it('Failure', async () => {
			try {
				await carService.update('62cf1fc6498565d94eba52cd', {} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('Delete Car', () => {
		it('Success', async () => {
		  const car = await carService.delete('62cf1fc6498565d94eba52cd');
		  expect(car).to.be.deep.equal(CarMockChangeWithId);
		});
	});
});