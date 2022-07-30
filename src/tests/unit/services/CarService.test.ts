import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarsService';
import {
	CarMock,
	CarMockWithId,
	allcarMock,
	CarMockChangeWithId,
	CarMockChange,
} from '../../mocks/CarMoks';


describe('Car Service', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);
 
	before(() => {
		sinon.stub(carModel, 'create').resolves(CarMockWithId);
		sinon.stub(carModel, 'read').resolves(allcarMock);
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
});