import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Selfservice1Component } from './selfservice1/selfservice1.component';

@NgModule({
  declarations: [Selfservice1Component],
  imports: [
    CommonModule
  ],
  exports:[Selfservice1Component]
})
export class NewmoduleModule { }
