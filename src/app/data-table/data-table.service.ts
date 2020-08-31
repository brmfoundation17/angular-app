import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { TableDataModel } from '../global/table-data.model';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {
  tableDataURL = 'assets/table-data.json';
  constructor(private http: HttpClient,) { }

  getTableData(){
    console.log("Function Called : ");
    return this.http.get<Array<TableDataModel>>(this.tableDataURL);
    /*.pipe(
      map(responseData => {
        return responseData;
      }),catchError(error =>{
        return throwError("Something went wrong.");
      })
      ); */   
  }  
}
