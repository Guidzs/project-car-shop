import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  constructor(vehicle: IVehicle) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.status = vehicle.status || false;
    this.buyValue = vehicle.buyValue;
  }
  
  public getId() {
    return this.id;
  }
  public setId(id: string | undefined) {
    this.id = id;
  }

  public getModel(): string {
    return this.model;
  }
  public setModel(model: string) {
    this.model = model;
  }

  public getYear(): number {
    return this.year;
  }
  public setYear(year: number) {
    this.year = year;
  }

  public getColor(): string {
    return this.color;
  }
  public setColor(color: string) {
    this.color = color;
  }

  public getStatus(): boolean | undefined {
    return this.status;
  }
  public setStatus(status: boolean | undefined) {
    this.status = status;
  }

  public getBuyValue(): number {
    return this.buyValue;
  }
  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }
}