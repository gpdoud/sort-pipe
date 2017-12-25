import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SortPipe } from './sort-pipe';
import { SortDescPipe } from './sort-desc-pipe';


@NgModule({
  declarations: [
    AppComponent,
    SortPipe, SortDescPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
