import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbBackToTopComponent } from './bb-back-to-top.component';

describe('BackToTopComponent', () => {
  let component: BbBackToTopComponent;
  let fixture: ComponentFixture<BbBackToTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbBackToTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbBackToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
