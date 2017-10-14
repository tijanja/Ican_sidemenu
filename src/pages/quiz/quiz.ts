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
  totalAnswered: number = 1;
  questionId: number;
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
    this.memberIdToSend = {controller:'ican',action:'getQuestion',memberId: this.memberId};

    // this.listenFunc = renderer.listen(elementRef.nativeElement, 'click', (event) => {
    //   //console.log(event);
    //   this.getName();
    // });

    // this.getQuestion();
    this.showLoader();
    this.authService.getQuestion(this.memberIdToSend).then((result) => {
        this.loading.dismiss();
        this.data = result;
        if(this.data.data.action)
        {
          this.seminalQuestion = this.data.data.nextQuest.question_text;
          this.questionId = this.data.data.nextQuest.id;
          this.option = ["A.  "+this.data.data.nextQuest.option_1,"B. "+this.data.data.nextQuest.option_2,"C. "+this.data.data.nextQuest.option_3];
          if(this.data.data.totalAnswered!=0)
          {
            this.totalAnswered = this.data.data.totalAnswered;
          }
        }
        else
        {
          alert(this.data.data.message);
        }



        console.log("question id = "+this.questionId);
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
    let param = {controller:'ican',action:'submitAnswer',memberId:this.memberId,answer:answer,questionid:question};

      this.authService.uploadAnswer(param).then((result)=>{
        //console.log(result);
        this.fetchQuestionFromReturnPromise(result);
        //this.getQuestion();
      },(err)=>{
          console.log(err);
      });

    //this.getQuestion();


  }

  fetchQuestionFromReturnPromise(question: any)
  {
    let check: boolean = question.data.action;
    if(check)
    {
      this.seminalQuestion = question.data.nextQuest.question_text;
      this.questionId = question.data.nextQuest.id;
      this.option = ["A.  "+question.data.nextQuest.option_1,"B. "+question.data.nextQuest.option_2,"C. "+question.data.nextQuest.option_3];
      this.totalAnswered++;
    }
    else
    {
      alert(question.data.message);
    }

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
