import { Component } from "@angular/core";

@Component({
    selector : 'app-greeter',
    templateUrl : 'greeter.component.html'
})
export class GreeterComponent{
    message: string = '';

    // version - 1
    /* 
    onBtnGreetClick(userName : string) {
        this.message = `Hi ${userName}, Have a nice day! [v1]`
    } 
    */


    /* version-2 */
    private _userName : string = ''

    get userName() : string {
        return this._userName
    }

    set userName(val : string){
        this._userName = val;
    }
    
    onBtnGreetClick() {
        this.message = `Hi ${this.userName}, Have a nice day! [v2]`
    }

}