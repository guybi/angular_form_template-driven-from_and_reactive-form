import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.css']
})
export class Form01Component {

  //Template-driven from
  model = {
    firstName: "",
    lastName: ""
  }

  onSubmit(value: any) {
    console.log(value);
  }
  
}
