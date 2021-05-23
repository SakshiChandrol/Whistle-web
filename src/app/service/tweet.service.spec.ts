import { TestBed,async , inject, flush  } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { TweetService } from './tweet.service';
import { Tweet } from '../model/tweet';

describe('TweetService', () => {
  let service: TweetService;
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TweetService]
    });
    service = TestBed.inject(TweetService);
    httpClient=TestBed.inject(HttpClient);
    httpTestingController=TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get all Tweets successfully', () => {
    const dummyTweet:Tweet[] = [{ id: "1234567", parentId: null, userid: "AnshulChandrol", message: "Hello Whistle, this is Anshul i like using this", postedAt: null,likes :2
      },{ id: "1", parentId: null, userid: "PrakashChandrol", message: "Good Morning!!!! stay safe", postedAt: " 1h ago",likes : 5}];
    service.getTweets().subscribe(data => {
    expect(data).toEqual(dummyTweet);
    console.log(data)
    });
    const req = httpTestingController.expectOne(`http://localhost:8090/api/v1.0/tweets/all`, 'call to api');
    expect(req.request.method).toBe('GET');
    req.flush(dummyTweet);
    httpTestingController.verify();
  });
   
  it('should get Users Tweets successfully', () => {
    const userid="AnshulChandrol";
    const dummyTweet:Tweet[] = [{ id: "1234567", parentId: null, userid: "AnshulChandrol", message: "Hello Whistle, this is Anshul i like using this", postedAt: null,likes :2
      }];
    service.getAllTweets(userid).subscribe(data => {
    expect(data).toEqual(dummyTweet);
    console.log(data)
    });
    const req = httpTestingController.expectOne(`http://localhost:8090/api/v1.0/tweets/AnshulChandrol`, 'call to api');
    expect(req.request.method).toBe('GET');
    req.flush(dummyTweet);
    httpTestingController.verify();
  });
   
  it('should get all replyed Tweets successfully', () => {
    const userid="AnshulChandrol";
    const id="1234567";
    const dummyTweet:Tweet[] = [{ id: "1234567", parentId: null, userid: "AnshulChandrol", message: "Hello Whistle, this is Anshul i like using this", postedAt: null,likes :2
      }];
    service.onViewReply(userid,id).subscribe(data => {
    expect(data).toEqual(dummyTweet);
    console.log(data)
    });
    const req = httpTestingController.expectOne(`http://localhost:8090/api/v1.0/tweets/AnshulChandrol/replyed/1234567`, 'call to api');
    expect(req.request.method).toBe('GET');
    req.flush(dummyTweet);
    httpTestingController.verify();
  });
  it('should post the tweet', () => {
    const userid="AnshulChandrol"
    const dummyTweet =  
      { id: "1234567", parentId: null, userid: "AnshulChandrol", message: "Hello Whistle, this is Anshul i like using this", postedAt: null,likes :2 };
    service.onPost(dummyTweet,userid).subscribe((data: any) => {
      console.log(data)
      expect(data).toBe(dummyTweet);
      });
    const req = httpTestingController.expectOne(`http://localhost:8090/api/v1.0/tweets/AnshulChandrol/add`,'post tweet');
    expect(req.request.method).toBe('POST');
    req.flush(dummyTweet);
    httpTestingController.verify();
  });

  it('should reply to tweet', () => {
    const userid="AnshulChandrol";
    const id ="1234567"
    const dummyTweet =  
      { id: "1234567", parentId: null, userid: "AnshulChandrol", message: "Hello Whistle, this is Anshul i like using this", postedAt: null,likes :2 };
    service.onReply (dummyTweet,'AnshulChandrol',`test1234` ).subscribe((data: any) => {
      console.log(data)
      expect(data).toBe(dummyTweet);
      });
    const req = httpTestingController.expectOne(`http://localhost:8090/api/v1.0/tweets/AnshulChandrol/reply/test1234`,'reply tweet');
    expect(req.request.method).toBe('POST');
    req.flush(dummyTweet);
    httpTestingController.verify();
   });

   it('should be able to edit tweet', () => {
    const dummyTweet =  
    { id: "1234567", parentId: null, userid: "AnshulChandrol", message: "Hello Whistle, this is Anshul i like using this", postedAt: null,likes :2 };
    service.onEdit (dummyTweet,'AnshulChandrol',`1234567` ).subscribe((data: any) => {
      console.log(data)
      expect(data).toBe(dummyTweet);
      });
    const req = httpTestingController.expectOne(`http://localhost:8090/api/v1.0/tweets/AnshulChandrol/update/1234567`,'edit tweet');
    expect(req.request.method).toBe('PUT');
    req.flush(dummyTweet);
    httpTestingController.verify();
   });
   it('should be able to like a tweet', () => {
    const dummyTweet =  
    { id: "1234567", parentId: null, userid: "AnshulChandrol", message: "Hello Whistle, this is Anshul i like using this", postedAt: null,likes :3 };
    service.onLike (dummyTweet,'AnshulChandrol',`1234567` ).subscribe((data: any) => {
      console.log(data)
      expect(data).toBe(dummyTweet);
      });
    const req = httpTestingController.expectOne(`http://localhost:8090/api/v1.0/tweets/AnshulChandrol/like/1234567`,'like tweet');
    expect(req.request.method).toBe('PUT');
    req.flush(dummyTweet);
    httpTestingController.verify();
   });
});
