import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastPresidentPage } from './past-president';

@NgModule({
  declarations: [
    PastPresidentPage,
  ],
  imports: [
    IonicPageModule.forChild(PastPresidentPage),
  ],
})
export class PastPresidentPageModule {}
