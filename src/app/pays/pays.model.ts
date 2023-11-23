// pays.model.ts

export class Pays {
  constructor(
    public cardNumber: string,
    public cardHolder: string,
    public expirationDate: string,
    public cvv: string
  ) {}
}
