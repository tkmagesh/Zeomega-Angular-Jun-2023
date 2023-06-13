import { Injectable } from "@angular/core";
import { Bug } from "../models/bug";
import { BugStorageService } from "./bugStorage.service";

@Injectable({
    providedIn : 'root'
})
export class BugOperationsService {
    public bugs: Bug[] = [];

    constructor(private bugStorage : BugStorageService){

    }
    public loadAll() : void {
        this.bugs = this.bugStorage.getAll()
    }

    public createNew(newBugName : string){
        const newBugData: Bug = {
            id: 0,
            name: newBugName,
            createdAt: new Date(),
            isClosed: false
        }
        const newBug = this.bugStorage.save(newBugData)
        // mutation
        // this.bugs.push(newBug)

        //immutability
        this.bugs = [...this.bugs, newBug];
    }

    public toggle(bugToToggle : Bug) {
        // bugToToggle.isClosed = !bugToToggle.isClosed

        //immutability
        const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed }
        this.bugStorage.save(toggledBug)
        this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug)
    }

    public remove(bugToRemove : Bug) {
        // this.bugs.splice(this.bugs.indexOf(bugToRemove), 1)
        //immutability
        this.bugStorage.remove(bugToRemove)
        this.bugs = this.bugs.filter(bug => bug.id != bugToRemove.id)
    }
    public removeClosed(){
        this.bugs.filter(bug => bug.isClosed)
            .forEach(closedBug => this.remove(closedBug))
    }
}