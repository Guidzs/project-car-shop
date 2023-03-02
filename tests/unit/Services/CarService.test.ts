import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

const carInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carOutput: Car = new Car({
  id: '63fe30bae56d497e98ec4fa9',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
});

describe('Testes da rota cars', function () {
  it('cria um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const newCar = await service.create(carInput);

    expect(newCar).to.be.deep.equal(carOutput);
  });

  it('retorna todos os carros com sucesso', async function () {
    sinon.stub(Model, 'find').resolves([carOutput]);

    const service = new CarService();
    const cars = await service.find();

    expect(cars).to.be.deep.equal([carOutput]);
  });

  it('retorna um carro por id com sucesso', async function () {
    sinon.stub(Model, 'findById').resolves(carOutput);

    const service = new CarService();
    const car = await service.findOne('6348513f34c397abcad040b2');

    expect(car.message).to.be.deep.equal(carOutput);
  });

  it('atualiza um carro por id com sucesso', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);

    const service = new CarService();
    const car = await service.update('6348513f34c397abcad040b2', carInput);

    expect(car.message).to.be.deep.equal(carOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});