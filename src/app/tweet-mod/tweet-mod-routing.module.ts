import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ReplyComponent } from './reply/reply.component';

import { TweetModComponent } from './tweet-mod.component';

const routes: Routes = [{ path: 'tweet', component: TweetModComponent },
{ path: 'edit', component: EditComponent },
{ path: 'reply', component: ReplyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TweetModRoutingModule { }
