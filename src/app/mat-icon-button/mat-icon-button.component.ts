import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-icon-button',
  templateUrl: './mat-icon-button.component.html',
  styleUrls: ['./mat-icon-button.component.scss']
})
export class MatIconButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Mat loaded...");
  }

}
