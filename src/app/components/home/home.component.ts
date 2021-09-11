import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isTestMenu : boolean = true;
  constructor(private communicationService : CommunicationService){ }
  ngOnInit(): void { 
    this.communicationService.testMenu.subscribe(value => this.isTestMenu = value )
  }

}
