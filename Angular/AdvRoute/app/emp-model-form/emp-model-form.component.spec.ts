import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpModelFormComponent } from './emp-model-form.component';

describe('EmpModelFormComponent', () => {
  let component: EmpModelFormComponent;
  let fixture: ComponentFixture<EmpModelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpModelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
