import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

const motorcycleInput: IMotorcycle = {
  model: 'Ninja',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  category: 'Street',
  engineCapacity: 5,
};

const motorcycleOutput: Motorcycle = new Motorcycle({
  id: '63fe30bae56d497e98ec4fa9',
  model: 'Ninja',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  category: 'Street',
  engineCapacity: 5,
});

describe('Testes da rota motorcycles', function () {
  it('cria uma moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const newMotorcycle = await service.create(motorcycleInput);

    expect(newMotorcycle).to.be.deep.equal(motorcycleOutput);
  });

  it('retorna todos os carros com sucesso', async function () {
    sinon.stub(Model, 'find').resolves([motorcycleOutput]);

    const service = new MotorcycleService();
    const motorcycles = await service.find();

    expect(motorcycles).to.be.deep.equal([motorcycleOutput]);
  });

  it('retorna um carro por id com sucesso', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const motorcycle = await service.findOne('6348513f34c397abcad040b2');

    expect(motorcycle.message).to.be.deep.equal(motorcycleOutput);
  });

  it('atualiza um carro por id com sucesso', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const motorcycle = await service.update('6348513f34c397abcad040b2', motorcycleInput);

    expect(motorcycle.message).to.be.deep.equal(motorcycleOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});