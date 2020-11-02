import { Component, OnInit, ViewChild} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GlobalConstant } from '../common/global-constants';
import { VehicleDetails } from './model/vehicle.model';
import { CompanyFleetService } from './service/company-fleet.service';
import { UserConfiguration } from './model/user-configuration.model';
import { LookUpData } from './model/lookup.model';
import { SearchRequestData } from './model/search-request-data';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UserConfigComponent } from '../dialog/user-config/user-config.component';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-company-fleet',
  templateUrl: './company-fleet.component.html',
  styleUrls: ['./company-fleet.component.scss']
})

export class CompanyFleetComponent implements OnInit {
    
  imageContainer:any;
  vehicleDetailsList: VehicleDetails[]=[];
  vehicleSearchForm: FormGroup;

  searchData: any;
  columnsList: string[] = ['vin', 'commissionNumber', 'modelDescription', 'vehicleType', 'modelName', 'modelClass', 'modelYear', 'firstRegistrationDate', 'vehicleLocation'];
  sortedColumnToDisplay: string[];
  dataSource = new MatTableDataSource<VehicleDetails>();
  loadingIcon=false; 


  userConfigList=[];    
  
  vehicleTypeList=[];  
  vehicleTypeCheckList=[];
  lookUpData:LookUpData;
  pageSize=100;
  pageIndex:number;
  searchRequestData: SearchRequestData;
  
  responseData:any;
  userId='6';
  moduleName="company-fleet-report";
  control = new FormControl();
  modelNameList:string[]=[];
  filteredModelName: Observable<string[]>;
  modelYearList:string[]=[];
  filteredModelYear: Observable<string[]>;
  modelClassList:string[]=[];
  filteredModelClass: Observable<string[]>;
  usageCodeDescriptionList:string[]=[];
  filteredUsageCodeDesc: Observable<string[]>;
  reportVisibility=false;
  totalVin:number;
  totalMileages:number;

  constructor(
    private globalConstant : GlobalConstant,
    private fb: FormBuilder,
    private companyFleetService:CompanyFleetService,   
    public dialog: MatDialog,
    
  ) {}  

  @ViewChild(MatSort) sort: MatSort;  

