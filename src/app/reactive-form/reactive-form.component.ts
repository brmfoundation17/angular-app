import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Mileage } from './model/mileage.model';
import { FormDataService } from './service/form-data.service';

export class UserConfiguration {
  name: string;
  completed: boolean;
  color: ThemePalette;
  disabled: boolean;
  constructor(name:string, completed: boolean, color: ThemePalette, disabled:boolean){
    this.name=name;
    this.completed=completed;
    this.color=color;
    this.disabled=disabled;
  }
}
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
  ngOnInit(): void {
    this.createForm();
    this.populateData();
    this.column.forEach(item =>{
      if(item=='vin')
      this.userConfigurationList.push(new UserConfiguration(item,true,'primary', true));
      else
      this.userConfigurationList.push(new UserConfiguration(item,false,'primary', false));
    })
  } 
 column = ['vin','comissionNumber','modelClass','vehicleType']
 modifiedUserConfig:string[]=[];
 userConfigurationList: UserConfiguration[] = [];

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.userConfigurationList!= null && this.userConfigurationList.every(t => t.completed);
    this.userConfigurationList.forEach(item =>{
      if(item.completed==true){
        this.modifiedUserConfig.push(item.name);
      }
    });
  }

  someComplete(): boolean {
    this.modifiedUserConfig=[];
    if (this.userConfigurationList == null) {
      return false;
    }
    console.log("Data : "+this.userConfigurationList)
    return this.userConfigurationList.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.userConfigurationList == null) {
      return;
    }
    this.userConfigurationList.forEach(item =>{
      if(item.name=='vin'){
        item.completed = true;
      }else{
        item.completed = completed;
      }
       
    });
    if(this.allComplete==true){
      this.modifiedUserConfig=this.column;
    }else{
      this.modifiedUserConfig=[];
    }
  }






















  panelColor = new FormControl();
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  modelYears=[2001, 2002, 2003, 2004];

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
interface Animal {
  name: string;
  sound: string;
}
