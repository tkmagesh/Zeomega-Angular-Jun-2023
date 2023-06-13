import { Component } from '@angular/core';
import { Bug } from './models/bug';
import { BugStorageService } from './services/bugStorage.service';



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

  constructor(public bugStorage : BugStorageService){
    this.bugs = this.bugStorage.getAll()
  }
  onBtnAddNewClick(newBugName : string){
    const newBugData : Bug = {
      id : 0,
      name : newBugName,
      createdAt : new Date(),
      isClosed : false
    }
    const newBug = this.bugStorage.save(newBugData)
    // mutation
    // this.bugs.push(newBug)

    //immutability
    this.bugs = [...this.bugs, newBug];
  }

  onBugNameClick(bugToToggle : Bug){
    // bugToToggle.isClosed = !bugToToggle.isClosed

    //immutability
    const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed}
    this.bugStorage.save(toggledBug)
    this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug)
  }

  onBtnRemoveClick(bugToRemove : Bug){
    // this.bugs.splice(this.bugs.indexOf(bugToRemove), 1)
    //immutability
    this.bugStorage.remove(bugToRemove)
    this.bugs = this.bugs.filter(bug => bug.id != bugToRemove.id)
  }
  onBtnRemoveClosedClick(){

    this.bugs.filter(bug => bug.isClosed)
      .forEach(closedBug => this.onBtnRemoveClick(closedBug))
  }

/*   getClosedCount() : number {
    console.log('getClosedCount - triggered')
    return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
  } */
}
