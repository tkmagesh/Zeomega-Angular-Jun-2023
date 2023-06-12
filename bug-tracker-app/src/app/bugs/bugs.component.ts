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
  public sortAttrName : string = '';

  bugs : Bug[] = [
    { id : 1, name : 'Server communication failure', isClosed : false, createdAt : new Date("01-Jan-2023")},
    { id: 2, name: 'Data integrity checks failed', isClosed: true, createdAt: new Date("01-Jan-2021") },
    { id: 3, name: 'User actions not recognized', isClosed: true, createdAt: new Date("01-Jan-2020") },
    { id: 3, name: 'Application not responding', isClosed: false, createdAt: new Date("01-Jan-2022") },
  ];

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

  onBugNameClick(bugToToggle : Bug){
    bugToToggle.isClosed = !bugToToggle.isClosed
  }

  onBtnRemoveClick(bugToRemove : Bug){
    this.bugs.splice(this.bugs.indexOf(bugToRemove), 1)
  }
  onBtnRemoveClosedClick(){
    this.bugs = this.bugs.filter(bug => !bug.isClosed)
  }

  getClosedCount() : number {
    return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
  }
}
