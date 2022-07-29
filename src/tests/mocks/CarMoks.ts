import { ICar } from '../../interfaces/ICar';

const CarMock: ICar = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
};

const CarMockWithId: ICar & { _id: string } = {
	_id: '62cf1fc6498565d94eba52cd',
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
};

export {
  CarMock,
  CarMockWithId
}
