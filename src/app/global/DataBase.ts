import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { TableDataModel } from '../global/table-data.model';
export class DataBase implements InMemoryDbService{  
  createDb() {
    const tableData = [
      {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {id: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      {id: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
      {id: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
      {id: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
      {id: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
      {id: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
      {id: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
      {id: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
      {id: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
      {id: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
      {id: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
      {id: 21, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {id: 22, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {id: 23, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {id: 24, name: 'Boron', weight: 10.811, symbol: 'B'},
      {id: 25, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {id: 26, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {id: 27, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {id: 28, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {id: 29, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      {id: 30, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
      {id: 31, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
      {id: 32, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
      {id: 33, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
      {id: 34, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
      {id: 35, name: 'Sulfur', weight: 32.065, symbol: 'S'},
      {id: 36, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
      {id: 37, name: 'Argon', weight: 39.948, symbol: 'Ar'},
      {id: 38, name: 'Potassium', weight: 39.0983, symbol: 'K'},
      {id: 39, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
    ];
    return {tableData};
  }
 
}
