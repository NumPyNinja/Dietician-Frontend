import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../UserService/user.service';
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  patientForm !: FormGroup;
  router: any;
  public userFile: any = File;

  constructor(private fb:FormBuilder, private userService : UserService, private dialogRef:MatDialogRef<DialogComponent>) { }

    ngOnInit(): void {
      this.patientForm= this.fb.group({
        FirstName : ['',Validators.required],
        LastName : ['',Validators.required],
        Email : ['',Validators.required],
        ContactNumber :['',Validators.required],
        Allergy :['',Validators.required],
        FoodCategory: ['',Validators.required]
  
  
      })
    }

    addPatient(patientForm:FormGroup){

     
      if(this.patientForm.valid ){
       
        const formData = new FormData();
        
        formData.append("patientInfo", JSON.stringify(this.patientForm.value));
        formData.append("file", this.userFile);
        
        this.userService.postPatient(formData).subscribe({
          next:(res) => {
            alert("Patient added Successfully!");
            this.patientForm.reset();
            this.dialogRef.close("Patient's details saved.");
          },
         error:() =>
          {
          
            alert("Error adding patient details.");
          }
        })
   
      }
      else {
        this.validateFormData(this.patientForm);
      }
    }

      saveFile(event:any ) {
    
        const file =event?.target.files[0];
        console.log(file);
        this.userFile = file;
       
      }
      

      validateFormData(patientForm:FormGroup){
        Object.keys(patientForm.controls).forEach(element => {
            const control = patientForm.get(element);
        });
      }
    
    }