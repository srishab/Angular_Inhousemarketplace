import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRequirementComponent } from './add-requirement/add-requirement.component';
import { RequirementListComponent } from './requirement-list/requirement-list.component';
import { UpdateRequirementComponent } from './update-requirement/update-requirement.component';

const routes: Routes = [
  {path: '', redirectTo: 'requirements', pathMatch: 'full'},
  {path: 'requirements', component: RequirementListComponent},
  {path: 'add-requirement', component: AddRequirementComponent},
  {path: 'update-requirement/:resId', component: UpdateRequirementComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
