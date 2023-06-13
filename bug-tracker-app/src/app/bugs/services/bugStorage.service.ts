import { Injectable } from "@angular/core";
import { Bug } from "../models/bug";

@Injectable({
    providedIn : 'root'
})
export class BugStorageService{
    private _storage : Storage = window.localStorage
    private _currentBugId : number = 0;

    getAll() : Bug[] {
        const bugs : Bug[] = []
        for (let idx = 0; idx < this._storage.length; idx++){
            const key = this._storage.key(idx);
            if (key?.startsWith('bug-')) {
                const rawData = this._storage.getItem(key) || '{}',
                    bug = JSON.parse(rawData);
                this._currentBugId = this._currentBugId > bug.id ? this._currentBugId : bug.id
                bugs.push(bug)
            }
        }
        return bugs;
    }

    save(bug : Bug) : Bug {
        if (bug.id === 0){
            bug.id = ++this._currentBugId
        }
        this._storage.setItem(`bug-${bug.id}`, JSON.stringify(bug))
        return bug;
    }

    remove(bug : Bug) : void {
        this._storage.removeItem(`bug-${bug.id}`)
    }
}