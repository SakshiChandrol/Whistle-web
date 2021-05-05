import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LoginService } from './service/login.service';
import { UserService } from './service/user.service';

import { UserGuradGuard } from './user-gurad.guard';

describe('UserGuradGuard', () => {
  let guard: UserGuradGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule],
      providers: [LoginService, UserGuradGuard]});
    guard = TestBed.inject(UserGuradGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
