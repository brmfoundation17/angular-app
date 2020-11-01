import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})
export class UserConfigComponent implements OnInit {
  
  sortedColumnToDisplay: string[]=[];
  columnsList: UserConfiguration[]=[];

  allComplete: boolean = false;
  
  constructor(
    public dialogRef: MatDialogRef<UserConfiData>,
    @Inject(MAT_DIALOG_DATA) public userConfiData: UserConfiData
  ) { 
      dialogRef.disableClose = true;
    }

  ngOnInit(): void{
    this.columnsList=[];
    this.sortedColumnToDisplay=this.userConfiData.sortedColumnToDisplay;
    this.userConfiData.columnsList.forEach(item =>{
      if(item=='vin'){
        this.columnsList.push(new UserConfiguration(item,true,'primary', true));        
      }else if(this.userConfiData.sortedColumnToDisplay.indexOf(item) > -1){
        this.columnsList.push(new UserConfiguration(item,true,'primary', false));
      }else{
        this.columnsList.push(new UserConfiguration(item,false,'primary', false));
      }                  
    });    
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sortedColumnToDisplay, event.previousIndex, event.currentIndex);
    this.userConfiData.sortedColumnToDisplay=this.sortedColumnToDisplay;
  }

  updateAllComplete(){
    this.sortedColumnToDisplay=[];
    this.allComplete = this.columnsList!= null && this.columnsList.every(t => t.completed);
    if(this.allComplete==true){
      this.sortedColumnToDisplay=this.userConfiData.columnsList;
    }else{
      this.columnsList.forEach(item =>{    
        if(item.completed){
          this.sortedColumnToDisplay.push(item.name);        
        }
      });      
    }
  }

  someComplete(): boolean {
    if (this.columnsList == null) {
      return false;
    }
    return this.columnsList.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    
    if(this.columnsList == null) {
      return;
    }
    
    this.columnsList.forEach(item =>{
      if(item.name=='vin'){
        item.completed = true;
      }else{
        item.completed = completed;
      }       
    });
    
    if(this.allComplete==true){
      this.sortedColumnToDisplay=this.userConfiData.columnsList;
    }else{
      this.sortedColumnToDisplay=['vin'];
    }
  }  
}
export interface UserConfiData {
  columnsList: string[];
  sortedColumnToDisplay: string[];
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

