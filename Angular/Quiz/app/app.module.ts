import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {QuizDataService} from './quiz-data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { ResultsComponent } from './results/results.component';
import { RadioControlValueAccessor ,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizQuestionComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,FormsModule ,
    RouterModule.forRoot([
      {path: 'home', component : HomeComponent},
      {path: 'quiz',component: QuizQuestionComponent},
      {path: 'quiz/:quesNo',component: QuizQuestionComponent},
      {path: 'result',component: ResultsComponent},
    ])
     
  ],
  providers: [QuizDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
