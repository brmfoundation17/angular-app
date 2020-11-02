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
  
  dialogSortedColumnToDisplay: string[]=[];
  dialogColumnsList: UserConfiguration[]=[];

  allComplete: boolean = false;
  
  constructor(
    public dialogRef: MatDialogRef<UserConfiData>,
    @Inject(MAT_DIALOG_DATA) public userConfiData: UserConfiData
  ) { 
      dialogRef.disableClose = true;
    }

  ngOnInit(): void{
    this.dialogColumnsList=[];
    this.dialogSortedColumnToDisplay=this.userConfiData.dialogSortedColumnToDisplay;
    this.userConfiData.dialogColumnsList.forEach(item =>{
      if(item=='vin'){
        this.dialogColumnsList.push(new UserConfiguration(item,true,'primary', true));        
      }else if(this.userConfiData.dialogSortedColumnToDisplay.indexOf(item) > -1){
        this.dialogColumnsList.push(new UserConfiguration(item,true,'primary', false));
      }else{
        this.dialogColumnsList.push(new UserConfiguration(item,false,'primary', false));
      }                  
    });    
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.dialogSortedColumnToDisplay, event.previousIndex, event.currentIndex);
    this.userConfiData.dialogSortedColumnToDisplay=this.dialogSortedColumnToDisplay;
  }

  updateAllComplete(){
    this.dialogSortedColumnToDisplay=[];
    this.allComplete = this.dialogColumnsList!= null && this.dialogColumnsList.every(t => t.completed);
    if(this.allComplete==true){
      this.dialogSortedColumnToDisplay=this.userConfiData.dialogColumnsList;
    }else{
      this.dialogColumnsList.forEach(item =>{    
        if(item.completed){
          this.dialogSortedColumnToDisplay.push(item.name);        
        }
      });      
    }
  }

  someComplete(): boolean {
    if (this.dialogColumnsList == null) {
      return false;
    }
    return this.dialogColumnsList.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    
    if(this.dialogColumnsList == null) {
      return;
    }
    
    this.dialogColumnsList.forEach(item =>{
      if(item.name=='vin'){
        item.completed = true;
      }else{
        item.completed = completed;
      }       
    });
    
    if(this.allComplete==true){
      this.dialogSortedColumnToDisplay=this.userConfiData.dialogColumnsList;
    }else{
      this.dialogSortedColumnToDisplay=['vin'];
    }
  }  
}
export interface UserConfiData {
  dialogColumnsList: string[];
  dialogSortedColumnToDisplay: string[];
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

