import { Component } from '@angular/core';
import { Bug } from './models/bug';



@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent {
  public sortAttrName : string = '';
  public sortByDesc : boolean = false;
  public newBugName : string = '';

  bugs : Bug[] = [
    
  ];

  private _currentBugId : number = 0;
  

  constructor(){
    this.bugs = [
      { id: 1, name: 'Server communication failure', isClosed: false, createdAt: new Date("01-Jan-2023") },
      { id: 2, name: 'Data integrity checks failed', isClosed: true, createdAt: new Date("01-Jan-2021") },
      { id: 3, name: 'User actions not recognized', isClosed: true, createdAt: new Date("01-Jan-2020") },
      { id: 4, name: 'Application not responding', isClosed: false, createdAt: new Date("01-Jan-2022") },
    ]
    this._currentBugId = 4
  }
  onBtnAddNewClick(newBugName : string){
    const newBug : Bug = {
      id : ++this._currentBugId,
      name : newBugName,
      createdAt : new Date(),
      isClosed : false
    }
    // mutation
    // this.bugs.push(newBug)

    //immutability
    this.bugs = [...this.bugs, newBug];
  }

  onBugNameClick(bugToToggle : Bug){
    // bugToToggle.isClosed = !bugToToggle.isClosed

    //immutability
    const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed}
    this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug)
  }

  onBtnRemoveClick(bugToRemove : Bug){
    // this.bugs.splice(this.bugs.indexOf(bugToRemove), 1)
    //immutability
    this.bugs = this.bugs.filter(bug => bug.id != bugToRemove.id)
  }
  onBtnRemoveClosedClick(){
    this.bugs = this.bugs.filter(bug => !bug.isClosed)
  }

  getClosedCount() : number {
    console.log('getClosedCount - triggered')
    return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
  }
}
