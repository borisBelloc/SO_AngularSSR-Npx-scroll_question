import { Component, HostBinding, HostListener, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bb-back-to-top',
  templateUrl: './bb-back-to-top.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BbBackToTopComponent {

  @HostBinding('class.show') show = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.show =  window.document.documentElement.scrollTop > 60;
  }

}
