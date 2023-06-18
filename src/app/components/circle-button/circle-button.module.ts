import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleButtonComponent } from './circle-button.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CircleButtonComponent
  ],
  exports: [
    CircleButtonComponent
  ]
})
export class ModeToggleModule { }
