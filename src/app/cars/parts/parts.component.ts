import { Component, OnInit } from '@angular/core';
import { PartService } from './parts.service';
import { Part } from './parts.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.less']
})
export class PartsComponent implements OnInit {
  parts: Part[];
  pagedParts: Part[];
  filteredParts: Part[];
  currentPage: number;
  itemsPerPage: number;
  pages: number[];
  searchTerm: string;

  constructor(private partService: PartService, private route: ActivatedRoute) {
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.searchTerm = '';
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.currentPage = +params['page'] || 1;
      this.loadParts();
    });
  }

  loadParts() {
    this.parts = this.partService.getParts();
  
    // Apply search filter
    this.filterParts();  // Corrected method name
  
    // Paginate the filtered parts
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.pagedParts = this.filteredParts.slice(startIndex, startIndex + this.itemsPerPage);
  
    // Calculate total number of pages
    const totalPages = Math.ceil(this.filteredParts.length / this.itemsPerPage);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  onSearch() {
    this.currentPage = 1; // Reset to the first page when performing a new search
    this.loadParts();
  }

  filterParts() {
    if (!this.searchTerm) {
      this.filteredParts = this.parts; // If no search term, show all parts
    } else {
      const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
      this.filteredParts = this.parts.filter(part =>
        part.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        part.partNumber.toLowerCase().includes(lowerCaseSearchTerm) ||
        part.manufacturer.toLowerCase().includes(lowerCaseSearchTerm) ||
        part.compatibleModels.join(',').toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
  }
}
