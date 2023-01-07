import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { ReadpatientsService } from '../readpatients.service';
import {Patient} from '../patient';

@Component({
  selector: 'app-readpatients',
  templateUrl: './readpatients.component.html',
  styleUrls: ['./readpatients.component.css']
})
export class ReadpatientsComponent implements OnInit {
  patientSearchForm : FormGroup
  visibility: boolean = false;
  patients: Patient[];
  patient: Patient={};
  submitted: boolean;
  
  isLoaded = true;

  constructor(private readPatientsService :ReadpatientsService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.patientSearchForm= this.fb.group({
       Name : [''],
       Email : ['',Validators.email],
       PhoneNo :['',Validators.pattern('[0-9]{10,12}')]  /* include -+() in first set to include +,-,() in phone no validation */
    })
    this.getPatients();
    console.log('ngOnInit Ends');
      //  console.log( this.patients[0].FirstName ); 
      //this.patients.forEach(function(e:Patient){console.log(e)}); 
  }

  openNew() {
    this.patient = {};
    this.submitted = false;
  }

  onSearchSubmit( patientSearchForm:FormGroup){
    if(this.patientSearchForm.valid ){
      console.log(this.patientSearchForm.value);
    }
    
  }

  private getPatients() {
    this.visibility = true;
     
    this.isLoaded = false;
    this.readPatientsService.getPatients().subscribe ((res) => {
      console.log('Patient service response ', res);
      this.patients = res;
      this.visibility = false;
      this.isLoaded = true;
    }); 
  }

}
