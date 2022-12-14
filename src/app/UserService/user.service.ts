import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const HttpUploadOptions = {
  headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  postPatient(formData : FormData):Observable<any>
  {
    
        
     return this.http.post<any>("http://localhost:5678/dietician/patient",formData);
   
  }
  getPatient()
  {
    return this.http.get<any>("http://localhost:5678/dietician/patient");
  }
}
