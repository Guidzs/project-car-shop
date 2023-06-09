import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = this.req.body;
    const newMotorcycle = await this.service.create(motorcycle);
    this.res.status(201).json(newMotorcycle);
  }

  public async find() {
    const motorcycles = await this.service.find();
    return this.res.status(200).json(motorcycles);
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
