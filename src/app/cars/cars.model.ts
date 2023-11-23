// car.model.ts

export class Car {
  constructor(
    public id: number,
    public model: string,
    public manufacturer: string,
    public year: number,
    public color: string,
    public price: number
  ) {}
}
