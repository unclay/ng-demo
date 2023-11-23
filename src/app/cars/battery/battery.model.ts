// car.model.ts

export class Car {
  constructor(
    public id: number,
    public model: string,
    public capacity: number,
    public voltage: number,
    public type: string,
    public serviceLife: number
  ) {}
}
