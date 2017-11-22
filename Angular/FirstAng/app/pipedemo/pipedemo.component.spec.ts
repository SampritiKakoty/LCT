import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipedemoComponent } from './pipedemo.component';

describe('PipedemoComponent', () => {
  let component: PipedemoComponent;
  let fixture: ComponentFixture<PipedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
