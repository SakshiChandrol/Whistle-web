import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TweetService } from '../service/tweet.service';
import {HttpClientModule} from '@angular/common/http';


import { UserModComponent } from './user-mod.component';

describe('UserModComponent', () => {
  let component: UserModComponent;
  let fixture: ComponentFixture<UserModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModComponent ],
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
    fixture = TestBed.createComponent(UserModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
