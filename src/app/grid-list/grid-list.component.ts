import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})

export class GridListComponent implements OnInit {
  ngOnInit(): void {
    console.log("Grid List loaded...");
    throw new Error("Method not implemented.");
  }
  
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}