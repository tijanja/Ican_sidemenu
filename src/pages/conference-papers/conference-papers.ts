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
        {plenary:"Plenary 4",title:"Cybersecurity: What Chartered Accountants Need To Know",synopsis:"This paper will provide an overview of Cybercrime and Cyber-security. It willdefine the concept of cybercrime; identify reasons for cyber-crime and its eradication; identify those likely to get involved and the reasons for their involvement. The paper will proffer suggestions on how to step up cyber security and make recommendations that would help check the increasing rate of cyber-crimes in Nigeria. The paper will also list some of the challenges cybercrime pose for chartered accountants and present practical and logical solutions to these threats."},
        {plenary:"Plenary 5",title:"Cancer And Its Early Detection",synopsis:"Getting a cancer diagnosis and going through treatment can be overwhelming. Suddenly, the patient’s life is turned upside down and several uncertainties seem to lie ahead.Early detection of cancer greatly increases the chances for successful treatment. Common signs for early detection of cancer include lumps, sores that fail to heal, abnormal bleeding, persistent indigestion, and chronic hoarseness.This paper will expose participants to the essential steps one should take to avoid or reduce the incidence of cancer. It will also provide tips for cancer patients, their friends and relatives on how to deal with the stress associated with treatment. \n WEARABLE TECHNOLOGY FOR STRESS MANAGEMENT \n" +
        "Stress has become such a prevalent part of life, that it is estimated that one in every fivepatients report to have “extreme stress” and more than 50% of doctor’s visits are now for stress related ailments. Stress affects every part of our lives - work productivity, relationships, sleep, weight gain, heart health and emotional wellbeing. The earlier one develops the right attitudes to stress management the better. Wearable fitness devices for stress management is fast gaining reputation as a lifesaver (literally) for everyone out there in today’s modern world.In the world of wearable technology, tracking fitness activity is typically the main goal. However, a growing number of devices are trying to gauge one’s state of mind. Reducing stress levels can not only make one feel better in the short term, but may also protect one’s health in long-term.\n"},
        {plenary:"Plenary 6",title:"Young Professionals: Emerging Leaders Of Change Aand Nation Building",synopsis:"Unlike the young workers of the 1980s who were often vilified for being self-absorbed and status seeking, today’s young professionals are often described as smart, optimistic team players who want to make a difference in the world. Thanks to their desire to be connected and to serve a social purpose, young professionals (usually those within the 18 to34 age bracket) are often called the “purpose-driven generation.” They believe that organizations should have a positive impact on society, so they have high expectations of organizations in terms of sustainability and social responsibility. While business networking remains relevant—especially to young adults who will change jobs multiple times in their life - it often takes a back seat to social networking.  It is therefore important to connect to this group of future leaders, study their operations, know their preferences, and create incentives that will attract their participation in nation building. "},
        {plenary:"Workshop 1",title:"INTEGRATED REPORTING: THE FUTURE OF FINANCIAL REPORTING",synopsis:"Historical financial statements are essential in corporate reporting, particularly for compliance purposes, but do not provide enough information regarding business value. Users need a more forward-looking focus without the need for companies to provide their own forecasts and projections. Business entities across the world have recognized the benefits of showing a fuller picture of company value and a more holistic view of the organisation. The primary purpose of an integrated report is to explain to providers of financial capital how an organisation creates value over time. How does an integrated report benefit all stakeholders interested in a company’s ability to create value, including employees, customers, suppliers, business partners, local communities, legislators, regulators and policymakers ...? This paper will espouse the benefits of integrated reporting and its indispensability as accountants prepare for the future."},
        {plenary:"Workshop 2",title:"ISLAMIC FINANCE: GLOBAL TREND AND POTENTIALS FOR CHARTERED ACCOUNTANTS",synopsis:"From humble beginnings in the 1990’s, Islamic finance has become a trillion-dollar industry. The market consensus is that Islamic finance has a bright future, owing to favorable demographics and rising incomes in Muslim communities. Despite skepticism regarding accommodation between Islamic and global finance, leading banks are buying Islamic bonds and forming subsidiaries specifically to conduct Islamic finance. Special laws have been enacted in major non-Muslim financial centers such as London, Tokyo, Zurich, Sydney, and Hong Kong to facilitate the operation of Islamic banks and associated financial institutions, as well as amending laws to open up to non-resident Islamic investors. Are there challenges in reconciling financial reporting standards with religious principles for Islamic banks and regulators? This paper will provide insights intoIslamic finance, identify opportunities for chartered accountants and encourage the consideration of other alternative financing models."},
        {plenary:"Workshop 3",title:"",synopsis:""},
        {plenary:"Workshop 4",title:"",synopsis:""}
        ];
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ConferencePapersPage');
  }

  akinde(a: number)
  {
    //console.log(a);
    let plenary : any =this.plenaries[a];
    this.navCtrl.push(PlenaryViewPage,{plenary:plenary.plenary,title:plenary.title,synopsis:plenary.synopsis});
  }

  getWorkShop()
  {

  }

}
