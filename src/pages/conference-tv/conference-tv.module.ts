import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConferenceTvPage } from './conference-tv';

@NgModule({
  declarations: [
    ConferenceTvPage,
  ],
  imports: [
    IonicPageModule.forChild(ConferenceTvPage),
  ],
})
export class ConferenceTvPageModule {}
