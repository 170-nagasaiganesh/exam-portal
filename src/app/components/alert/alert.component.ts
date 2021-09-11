import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  home : boolean = false;
  @Input() message : string = "";
  
  constructor(private router : Router, private communcationService : CommunicationService){}
  
  onClose() {
    this.home = true;
    this.communcationService.testMenu.emit(true);
    this.communcationService.storeResult({id : this.communcationService.testId, score : this.message});
    this.router.navigate(['']);
  }

}
