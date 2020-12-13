import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  public errorActivator:boolean;
  constructor() { }

  onTabChanged(){
    this.errorActivator=false;    
  }
  ngOnInit(): void {
  }
}
