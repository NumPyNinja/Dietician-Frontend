import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { ApiService } from '../UserService/user.service';
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  patientForm !: FormGroup;
  router: any;
  

  constructor(private formBuilder:FormBuilder, private api : ApiService, private dialogRef:MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.patientForm= this.formBuilder.group({
      FirstName : ['',Validators.required],
      LastName : ['',Validators.required],
      Email : ['',Validators.required],
      ContactNumber :['',Validators.required],
      Allergy :['',Validators.required],
      FoodCategory: ['',Validators.required]


    })
  }
  addPatient(){
    if(this.patientForm.valid){
      this.api.postPatient(this.patientForm.value).subscribe({
        next:(res) => {
          alert("Patients added Successfully");
          this.patientForm.reset();
          this.dialogRef.close("Patients details saved");
        },
       error:() =>
        {
        
          alert("Error adding patient details.");
        }
      })
    }
  }
  

}
