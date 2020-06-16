import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ang-forms',
  templateUrl: './ang-forms.component.html',
  styleUrls: ['./ang-forms.component.css']
})
export class AngFormsComponent implements OnInit {

  name = new FormControl('')

  data = []

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(){
    console.log(this.name.value)
    this.data.push(this.name.value)
  }

}
