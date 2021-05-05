import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/service/tweet.service';

@Component({
  selector: 'app-header-nod',
  templateUrl: './header-nod.component.html',
  styleUrls: ['./header-nod.component.css']
})
export class HeaderNodComponent implements OnInit {
 isLogin:boolean;
 logout:string;
  constructor() {
    
   }

  
  ngOnInit(): void {
    
  }

 

}
