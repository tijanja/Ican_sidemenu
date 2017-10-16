import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AttendancePage} from "../attendance/attendance";
import {PlenaryViewPage} from "../plenary-view/plenary-view";

/**
 * Generated class for the ConferencePapersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conference-papers',
  templateUrl: 'conference-papers.html',
})
export class ConferencePapersPage {

  plenaries: Array<{plenary: string, title:string,synopsis:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
      this.plenaries = [
        {plenary:"Plenary 1",title:"The Future of the Accountancy Profession",synopsis:"Rapid operational changes in workflow and process in recent years have dramatically altered the scope of the accountant’s role. Additionally, as the digital universe doubles in size every other year, many accountants struggle to keep pace with the latest technology trends. Across the entire tax, accounting and audit practices, the forecast calls for even greater shifts in people, processes and technology. The future of the accounting profession will be largely determined by her response to escalating talent shortages and other challenges. This paper will provide an insight into some of the key global trends affecting the accounting profession; the impact of new regulations on businesses, practitioners and the academia; the skills and specialties needed to remain relevant; evolving career paths and other emerging issues in the years to come."},
        {plenary:"Plenary 2",title:"ICAN Accountability Index Reforming Public Finance Management for the Future",synopsis:"The concept of accountability in the public sector primarily evolves from the stewardship functions entrusted in government officials. In discharge of fiduciary roles, public officials are required to act in the best interest of the public and be accountable for their own actions. There is therefore a need for an independent oversight body to assess the quality of public sector activities and reporting. One veritable tool for such assessment is the Accountability Index involving the identification and application of key elements for the assessment of the efficiency and effectiveness of governments and their agencies in the management of available resources. ICAN has the capacity to provide direction in this regard. The Institute must therefore not just set the general and specific criteria for indexing governments and their agencies but also provide the framework for its institution in Nigeria."},
        {plenary:"Plenary 3",title:"The Future of Work and Youth Unemployment",synopsis:"Youth unemployment rate have risen considerably in recent years invoking fears of a ‘lost generation’ and the imposition of ‘scarring’ effects on later employment outcomes. It has a detrimental impact on individuals, economies and societies. It also impacts future employability and potential future earnings of young people and could cause poor health in, and the social exclusion of, some young people. This could easily lead to civil unrest and other socio-political issues. The need for a structured national response to the issue is therefore very urgent. The paper will critique efforts by past and present governments in Nigeria to address the issue and lead discussions on new options to achieve long-term solutions rather than quick fixes. "},
        {plenary:"Plenary 4",title:"Cybersecurity: What Chartered Accountants Need To Know",synopsis:""},
        {plenary:"Plenary 5",title:"Cancer And Its Early Detection",synopsis:""}
        ];
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ConferencePapersPage');
  }

  akinde(a: number)
  {
    console.log(a);
    let plenary : any =this.plenaries[a];
    this.navCtrl.push(PlenaryViewPage,{plenary:plenary.plenary,title:plenary.title,synopsis:plenary.synopsis});
  }

}
