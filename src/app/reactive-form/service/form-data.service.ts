import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Mileage } from '../model/mileage.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  tableDataURL = 'assets/mileageList.json';
  constructor(private http: HttpClient,) { }

  getFormData(){
    console.log("Function Called : ");
    return this.http.get<Mileage[]>(this.tableDataURL);      
  }  
}
