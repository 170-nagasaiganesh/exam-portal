import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable({
    'providedIn' :'root'
})
export class CommunicationService{

    @Output() testMenu : EventEmitter<boolean> = new EventEmitter();
    @Output() finishedTestReport : EventEmitter<any> = new EventEmitter();

    test : any;
    testId : any;
    finishedTests : any = [];
    
    constructor(){}
    setTest(test : any, id : number){
        this.test = test;
        this.testId = id;
        this.testMenu.emit(false);
    }
    getTest(){
        return this.test;
    }
    getData(){
        return this.finishedTests;
    }
    storeResult(data : any){
        this.finishedTests.push(data);
    }
}