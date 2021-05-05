import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TweetModRoutingModule } from './tweet-mod-routing.module';
import { TweetModComponent } from './tweet-mod.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { ReplyComponent } from './reply/reply.component';


@NgModule({
  declarations: [TweetModComponent, EditComponent, ReplyComponent],
  imports: [
    CommonModule,
    TweetModRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TweetModModule { }
