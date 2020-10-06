import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Mileage } from './model/mileage.model';
import { FormDataService } from './service/form-data.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit{

  mileageList:Mileage[];

  mileageGroup: FormGroup;
  mileageFormArray: FormArray;
 

  constructor(
    public formDataService: FormDataService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ){}

  createForm() {
    this.mileageGroup = this.formBuilder.group({
      mileageFormArray: this.formBuilder.array([this.createMileageForm()]),
    });
  }

  createMileageForm(mileage?: Mileage) {
    if (mileage) {
      return this.formBuilder.group({
        lowerBound: [mileage.lowerBound],
        upperBound: [mileage.upperBound],
      });
    } else {
      return this.formBuilder.group({
        lowerBound: [],
        upperBound: [],
      });
    }    
  }

  ngOnInit(): void {
       
    this.createForm();
    this.populateData();
  } 
  populateData(){     

    this.formDataService.getFormData().subscribe((data:Mileage[]) =>{  
      this.mileageList=data;  
      data.forEach(mileage => this.addMileage(mileage));
    },(error: any) => { 
      console.log('error', error);
    }       
    );
  }

  addMileage(mileage) {
    this.mileageFormArray = this.mileageGroup.get('mileageFormArray') as FormArray;
    this.mileageFormArray.push(this.createMileageForm(mileage));
  }
  pringValue(){
    var arrayControl = this.mileageGroup.get('mileageFormArray') as FormArray;
    var item = arrayControl.at(1);
    console.log(item);
  }
  
}
/*
this.mileageGroup.setControl('mileageFormArray', this.formBuilder.array([
        this.createMileageForm(mileage)])) */
