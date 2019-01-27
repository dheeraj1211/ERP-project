import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewmoduleModule } from './newmodule/newmodule.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NewmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