  ngOnInit(): void { 
    this.pageIndex=0;       
    this.imageContainer= this.globalConstant.globalImageContainer;
    this.getLookUpData();
    this.getUserConfig();  
    this.initializeSearchForm();  
    this.searchVehicle();  
  } 
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;    
  }
  initializeSearchForm(){
    this.vehicleSearchForm = this.fb.group({
      vin:[],      
      commissionNumber: [],
      modelName: [],
      modelYear: [],
      modelClass: [],
      vehicleType: this.fb.array([]),
      usageCodeDescription: []        
    });    
  }
  resetSearchForm(){    
    const checkArray: FormArray = this.vehicleSearchForm.get('vehicleType') as FormArray;
    let i: number = 0;
    checkArray.controls.forEach((item: FormControl) => {
      checkArray.removeAt(i);
      return;
      i++;        
    });
      this.initializeSearchForm();
  }
  
  searchVehicle(){   
    this.searchData = this.vehicleSearchForm.value;

    this.searchRequestData = new SearchRequestData(
      this.searchData.vin,
      this.searchData.commissionNumber,
      this.searchData.modelName,
      this.searchData.modelYear,
      this.searchData.modelClass,
      this.searchData.vehicleType,
      this.searchData.usageCodeDescription,
      this.pageSize,
      this.pageIndex
    );
    this.loadingIcon = true; 
    this.companyFleetService.getVehicleDetails(this.searchRequestData)
    .subscribe((vehicleList:VehicleDetails[])=>{  
      this.dataSource.data=vehicleList;  
      this.loadingIcon = false; 
      this.reportVisibility=true;  
    },
    error => {      
      this.loadingIcon = false; 
      this.reportVisibility=false;        
    });
  }
  loadMoreData(){
    this.searchData = this.vehicleSearchForm.value;
    this.searchRequestData = new SearchRequestData(
      this.searchData.vin,
      this.searchData.commissionNumber,
      this.searchData.modelName,
      this.searchData.modelYear,
      this.searchData.modelClass,
      this.searchData.vehicleType,
      this.searchData.usageCodeDescription,
      this.pageSize,
      this.pageIndex++
    )
    this.companyFleetService.getVehicleDetails(this.searchRequestData).subscribe((vehicleList:VehicleDetails[])=>{  
      vehicleList.forEach((value, index) => {
        this.vehicleDetailsList.push(value);   
      });
      this.dataSource.data = this.vehicleDetailsList;      
      this.loadingIcon = false; 
      this.reportVisibility=true;       
    },
    error => {
      console.log(error.error);   
      this.loadingIcon = false;
      this.reportVisibility=false;              
    });
  }

  

 /* onCheckboxChange(e) {
    const checkArray: FormArray = this.vehicleSearchForm.get('vehicleType') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }    
  }   */
  getLookUpData(){
    this.companyFleetService.getLookUpData().subscribe(lookUpData=>{
      this.lookUpData=lookUpData; 
      this.modelNameList = this.lookUpData.modelNames; 
      this.modelYearList = this.lookUpData.modelYears; 
      this.modelClassList = this.lookUpData.modelClasses;   
      this.usageCodeDescriptionList = this.lookUpData.usageCodeDescription;
      this.vehicleTypeList = this.lookUpData.vehileTypes;
      this.totalVin = this.lookUpData.totalVins;
      this.totalMileages = this.totalMileages;

      this.vehicleTypeList.forEach(item =>{
        this.vehicleTypeCheckList.push(new CheckBoxProperty(item, item, true,'primary',false));
      });

      this.filteredModelName = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filterModelName(value))
      );

      this.filteredModelYear = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filterModelYear(value))
      );

      this.filteredModelClass = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filterModelClass(value))
      );

      this.filteredUsageCodeDesc = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filterUsageCodeDesc(value))
      );
    });
  }  

  private _filterUsageCodeDesc(value: string): string[] {
    const filterValue = this._normalizeUsageCodeDesc(value);
    return this.usageCodeDescriptionList.filter(usageCodeDesc => this._normalizeUsageCodeDesc(usageCodeDesc).includes(filterValue));
  }

  private _normalizeUsageCodeDesc(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  private _filterModelClass(value: string): string[] {
    const filterValue = this._normalizeModelNameValue(value);
    return this.modelClassList.filter(modelClass => this._normalizeModelClassValue(modelClass).includes(filterValue));
  }

  private _normalizeModelClassValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  private _filterModelYear(value: string): string[] {
    const filterValue = this._normalizeModelNameValue(value);
    return this.modelYearList.filter(modelYear => this._normalizeModelYearValue(modelYear).includes(filterValue));
  }

  private _normalizeModelYearValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  private _filterModelName(value: string): string[] {
    const filterValue = this._normalizeModelNameValue(value);
    return this.modelNameList.filter(modelName => this._normalizeModelNameValue(modelName).includes(filterValue));
  }

  private _normalizeModelNameValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  getUserConfig(){
    this.companyFleetService.getUserConfigDetails(this.userId, this.moduleName)
    .subscribe(userConfigReport=>{  
      this.sortedColumnToDisplay=userConfigReport.userConfig;           
      this.loadingIcon = false;    
    },
    error => {
      this.sortedColumnToDisplay=['vin'];
      console.log(error.error);   
      this.loadingIcon = false;       
    });;     
  }
  
  vehicleType(){
    console.log();
    //this.vehicleTypeCheckList=[];    
  }

  saveUserConfiguration(){
    this.responseData = this.companyFleetService.saveUserConfigDetails(this.sortedColumnToDisplay, this.userId, this.moduleName)
    .subscribe(
      responseData => {       
        console.log(responseData);
      },
      error => {
       console.log(error.error);       
      }
    )
  }

  userConfigDialog(): void {
    let userConfigDialogRef = this.dialog.open(UserConfigComponent,{
      
      data: {
        dialogColumnsList: this.columnsList,
        dialogSortedColumnToDisplay: this.sortedColumnToDisplay
      },
      backdropClass: 'user-configuration-dialog-container'
    });

    userConfigDialogRef.afterClosed().subscribe(result => {
      this.sortedColumnToDisplay = result.dialogSortedColumnToDisplay;
      this.saveUserConfiguration();
      
    });
  }
}
export class CheckBoxProperty {
  label: string;
  value: string;
  completed: boolean;
  color: ThemePalette;
  disabled: boolean;
  constructor(label:string, value:string, completed: boolean, color: ThemePalette, disabled:boolean){
    this.label=label;
    this.value=value;
    this.completed=completed;
    this.color=color;
    this.disabled=disabled;
  }
}