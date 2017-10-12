import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Question} from "./question";
import {AuthService} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage implements OnInit {
  ngOnInit(): void {
    //this.getName();


  }

  question = new Question();
  questionNumber: number;
  totalQuestNumber: number =50;
  totalAnswered: number = 0;
  seminalQuestion: string;



  @ViewChild('dataContainer') dataContainer: ElementRef;

  listenFunc: Function;
  @Input() size: number | string;
  a = this.randomise(0, this.question.questionList.length);

  @Output() questionChange = new EventEmitter<string>();

  loading: any;
  memberIdToSend: any;
  memberId: string;
  data: any;
  option: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, elementRef: ElementRef, public authService: AuthService, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

    this.getQuestion();

  }

  getQuestion()
  {

    // if (this.totalAnswered < this.totalQuestNumber) {
    //   this.questionNumber = this.randomise(0, this.question.questionList.length);
    //   this.totalAnswered++;
    //   console.log(this.totalAnswered);
    //   this.seminalQuestion = this.question.getQuestion(this.questionNumber);
    // }
    // else {
    //   console.log(this.totalAnswered);
    // }

    this.memberId = localStorage.getItem("memberId");
    this.memberIdToSend = {controller:'ican',action:'getQuestion',member_: this.memberId};

    // this.listenFunc = renderer.listen(elementRef.nativeElement, 'click', (event) => {
    //   //console.log(event);
    //   this.getName();
    // });

    // this.getQuestion();
    this.showLoader();
    this.authService.getQuestion(this.memberIdToSend).then((result) => {
        this.loading.dismiss();
        this.data = result;
        this.seminalQuestion = this.data.data.question_text;
        this.option = ["A.  "+this.data.data.option_1,"B. "+this.data.data.option_2,"C. "+this.data.data.option_3];
        this.totalAnswered++;
        console.log(result);
      },
      (err) => {
        this.loading.dismiss();
        console.log(err);
      });
  }

  getUpdate(event, answer: string, question: string)
  {
    //this.size = this.question.getQuestion(this.randomise(0,this.question.questionList.length));
    //this.questionChange.emit(this.size);
    // console.log(question+" "+answer);
    //this.questionNumber = this.randomise(0,this.question.questionList.length);
    // this.dataContainer.nativeElement.innerHTML = "<h1>"+this.question.getQuestion(this.questionNumber)+"</h1>";

      this.authService.uploadAnswer({controller:'ican',action:'submitAnswer',memberId:this.memberId,answer:answer,question:question}).then((result)=>{
        this.getQuestion();
      },(err)=>{

      });


  }


  public randomise(min, max): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });
  }
}
