import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoFor16NovComponent } from './compo-for16-nov.component';

describe('CompoFor16NovComponent', () => {
  let component: CompoFor16NovComponent;
  let fixture: ComponentFixture<CompoFor16NovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoFor16NovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoFor16NovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
