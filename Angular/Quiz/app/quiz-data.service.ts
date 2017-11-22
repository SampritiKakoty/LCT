import { Injectable } from '@angular/core';

@Injectable()
export class QuizDataService {

  constructor() { 
  }

  correctAns=0;
  //
  unattempted=0;
 
    quizMasterData=[
      {questNo:1,quest:'Question1', option:['option1','option2','option3'],answer:'option1',userAns:'',optionIndex:'' },
      {questNo:2,quest:'Question2', option:['option1','option2'],answer:'option1',userAns:'' ,optionIndex:''},
      {questNo:3,quest:'Question3', option:['option1','option2'],answer:'option1',userAns:'',optionIndex:'' },
      {questNo:4,quest:'Question4', option:['option1','option2'],answer:'option1' ,userAns:'',optionIndex:''},
      {questNo:5,quest:'Question5', option:['option1','option2'],answer:'option1',userAns:'' ,optionIndex:''}
    ];

    getQuestionByNo(questionNo:number){
    return this.quizMasterData[questionNo-1];

    }

    getTotalNoOfQuestion(){
      return this.quizMasterData.length;
    }

    updateAns(quizQuesNo:any,optionChoosen:string,optionIndex:any){
      this.quizMasterData[quizQuesNo-1].userAns=optionChoosen;
      this.quizMasterData[quizQuesNo-1].optionIndex=optionIndex;
      


    }

    submitAll():number{
      
      for(var i=0;i<this.quizMasterData.length;i++){
        if(this.quizMasterData[i].answer==this.quizMasterData[i].userAns){
          this.correctAns=this.correctAns+1;
        }
      }
      return this.correctAns;
    }

    isSelected(quizQuesNo,optionIndexCurrent){
      console.log("quizQuesNo"+quizQuesNo+"optionIndexCurrent"+optionIndexCurrent);
      console.log("true or false"+this.quizMasterData[quizQuesNo-1].optionIndex==optionIndexCurrent);
      if(this.quizMasterData[quizQuesNo-1].optionIndex==optionIndexCurrent)
         return true;
      else false;
      
    }


  

}
