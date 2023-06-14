import { Injectable } from "@angular/core";
import { Bug } from "../models/bug";
import { BugStorageService } from "./bugStorage.service";
import { BehaviorSubject, Observable, Subject, from } from "rxjs";
import { BugApiService } from "./bugApi.service";

@Injectable({
    providedIn: 'root'
})
export class BugOperationsService {

    public bugs$: Observable<Bug[]>;

    private _bugs : Bug[] = []
    // private bugsSubject : Subject<Bug[]> = new Subject()

    // subject with initial data
    private bugsSubject: BehaviorSubject<Bug[]> = new BehaviorSubject<Bug[]>([])

    constructor(private bugApi: BugApiService) {
        this.bugs$ = this.bugsSubject.asObservable()    
    }

   /* 
    get bugs$() : Observable<Bug[]> {
        return this.bugsSubject.asObservable()
    } 
    */

    public loadAll(): void {
        this.bugApi
            .getAll()
            .subscribe(bugs => {
                this._bugs = bugs;
                this.bugsSubject.next(this._bugs)
            })
    }

    public createNew(newBugName: string) {
        const newBugData: Bug = {
            id: 0,
            name: newBugName,
            createdAt: new Date(),
            isClosed: false
        }
        this.bugApi
            .save(newBugData)
            .subscribe(newBug => {
                this._bugs = [...this._bugs, newBug];
                this.bugsSubject.next(this._bugs)
            })
        //immutability
        
    }

    public toggle(bugToToggle: Bug) {
        // bugToToggle.isClosed = !bugToToggle.isClosed

        //immutability
        const toggledBugData = { ...bugToToggle, isClosed: !bugToToggle.isClosed }
        this.bugApi
            .save(toggledBugData)
            .subscribe(toggledBug => {
                this._bugs = this._bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug)
                this.bugsSubject.next(this._bugs)
            })
    }

    public remove(bugToRemove: Bug) {
        this.bugApi
            .delete(bugToRemove)
            .subscribe(() => {
                this._bugs = this._bugs.filter(bug => bug.id != bugToRemove.id)
                this.bugsSubject.next(this._bugs);
            })
    }
    public removeClosed() {
        this._bugs.filter(bug => bug.isClosed)
            .forEach(closedBug => this.remove(closedBug))
    }
}

// sync
/* 
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
} */