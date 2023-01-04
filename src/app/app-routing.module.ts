import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadpatientsComponent } from './readpatients/readpatients/readpatients.component';
//import { FileuploadingComponent } from './fileuploading/fileuploading.component';

const routes: Routes = [
  {path : 'readpatients', component:ReadpatientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
