import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleOptionComponent } from './components/multiple-option/multiple-option.component';
import { BarProgressComponent } from './components/bar-progress/bar-progress.component';
import { CorrectMessageComponent } from './components/correct-message/correct-message.component';



@NgModule({
  declarations: [
    MultipleOptionComponent,
    BarProgressComponent,
    CorrectMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MultipleOptionComponent,
    BarProgressComponent,
    CorrectMessageComponent
  ]
})
export class SharedModule { }
