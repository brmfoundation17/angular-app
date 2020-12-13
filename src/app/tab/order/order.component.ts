import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public errorFlag=false;
  public errorMessage="";
  constructor() { }

  ngOnInit(): void {
  }

}
