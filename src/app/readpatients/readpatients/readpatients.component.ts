import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { ReadpatientsService } from '../readpatients.service';

@Component({
  selector: 'app-readpatients',
  templateUrl: './readpatients.component.html',
  styleUrls: ['./readpatients.component.css']
})
export class ReadpatientsComponent implements OnInit {
  patientSearchForm !: FormGroup

  constructor(private readPatientsService :ReadpatientsService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.patientSearchForm= this.fb.group({
       Name : [''],
       Email : ['',Validators.email],
       PhoneNo :['',Validators.pattern('[0-9]{10,12}')]  /* include -+() in first set to include +,-,() in phone no validation */
    })
  }

  onSearchSubmit( patientSearchForm:FormGroup){
    if(this.patientSearchForm.valid ){
      console.log("In submit script ");
      console.log(this.patientSearchForm.value);
    }
  }
}
