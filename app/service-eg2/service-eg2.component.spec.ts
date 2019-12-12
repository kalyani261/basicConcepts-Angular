import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEg2Component } from './service-eg2.component';

describe('ServiceEg2Component', () => {
  let component: ServiceEg2Component;
  let fixture: ComponentFixture<ServiceEg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
