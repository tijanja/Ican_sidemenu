import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlenaryViewPage } from './plenary-view';

@NgModule({
  declarations: [
    PlenaryViewPage,
  ],
  imports: [
    IonicPageModule.forChild(PlenaryViewPage),
  ],
})
export class PlenaryViewPageModule {}
