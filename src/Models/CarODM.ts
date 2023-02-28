import {
  Model,
  models,
  Schema,
  model,
} from 'mongoose';

export default class CarODM<T> {
  private model: Model<T>;
  private schema: Schema;
  private modelName: string;

  constructor() {
    this.schema = new Schema<T>();
    this.modelName = 'Car';
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }
}
