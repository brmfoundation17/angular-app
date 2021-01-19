import { Component, OnInit } from '@angular/core';
import { AngularCsv } from 'angular-csv-files/dist/Angular-csv';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = 'Angular 6';
  status: any[];
  formula:string = "Formula 1";
  downloadCSV() {
    this.status = ["approved", "rejected", "pending"];
    var data = [
      {
        name: "Test 1",
        age: 13,
        average: 8.2,
        status: this.status[0],
        description: "Kuala Lmpuer, Malaysia"
      },
      {
        name: 'Test 2',
        age: 11,
        average: 8.2,
        status: this.status[1],
        description: "Jakarta, Indonesia"
      },
      {
        name: 'Test 3',
        age: 10,
        average: 8.2,
        status: this.status[2],
        description: "Bangkok, Thailand"
      },
    ];

    var options = {
      title: 'User Details',
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      useBom: true,
      headers: ['Name', 'Age', 'Average', 'Status', 'Address']
    };

    new AngularCsv(data, this.formula, options);
  }

}
