import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): ICar | null {
    if (car) {
      return new Car(car) as unknown as ICar;
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async find() {
    const carODM = new CarODM();
    const cars = await carODM.find();
    return cars.map((car) => this.createCarDomain(car));
  }

  public async findOne(id: string) {
    const carODM = new CarODM();
    const car = await carODM.findOne(id);
    if (typeof car === 'string') {
      return {
        status: 422,
        message: car,
      };
    }
    if (!car) {
      return {
        status: 404,
        message: 'Car not found',
      };
    }

    return {
      status: 200,
      message: this.createCarDomain(car),
    };
  }
}
