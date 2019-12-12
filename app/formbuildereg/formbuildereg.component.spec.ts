import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderegComponent } from './formbuildereg.component';

describe('FormbuilderegComponent', () => {
  let component: FormbuilderegComponent;
  let fixture: ComponentFixture<FormbuilderegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormbuilderegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuilderegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
