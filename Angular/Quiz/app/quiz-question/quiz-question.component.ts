import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RouterModule,Routes} from '@angular/router';
import {QuizDataService} from '../quiz-data.service';
import { RadioControlValueAccessor ,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {

  pageNo;
  quizQuesDetail;
  totalQuestion;
  result:number;


  constructor(private route: ActivatedRoute, private quizDetail:QuizDataService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      {
        this.pageNo=params['quesNo'];
        this.quizQuesDetail=this.quizDetail.getQuestionByNo(this.pageNo);

       this.totalQuestion=this.quizDetail.getTotalNoOfQuestion();
      
       }
    
    
    )
  }
  updateAns(quizQuesNo:any,option:string,optionIndex:any){
      this.quizDetail.updateAns(quizQuesNo,option,optionIndex);
   
 

  }

  isSelected(quizQuesNo,optionIndexCurrent){
    console.log("Question::"+quizQuesNo+"optionIndexCurrent"+optionIndexCurrent);
   return this.isSelected(quizQuesNo,optionIndexCurrent);

    
  }
 

  

}
