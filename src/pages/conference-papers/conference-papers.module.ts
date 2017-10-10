import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConferencePapersPage } from './conference-papers';

@NgModule({
  declarations: [
    ConferencePapersPage,
  ],
  imports: [
    IonicPageModule.forChild(ConferencePapersPage),
  ],
})
export class ConferencePapersPageModule {}
