import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routerstub',
  templateUrl: './routerstub.component.html',
  styleUrls: ['./routerstub.component.css']
})
export class RouterstubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    getCurrentNavigation(){
      return {
         extras: {
            state:{
              locationId: 'someId',
              locationName: 'someName'
            }
          }
        }
      
   }
}
