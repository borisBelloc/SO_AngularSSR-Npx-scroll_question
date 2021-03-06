import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './components/public/public.component';

import { NavigationModule } from '../../modules/navigation/navigation.module';

@NgModule({
  declarations: [PublicComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    NavigationModule,
  ]
})
export class PublicModule { }
