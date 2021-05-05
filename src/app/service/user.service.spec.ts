import { TestBed,async , inject, flush  } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { UserService } from './user.service';
import { User } from '../model/user';

describe('UserService', () => {
  let service: UserService;
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
      providers: [UserService]});
    service = TestBed.inject(UserService);
    httpClient=TestBed.inject(HttpClient);
    httpTestingController=TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get all Users successfully', () => {
    const dummyUsers:User[] = [{id: "104", fname: "mini", lname: "chandrol", email: "mini1234@gmail.com", loginid: "mini12345",phone :"7389493428",pwd:"test1234",cpwd:"test1234"},
    { id: "12346", fname: "Sakshi", lname: "Chandrol", email: "sakshi@gmail.com", loginid: "AnshulChandrol",phone :"7389493428",pwd:"test1234",cpwd:"test1234"}];
    service.allUser().subscribe(data => {
    expect(data).toEqual(dummyUsers);
    console.log(data)
    });
    const req = httpTestingController.expectOne(`http://localhost:8089/api/v1.0/tweets/users/all`, 'call to api');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);
    httpTestingController.verify();
  });
  it('should get find users successfully', () => {
    const dummyUser:User = {id: "104", fname: "mini", lname: "chandrol", email: "mini1234@gmail.com", loginid: "mini12345",phone :"7389493428",pwd:"test1234",cpwd:"test1234"};
    
    service.findUser(`AnshulChandrol`).subscribe(data => {
    expect(data).toEqual(dummyUser);
    console.log(data)
    });
    const req = httpTestingController.expectOne(`http://localhost:8089/api/v1.0/tweets/user/search/AnshulChandrol`, 'call to api');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUser);
    httpTestingController.verify();
  });
  it('should register', () => {
    const userid="AnshulChandrol"
    const dummyUser:User = {id: "104", fname: "mini", lname: "chandrol", email: "mini1234@gmail.com", loginid: "mini12345",phone :"7389493428",pwd:"test1234",cpwd:"test1234"};
    service.onRegister(dummyUser).subscribe((data: any) => {
      console.log(data)
      expect(data).toBe(dummyUser);
      });
    const req = httpTestingController.expectOne(`http://localhost:8089/api/v1.0/tweets/register`,'register');
    expect(req.request.method).toBe('POST');
    req.flush(dummyUser);
    httpTestingController.verify();
  });
});
