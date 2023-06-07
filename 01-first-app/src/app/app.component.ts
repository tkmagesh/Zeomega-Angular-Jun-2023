import { Component } from '@angular/core';
import { EnumType } from 'typescript';

enum UserChoiceEnum {
  greeter,
  calculator,
  calculator2,
  products,
  salaryCalculator
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userChoice: UserChoiceEnum = 0;

  /* get userChoiceEnum() : typeof UserChoiceEnum  {
    return UserChoiceEnum;
  } */
  
  readonly userChoiceEnum = UserChoiceEnum

  setUserChoice(userChoice: UserChoiceEnum) {
    this.userChoice = userChoice;
  }


  
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
