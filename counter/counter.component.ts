import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
                <div>
                    <button (click) =
                    "decrement()">-</button>
                    {{ counterValue }}
                    <button (click) = "increment()" > + </button> <br\n>
                    Counter Value:{{ counterValue }}
                </div>
              `,
  styles : [`div {width : 30%; margin:
     0 auto; padding: 10px; border :
      1px solid red; }`],

})
export class CounterComponent  {
counterValue = 0;
  constructor() {
    this.counterChange = new EventEmitter();
  }
  @Input() set counter(value: number){
    if(value >0){
      this.counterValue= value;
    }
  }

  @Output() counterChange: EventEmitter<number>;

  decrement(){
    this.counterValue-=1;
    this.counterChanged(this.counterValue);
    return false;
  }

increment(){
  this.counterValue+=1;
  this.counterChanged(this.counterValue);
  return false;
}
private counterChanged(value:number){
  this.counterChange.emit(value);
}

}
