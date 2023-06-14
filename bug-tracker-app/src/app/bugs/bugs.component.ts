import { Component, ViewEncapsulation } from '@angular/core';
import { Bug } from './models/bug';
import { BugStorageService } from './services/bugStorage.service';
import { BugOperationsService } from './services/bugOperations.service';
import { BugApiService } from './services/bugApi.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BugsComponent {
  public sortAttrName : string = '';
  public sortByDesc : boolean = false;
  
  constructor(public bugOperations : BugOperationsService){
    this.bugOperations.loadAll()
  }

  onNewBugCreate(newBugName : string){
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
