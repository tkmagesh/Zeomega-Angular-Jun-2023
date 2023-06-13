import { Component } from '@angular/core';
import { Bug } from './models/bug';
import { BugStorageService } from './services/bugStorage.service';
import { BugOperationsService } from './services/bugOperations.service';



@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent {
  public sortAttrName : string = '';
  public sortByDesc : boolean = false;
  public newBugName : string = '';

  constructor(public bugOperations : BugOperationsService){
    this.bugOperations.loadAll()
  }
  onBtnAddNewClick(newBugName : string){
    this.bugOperations.createNew(newBugName)
  }

  onBugNameClick(bugToToggle : Bug){
    this.bugOperations.toggle(bugToToggle)
  }

  onBtnRemoveClick(bugToRemove : Bug){
    this.bugOperations.remove(bugToRemove)
  }
  onBtnRemoveClosedClick(){
    this.bugOperations.removeClosed()
  }

/*   getClosedCount() : number {
    console.log('getClosedCount - triggered')
    return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
  } */
}
