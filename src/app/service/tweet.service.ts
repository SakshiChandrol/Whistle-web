import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../model/tweet';
import { User } from '../model/user';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TweetService {
  constructor(private http:HttpClient) { }

  getTweets() {
    return this.http.get<Tweet[]>("http://localhost:8089/api/v1.0/tweets/all");
  }
  getAllTweets(userid:string):Observable<Tweet[]>
   {
    
    return this.http.get<Tweet[]>("http://localhost:8090/api/v1.0/tweets/"+userid);
   }
   onViewReply(userid:string,id :string) : Observable<any>{ 
    return this.http.get<Tweet[]>("http://localhost:8090/api/v1.0/tweets/"+userid+"/replyed/"+id);
  }

  onPost(tweet: Tweet,userid:string) : Observable<any>{
    return this.http.post<Tweet>("http://localhost:8090/api/v1.0/tweets/"+userid+"/add",tweet);
  }
  onReply(tweet: Tweet,userid:string,id:string) : Observable<any>{
    return this.http.post<Tweet>("http://localhost:8090/api/v1.0/tweets/"+userid+"/reply/"+id,tweet);
  }
  onEdit(tweet: Tweet,userid:string,id :string) : Observable<any>{ 
    return this.http.put<Tweet>("http://localhost:8090/api/v1.0/tweets/"+userid+"/update/"+id,tweet);
  }
  onLike(tweet: Tweet,userid:string,id :string) : Observable<any>{ 
    return this.http.put<Tweet>("http://localhost:8090/api/v1.0/tweets/"+userid+"/like/"+id,tweet);
  }
  onDelete(userid:string,id :string) : Observable<any>{ 
    return this.http.delete<Tweet>("http://localhost:8090/api/v1.0/tweets/"+userid+"/delete/"+id);
  }

}
