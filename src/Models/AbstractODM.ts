import {
  Model,
  models,
  Schema,
  model,
  isValidObjectId,
  UpdateQuery,
} from 'mongoose';

export default class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async find(): Promise<T[]> {
    return this.model.find({});
  }

  public async findOne(id: string): Promise<T | string | null > {
    if (!isValidObjectId(id)) return 'Invalid mongo id';
    return this.model.findById(id);
  }

  public async update(id: string, obj: object): Promise<T | string | null> {
    if (!isValidObjectId(id)) return 'Invalid mongo id';
    
    return this.model.findByIdAndUpdate({ _id: id }, { ...obj } as UpdateQuery<T>, { new: true });
  }
}
