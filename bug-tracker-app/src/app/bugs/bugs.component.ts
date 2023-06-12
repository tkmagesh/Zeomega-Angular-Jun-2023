import { Component } from '@angular/core';

interface Bug {
  id : number
  name : string
  createdAt : Date
  isClosed : boolean
}

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent {

  bugs : Bug[] = [];
  
  private _currentBugId : number = 0;

  onBtnAddNewClick(newBugName : string){
    const newBug : Bug = {
      id : ++this._currentBugId,
      name : newBugName,
      createdAt : new Date(),
      isClosed : false
    }
    this.bugs.push(newBug)
  }
}
