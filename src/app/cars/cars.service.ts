// car.service.ts

import { Injectable } from '@angular/core';
import { Car } from './cars.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  getCars(): Car[] {
    const cars: Car[] = [];
    for (let i = 1; i <= 50; i++) {
      const randomManufacturer = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
      const car = new Car(
        i,
        `Car ${i}`,
        `Manufacturer ${randomManufacturer}`,
        2022 + Math.floor(Math.random() * 5), // Random year between 2022 and 2026
        ['Red', 'Blue', 'Black'][Math.floor(Math.random() * 3)], // Random color
        30000 + Math.floor(Math.random() * 20000) // Random price between 30000 and 50000
      );
      cars.push(car);
    }
    return cars;
  }
}
