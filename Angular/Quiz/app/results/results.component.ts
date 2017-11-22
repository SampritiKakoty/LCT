import { Component, OnInit } from '@angular/core';
import {QuizDataService} from '../quiz-data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  result;

  constructor(private quizDetail:QuizDataService) { }

  ngOnInit() {
    
      this.result=this.quizDetail.submitAll();
  
    

  }

}
