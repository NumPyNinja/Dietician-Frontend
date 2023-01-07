import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';

 
@Injectable({
  providedIn: 'root'
})
export class ReadpatientsService {
  url: string =  "http://localhost:5678/dietician";  // '/api'

  constructor( private httpClient: HttpClient ) { }

  
  getPatients(): Observable<Patient[]> {
    console.log("In service ");
      return this.httpClient.get<Patient[]>(this.url + "/patient"); //http://localhost:5678/dietician/patient
  } 

 
}
