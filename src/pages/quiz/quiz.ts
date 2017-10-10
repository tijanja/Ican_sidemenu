import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Question} from "./question";

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
export class QuizPage implements OnInit{
  ngOnInit(): void {
    //this.getName();


  }
  question = new Question();
  questionNumber: number;
  totalQuestNumber: number;
  totalAnswered: number;
  seminalQuestion: string;

  @ViewChild('dataContainer') dataContainer: ElementRef;

  listenFunc: Function;
  @Input() size: number | string;
  a = this.randomise(0,this.question.questionList.length);

  @Output() questionChange = new EventEmitter<string>();

  constructor(public navCtrl: NavController, public navParams: NavParams,elementRef:ElementRef) {
    // this.listenFunc = renderer.listen(elementRef.nativeElement, 'click', (event) => {
    //   //console.log(event);
    //   this.getName();
    // });
    this.totalQuestNumber=10;
    this.totalAnswered =0;
    this.getQuestion();
  }

  getUpdate(event,answer:string,question:string)
  {
    //this.size = this.question.getQuestion(this.randomise(0,this.question.questionList.length));
    //this.questionChange.emit(this.size);
    // console.log(question+" "+answer);
    //this.questionNumber = this.randomise(0,this.question.questionList.length);
    // this.dataContainer.nativeElement.innerHTML = "<h1>"+this.question.getQuestion(this.questionNumber)+"</h1>";
    this.getQuestion();

  }

  getQuestion()
  {

    if(this.totalAnswered<this.totalQuestNumber)
    {
      this.questionNumber = this.randomise(0,this.question.questionList.length);
      this.totalAnswered++;
      console.log(this.totalAnswered);
      this.seminalQuestion= this.question.getQuestion(this.questionNumber);
    }
    else
    {
      console.log(this.totalAnswered);
    }

  }



  public randomise(min, max): number
  {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
