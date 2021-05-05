import { TestBed,async , inject, flush  } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { LoginService } from './login.service';
import { Login } from '../model/login';

describe('LoginService', () => {
  let service: LoginService;
  let mockLogin:Login=new Login();
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });
    service = TestBed.inject(LoginService);
    httpClient=TestBed.inject(HttpClient);
    httpTestingController=TestBed.inject(HttpTestingController);
  });

  it('should able to login', () => {
    const dummyUsers = { 
      loginid: "mini12345", pwd: "test1234" };
    service.onLogin(dummyUsers).subscribe((data: any) => {
      console.log(data)
      expect(data).toBe(dummyUsers);
      });
    const req = httpTestingController.expectOne(`http://localhost:8089/api/v1.0/tweets/login`,'login');
    expect(req.request.method).toBe('POST');
    req.flush(dummyUsers);
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be able to reset password', () => {
    
    service.onForget ('mini1234',`test1234` ).subscribe((data: any) => {
      console.log(data)
      expect(data).toBe(null);
      });
    const req = httpTestingController.expectOne(`http://localhost:8089/api/v1.0/tweets/mini1234/forget`,'reset password');
    expect(req.request.method).toBe('PUT');
    req.flush(null);
    httpTestingController.verify();
   });
  
});
