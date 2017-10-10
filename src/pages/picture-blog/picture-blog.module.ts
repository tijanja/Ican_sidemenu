import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PictureBlogPage } from './picture-blog';

@NgModule({
  declarations: [
    PictureBlogPage,
  ],
  imports: [
    IonicPageModule.forChild(PictureBlogPage),
  ],
})
export class PictureBlogPageModule {}
