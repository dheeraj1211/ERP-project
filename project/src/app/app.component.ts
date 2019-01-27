import { Component } from '@angular/core';
import {About}       from './about';
import {information} from './mock-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  info=information;
}
