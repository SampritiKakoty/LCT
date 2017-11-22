import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDetailComponentComponent } from './prod-detail-component.component';

describe('ProdDetailComponentComponent', () => {
  let component: ProdDetailComponentComponent;
  let fixture: ComponentFixture<ProdDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
