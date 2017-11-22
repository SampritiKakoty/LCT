import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDuplicatecomponentComponent } from './prod-duplicatecomponent.component';

describe('ProdDuplicatecomponentComponent', () => {
  let component: ProdDuplicatecomponentComponent;
  let fixture: ComponentFixture<ProdDuplicatecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdDuplicatecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdDuplicatecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
