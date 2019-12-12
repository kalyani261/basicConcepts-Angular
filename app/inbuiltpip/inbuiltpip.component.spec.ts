import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltpipComponent } from './inbuiltpip.component';

describe('InbuiltpipComponent', () => {
  let component: InbuiltpipComponent;
  let fixture: ComponentFixture<InbuiltpipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbuiltpipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbuiltpipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
