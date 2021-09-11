import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    'providedIn' :'root'
})
export class DataService{


    constructor(private http: HttpClient){}

    fetchTests(){
        return this.http
            .get('http://interviewapi.stgbuild.com/getQuizData');
    }
}