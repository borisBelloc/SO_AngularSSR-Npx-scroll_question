import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';


@NgModule({
  declarations: [FourOhFourComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
