import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector : 'app-bug-edit',
    templateUrl : 'bug-edit.component.html'
})
export class BugEditComponent{
    public newBugName: string = '';

    @Output()
    public bugCreate : EventEmitter<string> = new EventEmitter()

    onBtnAddNewClick(newBugName: string) {
        // this.bugOperations.createNew(newBugName)
        this.bugCreate.emit(newBugName)
    }
}