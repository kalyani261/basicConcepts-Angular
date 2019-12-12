import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidegComponent } from './valideg.component';

describe('ValidegComponent', () => {
  let component: ValidegComponent;
  let fixture: ComponentFixture<ValidegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
