import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @Input() errorFlag: boolean;
  constructor() { }
  
  public errorMessage="Test Customer Error.";
  ngOnInit(): void {
    this.errorFlag=true;
  }

}
