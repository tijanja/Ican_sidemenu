import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommitteeListPage } from './committee-list';

@NgModule({
  declarations: [
    CommitteeListPage,
  ],
  imports: [
    IonicPageModule.forChild(CommitteeListPage),
  ],
})
export class CommitteeListPageModule {}
