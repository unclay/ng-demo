// part.service.ts

import { Injectable } from '@angular/core';
import { Part } from './parts.model';

@Injectable({
  providedIn: 'root'
})
export class PartService {
  getParts(): Part[] {
    // 模拟五十个汽配零部件数据
    const parts: Part[] = [];

    for (let i = 1; i <= 50; i++) {
      const randomManufacturer = ['FilterCo', 'BrakeTech', 'SparkCo'][Math.floor(Math.random() * 3)];
      const randomModels = ['Car A', 'Car B', 'Car C'].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1);
      
      const part = new Part(
        i,
        `Part ${i}`,
        `PRT${i}`,
        randomManufacturer,
        randomModels,
        10 + Math.floor(Math.random() * 90), // Random price between 10 and 100
      );

      parts.push(part);
    }

    return parts;
  }
}
