import { Component, Input, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  tests : any;
  finishedTests : any = [];

  constructor(private dataService : DataService, private communicationService : CommunicationService) { }

  ngOnInit(): void {
   
    this.finishedTests = this.communicationService.getData();
    this.dataService.fetchTests()
      .subscribe(response => {
        this.tests = response;
        this.tests = this.tests.tests;
      });
    
  }

  startTest(i : number){
    this.communicationService.setTest(this.tests[i], i);
  }

  isTestFinished(position : number){

    let score = null;
    this.finishedTests.forEach((test : any) => {
      if(test.id === position){
        score = test.score;
        return;
      }
    });
    return score;
  }

}
