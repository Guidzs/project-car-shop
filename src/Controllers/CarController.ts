import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = this.req.body;
    const newCar = await this.service.create(car);
    this.res.status(201).json(newCar);
  }

  public async find() {
    const cars = await this.service.find();
    return this.res.status(200).json(cars);
  }

  public async findOne() {
    const { id } = this.req.params;
    const { status, message } = await this.service.findOne(id);
    if (typeof message === 'string') {
      return this.res.status(status).json({ message });
    }
    return this.res.status(status).json(message);
  }

  public async update() {
    const { id } = this.req.params;
    const obj = this.req.body;

    const { status, message } = await this.service.update(id, obj);
    if (typeof message === 'string') {
      return this.res.status(status).json({ message });
    }
    return this.res.status(status).json(message);
  }
}
