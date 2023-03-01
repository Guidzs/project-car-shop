import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): IMotorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle) as unknown as IMotorcycle;
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async find() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.find();
    return motorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
  }

  public async findOne(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.findOne(id);
    if (typeof motorcycle === 'string') {
      return {
        status: 422,
        message: motorcycle,
      };
    }
    if (!motorcycle) {
      return {
        status: 404,
        message: 'Motorcycle not found',
      };
    }
    return {
      status: 200,
      message: this.createMotorcycleDomain(motorcycle),
    };
  }

  public async update(id: string, obj: object) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.update(id, obj);
    if (typeof motorcycle === 'string') {
      return {
        status: 422,
        message: motorcycle,
      };
    }
    if (!motorcycle) {
      return {
        status: 404,
        message: 'Motorcycle not found',
      };
    }
    return {
      status: 200,
      message: this.createMotorcycleDomain(motorcycle),
    };
  }
}
