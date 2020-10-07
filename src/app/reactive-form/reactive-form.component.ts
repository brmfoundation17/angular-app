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
  updatedValue: number;
  orginalValue: number;
  mileageFlag:MileageFlag[]=[];
  errorMessage: string;
  errorFlag:boolean=false;
  upperBoundValue: number;
  lowerBoundValue: number;
  

  constructor(
    public formDataService: FormDataService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ){}

  updateValue(index:number, inputType:string){
    var arrayControl = this.mileageGroup.get('mileageFormArray') as FormArray;
    if(inputType=="lowerBound"){
      this.updatedValue = arrayControl.at(index).value.lowerBound;
      this.orginalValue = this.mileageList[index].lowerBound;
      this.upperBoundValue = this.mileageList[index].upperBound;
      if(index==0){
        if(this.updatedValue < this.mileageList[index].upperBound){
          this.mileageList[index].lowerBound=this.updatedValue;
          this.errorFlag=false;
          this.errorMessage="";
        }else{
          this.errorFlag=true;
          this.errorMessage="Entered value should be less than "+this.mileageList[index].upperBound+".";
          arrayControl.at(index).setValue({'lowerBound':this.orginalValue,'upperBound':this.upperBoundValue}); 
                         
        }
      }else{
        if((this.updatedValue > this.mileageList[index-1].lowerBound) && (this.updatedValue < this.mileageList[index].upperBound)){
          this.mileageList[index].lowerBound=this.updatedValue;
          this.mileageList[index-1].upperBound=this.updatedValue;
          arrayControl.at(index-1).setValue({'lowerBound':this.mileageList[index-1].lowerBound,'upperBound':this.updatedValue});    
          this.errorFlag=true;
          this.errorMessage="";
        }else{
          this.errorFlag=true;
          this.errorMessage="Entered value should be greater than "+this.mileageList[index-1].lowerBound+" and less than "+this.mileageList[index].upperBound+".";
          arrayControl.at(index).setValue({'lowerBound':this.orginalValue,'upperBound':this.upperBoundValue});          
        }

      }
    }else if(inputType=="upperBound"){
      this.updatedValue = arrayControl.at(index).value.upperBound;
      this.orginalValue = this.mileageList[index].upperBound;
      this.lowerBoundValue = this.mileageList[index].lowerBound;
      if(index==this.mileageList.length-1){
        if(this.updatedValue > this.mileageList[index].lowerBound){
          this.mileageList[index].upperBound=this.updatedValue;
          arrayControl.at(index+1).setValue({'lowerBound':this.updatedValue,'upperBound':this.orginalValue}); 
          this.errorFlag=true;
          this.errorMessage="";
        }else{
          this.errorFlag=true;
          this.errorMessage="Entered value should be greater than "+this.mileageList[index].lowerBound+".";
          arrayControl.at(index).setValue({'lowerBound':this.lowerBoundValue,'upperBound':this.orginalValue});          
        }
      }else{
        if((this.updatedValue > this.mileageList[index].lowerBound) && (this.updatedValue < this.mileageList[index+1].upperBound)){
          this.mileageList[index].upperBound=this.updatedValue;
          this.mileageList[index+1].lowerBound=this.updatedValue;
          arrayControl.at(index+1).setValue({'lowerBound':this.updatedValue,'upperBound':this.mileageList[index+1].upperBound});    
          this.errorFlag=true;
          this.errorMessage="";
        }else{
          this.errorFlag=true;
          this.errorMessage="Entered value should be greater than "+this.mileageList[index].lowerBound+" and less than "+this.mileageList[index+1].upperBound+".";
          arrayControl.at(index).setValue({'lowerBound':this.lowerBoundValue,'upperBound':this.orginalValue});          
        }

      }
      
    }  
  }

  createForm() {
    this.mileageGroup = this.formBuilder.group({
      mileageFormArray: this.formBuilder.array([]),
    });
  }

  createMileageForm(mileage?: Mileage) {
    if (mileage) {
      return this.formBuilder.group({
        lowerBound: [mileage.lowerBound],
        upperBound: [mileage.upperBound],
      });
    }else {
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
var=false
  addMileage(mileage) {
    this.mileageFormArray = this.mileageGroup.get('mileageFormArray') as FormArray;
    this.mileageFormArray.push(this.createMileageForm(mileage));
    this.mileageFlag.push(
      {
        lowerBound:true,
        upperBound:true
    });
  }    
}
export class MileageFlag{
  lowerBound: boolean;
  upperBound: boolean;
  constructor(lowerBound: boolean, upperBound: boolean){
    this.lowerBound = lowerBound;
    this.upperBound = upperBound;
  }
}