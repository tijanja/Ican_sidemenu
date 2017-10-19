import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Question} from "./question";
import {AuthService} from "../../providers/auth-service/auth-service";
import { AlertController } from 'ionic-angular';

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
  image_src: string;
  checkImage: boolean = false;

  numQustRight:number = 0;
  numQustWrong:number = 0;



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
  isValid:boolean = true;
  correctAwser: number;
  result_of_question:string;
  answerFrom: any;
  questionFrom: string;
  isAwserPick: boolean = true;
  option2: Array<{option1:string,realValue:string,option3:string,answer:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, elementRef: ElementRef, public authService: AuthService, public loadingCtrl: LoadingController, public toastCtrl: ToastController,public alertCtrl: AlertController) {

    //document.getElementById("Button").
    this.getQuestion();

  }

  isInvalid()
  {
    return this.isValid;
  }

  getQuestion()
  {

    this.memberId = localStorage.getItem("memberId");
    this.memberIdToSend = {controller:'ican',action:'getQuestion',memberId: this.memberId};

    this.showLoader();
    this.authService.getQuestion(this.memberIdToSend).then((result) => {
        this.loading.dismiss();
        this.data = result;
        console.log(result);
        if(this.data.data.action)
        {
          this.seminalQuestion = this.data.data.nextQuest.question_text;
          this.questionId = this.data.data.nextQuest.id;
          this.correctAwser = this.data.data.nextQuest.answer;

          this.numQustWrong = this.data.data.rightWrong.numWrong;
          this.numQustRight = this.data.data.rightWrong.numRight;

          this.option = [{option:"A.  "+this.data.data.nextQuest.option_1,realValue:1},{option:"B. "+this.data.data.nextQuest.option_2,realValue:2},{option:"C. "+this.data.data.nextQuest.option_3,realValue:3}];
          if(this.data.data.totalAnswered!=0)
          {
            this.totalAnswered = this.data.data.totalAnswered;
          }
        }
        else
        {
          //this.presentAlert("Alert!",this.data.data.message);
          this.presentConfirm();

        }



        console.log("question id = "+this.questionId);
      },
      (err) => {
        this.loading.dismiss();
        console.log(err);
      });
  }

  getUpdate(event, answer: any, question: string)
  {
    if(this.isAwserPick)
    {
      this.isAwserPick = false;
      this.answerFrom = answer;
      this.questionFrom = question;
      this.isValid=false;

      if(this.correctAwser == answer.realValue)
      {
        this.checkImage =true
        this.numQustRight++;
        this.result_of_question = "Correct!: "+answer.option;
        this.image_src = "assets/ok.png";

      }
      else
      {

        let optionObject = this.option[this.correctAwser-1];
        this.image_src = "assets/error.png";
        this.numQustWrong++;
        this.result_of_question = "Wrong!, Correct option is "+optionObject.option;
        this.checkImage =true
      }

      let param = {controller:'ican',action:'submitAnswer',memberId:this.memberId,answer:this.answerFrom.option,realValue:this.answerFrom.realValue,questionid:this.questionFrom,numRight:this.numQustRight,numWrong:this.numQustWrong};


      this.authService.uploadAnswer(param).then((result)=>{
        //console.log(result);
        this.loading.dismiss();
        // this.fetchQuestionFromReturnPromise(result);
        //this.getQuestion();
      },(err)=>{
        this.loading.dismiss();
        console.log(err);
        this.loading.dismiss();
      });

    }

  }

  buttonUpdate()
  {
    //this.showLoader();
    this.isValid=true;
    this.result_of_question="";
    this.checkImage =false;
    this.isAwserPick = true;

    this.getQuestion();

  }

  fetchQuestionFromReturnPromise(question: any)
  {

    let check: boolean = question.data.action;
    if(check)
    {
      console.log(question);
      this.seminalQuestion = question.data.nextQuest.question_text;
      this.questionId = question.data.nextQuest.id;
      this.option = [{option:"A.  "+question.data.nextQuest.option_1,realValue:1},{option:"B. "+question.data.nextQuest.option_2,realValue:2},{option:"C. "+question.data.nextQuest.option_3,realValue:3}];
      this.totalAnswered++;

      this.numQustWrong = question.data.rightWrong.numWrong;
      this.numQustRight = question.data.rightWrong.numRight;
    }
    else
    {
      this.presentAlert("Alert!",question.data.message);
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

  presentAlert(title: string, message: string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  presentConfirm() {
    const alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to List your score on the Quiz score board for ranking?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.showLoader();
            let m = {controller:"ican",action:"shareScore",memberid:this.memberId};
            this.authService.shareQuizScore(m).then((result)=>
            {
              this.loading.dismiss();
              console.log(result)
              this.presentAlert("Done","Your score is now listed on the Quiz score board");
            },(err)=>
            {
              this.loading.dismiss();
              this.presentAlert("Error!","Please try again later");
            });
          }
        }
      ]
    });
    alert.present();
  }
}
