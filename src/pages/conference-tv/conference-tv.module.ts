import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConferenceTvPage } from './conference-tv';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    ConferenceTvPage,
  ],
  imports: [
    IonicPageModule.forChild(ConferenceTvPage),
    PipesModule
  ],
})
export class ConferenceTvPageModule {}
