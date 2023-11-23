// part.model.ts

export class Part {
  constructor(
    public id: number,
    public name: string,
    public partNumber: string,
    public manufacturer: string,
    public compatibleModels: string[],
    public price: number
  ) {}
}
