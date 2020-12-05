import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BbBackToTopComponent } from './components/bb-back-to-top/bb-back-to-top.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  declarations: [BbBackToTopComponent],
  exports: [BbBackToTopComponent],
  imports: [
    CommonModule,
    NgxPageScrollModule,
    // NgxPageScrollCoreModule.forRoot()

  ]
})
export class NavigationModule {
}

