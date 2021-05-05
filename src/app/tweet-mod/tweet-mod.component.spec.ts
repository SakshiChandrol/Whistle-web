import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterstubComponent } from '../routerstub/routerstub.component';

import { TweetModComponent } from './tweet-mod.component';

describe('TweetModComponent', () => {
  let component: TweetModComponent;
  let fixture: ComponentFixture<TweetModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetModComponent ],
      providers: [TweetModComponent, {provide: Router, useClass: RouterstubComponent}],
      imports: [ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule],
      schemas: [
        NO_ERRORS_SCHEMA
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
