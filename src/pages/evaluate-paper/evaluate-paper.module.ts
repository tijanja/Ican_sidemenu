import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvaluatePaperPage } from './evaluate-paper';
import {Ionic2RatingModule} from "ionic2-rating";

@NgModule({
  declarations: [
    EvaluatePaperPage,
  ],
  imports: [
    IonicPageModule.forChild(EvaluatePaperPage),
    Ionic2RatingModule
  ],
})
export class EvaluatePaperPageModule {}
