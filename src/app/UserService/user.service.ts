import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  postPatient(data : any)
  {
    return this.http.post<any>("http://localhost:3000/patientList/",data)
    //return this.http.post<any>("http://localhost:5678/dietician/user",data);
  }
  getPatient()
  {
    return this.http.get<any>("http://localhost:3000/patientList/");
  }
}
