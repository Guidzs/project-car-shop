import ICar from '../Interfaces/ICar';

export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;
  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status || false;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
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

  public getDoorsQty(): number {
    return this.doorsQty;
  }
  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  public getSeatsQty(): number {
    return this.seatsQty;
  }
  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }
}
