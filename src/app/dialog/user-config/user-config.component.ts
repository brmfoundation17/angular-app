import { Component, Inject, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})
export class UserConfigComponent implements OnInit {
  modifiedUserConfig:string[]=[];
 userConfigurationList: UserConfiguration[] = [];

  allComplete: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<UserConfiData>,
    @Inject(MAT_DIALOG_DATA) public userConfiData: UserConfiData
  ) { 
      dialogRef.disableClose = true;
    }

  ngOnInit(): void {
    this.userConfiData.columnsToDisplay.forEach(item =>{
      if(item=='vin')
      this.userConfigurationList.push(new UserConfiguration(item,true,'primary', true));
      else
      this.userConfigurationList.push(new UserConfiguration(item,false,'primary', false));
    })
  }

  updateAllComplete() {
    this.allComplete = this.userConfigurationList!= null && this.userConfigurationList.every(t => t.completed);
    this.userConfigurationList.forEach(item =>{
      if(item.completed==true){
        this.modifiedUserConfig.push(item.name);
      }
    });
  }

  someComplete(): boolean {
    if (this.userConfigurationList == null) {
      return false;
    }
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
      this.modifiedUserConfig=this.userConfiData.columnsToDisplay;
    }else{
      this.modifiedUserConfig=[];
    }
  }
  
}
export interface UserConfiData {
  columnsToDisplay: string[];
  displayedColumn: string[];
}
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

