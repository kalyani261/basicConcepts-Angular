import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveEgComponent } from './reactive-eg.component';

describe('ReactiveEgComponent', () => {
  let component: ReactiveEgComponent;
  let fixture: ComponentFixture<ReactiveEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
