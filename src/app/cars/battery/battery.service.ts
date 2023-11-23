// car.service.ts

import { Injectable } from '@angular/core';
import { Car } from './battery.model';

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
        `Battery ${i}`,
        60 + Math.floor(Math.random() * 40),
        Math.floor(Math.random() * 12), // Random year between 2022 and 2026
        ['Lead-Acid', 'Lithium-Ion', 'AGM', 'Lead-Acid', 'Lead-Acid'][Math.floor(Math.random() * 5)], // Random color
        (4 + Math.floor(Math.random() * 10)) * 4 // Random price between 30000 and 50000
      );
      cars.push(car);
    }
    return cars;
  }
}
