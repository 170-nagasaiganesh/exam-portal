import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  test : any;
  totalQuestions : number = 0;
  question : any;
  position : number = 0;

  checkPositions : number[] = []; 
  score = 0;
  testFinished : boolean = false;

  constructor(private communicationService : CommunicationService) { }

  ngOnInit(): void {
    this.test = this.communicationService.getTest();
    this.totalQuestions = this.test.questions.length;
    console.log(this.test);

    this.question = this.test.questions[0];
    this.position = 0;
  }
  calScore(response : any){
    if(this.question.type == "Multiple-Response"){
      if(JSON.stringify(this.question.correctOptionIndex) === JSON.stringify(this.checkPositions.sort())){
        this.score = this.score + 1;
      }
    } else {
      if(response === this.question.correctOptionIndex){
        this.score = this.score + 1;
      }
    } 
  }
  
  changeSelection(i : number){
    const index = this.checkPositions.indexOf(i, 0);
    if (index > -1) {
      this.checkPositions.splice(index, 1);
    } else {
      this.checkPositions.push(i);
    }
  }
  
  nextQuestion(testForm : NgForm){
    this.calScore(testForm.value.val);
    this.position = this.position + 1;
    this.question = this.test.questions[this.position];
    this.checkPositions = [];
  }

  previousQuestion(){
    this.position = this.position - 1;
    this.question = this.test.questions[this.position];
  }
  
  onSubmit(testForm : NgForm) {
    this.calScore(testForm.value.val);
    this.testFinished = true;
  }
}
