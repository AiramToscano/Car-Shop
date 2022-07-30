import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import {
	CarMock,
	CarMockWithId,
	allcarMock,
	CarMockChangeWithId,
	CarMockChange,
} from '../../mocks/CarMoks';

describe('Car Model', () => {
	const carModel = new CarModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(CarMockWithId);
		sinon.stub(Model, 'findOne').resolves(CarMockWithId);
		sinon.stub(Model, 'find').resolves(allcarMock);
		sinon.stub(Model, 'findByIdAndRemove').resolves(CarMockWithId);
		sinon.stub(Model, 'findByIdAndUpdate').resolves(CarMockChangeWithId);
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

	describe('searching a car', () => {
		it('successfully found', async () => {
			const carFound = await carModel.readOne('62cf1fc6498565d94eba52cd');
			expect(carFound).to.be.deep.equal(CarMockWithId);
		});

		it('_id not found', async () => {
			try {
				await carModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

	describe('searching all car', () => {
		it('successfully found all frames', async () => {
			const carFound = await carModel.read();
			expect(carFound).to.be.deep.equal(allcarMock);
		});
	});

	describe('removing a car', () => {
		it('successfully removed', async () => {
			const carChanged = await carModel.delete('62cf1fc6498565d94eba52cd');
			expect(carChanged).to.be.deep.equal(CarMockWithId);
		});

		it('_id not found to remove', async () => {
			try {
				await carModel.delete('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

	describe('changing a car', () => {
		it('successfully changed', async () => {
			const carChanged = await carModel.update('62cf1fc6498565d94eba52cd', CarMockChange);
			expect(carChanged).to.be.deep.equal(CarMockChangeWithId);
		});

		it('_id not found to change', async () => {
			try {
				await carModel.update('123ERRADO', CarMockChange);
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});
});
