import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-code',
  templateUrl: './type-code.component.html',
  styleUrls: ['./type-code.component.css']
})
export class TypeCodeComponent implements OnInit {

  name = "HArdeep SIngh"
  data = true

  userData = ["a","sd","ssdaad","FSdg","rew"]

  tableData = [
    {
      id: 1,
      name: "Name 1"
    },
    {
      id: 2,
      name: "Name 2"
    },
    {
      id: 3,
      name: "dasfjhjcbnm,"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.name = "ABC"
  }

  public onClick(){
    console.log("Working")
    this.data = !this.data
  }


}
