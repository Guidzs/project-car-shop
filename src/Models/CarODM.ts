import {
  Model,
  models,
  Schema,
  model,
} from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM<ICar> {
  private model: Model<ICar>;
  private schema: Schema;
  private modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
}