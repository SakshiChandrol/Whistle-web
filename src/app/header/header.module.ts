import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderNodComponent } from './header-nod/header-nod.component';


@NgModule({
  declarations: [ HeaderNodComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports: [HeaderNodComponent
  ]
})
export class HeaderModule { }
