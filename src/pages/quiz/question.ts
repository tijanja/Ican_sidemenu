export class Question{

  questionList: string[]=["who's president of Nigeria?","Lagos is formal capital of which country","Who is the Current Governor of Lagos State?"];
  choiceAnserList:string[][]=[["D' Trump","Asad","Jacob Zuma","M' Buhari"],["Britain","Nigeria","Ghana","Portugal"],["Babatunde Raji Fashola","Amed Bola Tinubu","Akinwumi Ambode","Eng' Olujimi Sasore"]];
  correctAnserList:string[]=["M' Buhari","Nigeria","Akinwumi Ambode"];
  letters: string[]=["A.","B.","C.","D."];


  constructor()
  {
    //console.log(this.getName());
  }

  getName()
  {
    //return this.getQuestion("0");
  }

  getQuestion(qf:number)
  {
    let question: string = this.questionList[qf];
    return question;
  }

  getChoice1(qf:number)
  {
    let choice:string = this.choiceAnserList[qf][0];
    return choice;
  }
  getChoice2(qf:number)
  {
    let choice:string = this.choiceAnserList[qf][1];
    return choice;
  }
  getChoice3(qf:number)
  {
    let choice:string = this.choiceAnserList[qf][2];
    return choice;
  }
  getChoice4(qf:number)
  {
    let choice:string = this.choiceAnserList[qf][3];
    return choice;
  }


  getCorrectAnswer(qf:number)
  {
    let correctAnswer: string=this.correctAnserList[qf];
    return correctAnswer;
  }

}
