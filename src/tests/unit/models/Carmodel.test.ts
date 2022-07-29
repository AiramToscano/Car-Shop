import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import {
	CarMock,
	CarMockWithId,
} from '../../mocks/CarMoks';

describe('Frame Model', () => {
	const carModel = new CarModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(CarMockWithId);
	});

	after(() => {
		sinon.restore();
	})

	describe('creating a car', () => {
		it('successfully created', async () => {
			const carFrame = await carModel.create(CarMock);
			expect(carFrame).to.be.deep.equal(CarMockWithId);
		});
	});
});
