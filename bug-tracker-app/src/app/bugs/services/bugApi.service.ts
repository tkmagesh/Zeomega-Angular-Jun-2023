import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Bug } from "../models/bug";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class BugApiService {
    private bugApiUrl = 'http://localhost:3000/bugs';

    constructor(private httpClient : HttpClient){

    }

    getAll(): Observable<Bug[]> {
        return this.httpClient
            .get<Bug[]>(this.bugApiUrl)
    }

    get(bugId : number) : Observable<Bug> {
        return this.httpClient
            .get<Bug>(`${this.bugApiUrl}/${bugId}`)
    }
    
    save(bugData : Bug) : Observable<Bug> {
        if (bugData.id === 0){
            return this.httpClient
                .post<Bug>(this.bugApiUrl, bugData)
        } else {
            return this.httpClient
                .put<Bug>(`${this.bugApiUrl}/${bugData.id}`, bugData)
        }
    }

    delete(bug : Bug) : Observable<any>{
        return this.httpClient
            .delete<Bug>(`${this.bugApiUrl}/${bug.id}`)
    }
}