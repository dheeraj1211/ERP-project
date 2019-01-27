import { Component, OnInit, Input } from '@angular/core';
import { Array } from '../array'
@Component({
  selector: 'app-selfservice1',
  templateUrl: './selfservice1.component.html',
  styleUrls: ['./selfservice1.component.css']
})
export class Selfservice1Component implements OnInit {
 top:string[]=["Dasboard","Self Service","Service Request","Human Resource","Appraisals","Recruitment",
     "Analytics","Logs","Modules","Expenses","Assests","Disciplinary","Time","Background Check","Organisation",
     "Site Configuration"];

     down:string[]=["My Details","Leave Request","My Leave","Employee Leave","My Holiday Calender","My Team"];

     @Input() public data;

  constructor() { }

  ngOnInit() {
  }

}
