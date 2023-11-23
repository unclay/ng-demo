import { Component, OnInit } from '@angular/core';
import { Car } from './battery.model';
import { CarService } from './battery.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.less']
})
export class BatteryComponent implements OnInit {
  cars: Car[];
  filteredCars: Car[]; // Displayed cars based on search criteria
  currentPage: number;
  itemsPerPage: number;
  pages: number[];
  searchTerm: string;

  constructor(private carService: CarService, private route: ActivatedRoute) {
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.searchTerm = '';
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.currentPage = +params['page'] || 1;
      this.loadCars();
    });
  }

  loadCars() {
    this.cars = this.carService.getCars();

    // Apply search filter
    this.filterCars();

    // Calculate total number of pages
    const totalPages = Math.ceil(this.filteredCars.length / this.itemsPerPage);
    console.log(this.filteredCars.length);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    // Paginate the filtered cars
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.filteredCars = this.filteredCars.slice(startIndex, startIndex + this.itemsPerPage);
  }

  onSearch() {
    this.currentPage = 1; // Reset to the first page when performing a new search
    this.loadCars();
  }

  filterCars() {
    if (!this.searchTerm) {
      this.filteredCars = this.cars; // If no search term, show all cars
    } else {
      const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
      this.filteredCars = this.cars.filter(car =>
        car.model.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
  }

}
