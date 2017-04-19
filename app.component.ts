import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'Homework11-angular1!';
  componentCounterValue=105;

  counterChanged(e){
    this.componentCounterValue =e;
    return false;
  }
}
