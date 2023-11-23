// pays.component.ts

import { Component } from '@angular/core';
import { Pays } from './pays.model';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.less']
})
export class PaysComponent {
  pays: Pays = new Pays('', '', '', ''); // Initialize with empty values
  paymentSuccess: string;

  submitForm() {
    // Handle form submission here
    this.paymentSuccess = JSON.stringify(this.pays, null, 2);
    console.log('Form submitted:', this.pays);
  }

  closeAlert() {
    this.paymentSuccess = '';
  }
}
