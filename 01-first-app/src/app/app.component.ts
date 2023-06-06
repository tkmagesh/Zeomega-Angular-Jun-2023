import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //state
  title = '01-first-app';
  
  //ui behavior
  onChangeTitleClick(){
    this.title = 'Another Fancy Angular';
  }

  
  constructor(){

   /* 
    setTimeout(() => {
      this.title = 'My New App';
    }, 5000); */
  }
}
