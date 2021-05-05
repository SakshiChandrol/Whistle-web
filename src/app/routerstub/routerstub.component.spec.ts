import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterstubComponent } from './routerstub.component';

describe('RouterstubComponent', () => {
  let component: RouterstubComponent;
  let fixture: ComponentFixture<RouterstubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterstubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterstubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
