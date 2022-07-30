import { ICar } from '../../interfaces/ICar';

const CarMock: ICar = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
};

const CarMockChange: ICar = {
    model: "golf sport",
    year: 1999,
    color: "blue",
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

const CarMockChangeWithId: ICar & { _id: string } = {
	_id: '62cf1fc6498565d94eba52cd',
    model: "golf sport",
    year: 1999,
    color: "blue",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
};

const allcarMock: ICar[] & { _id: string }[] = [
	{
    _id: '62cf1fc6498565d94eba52cd',
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
	},
	{
    _id: '62cf1fc6498565d94eba52cd',
    model: "Fiat Polo",
    year: 2000,
    color: "red",
    buyValue: 80000,
    seatsQty: 2,
    doorsQty: 2
	}
];

export {
  CarMock,
  CarMockWithId,
  allcarMock,
  CarMockChangeWithId,
  CarMockChange
}
