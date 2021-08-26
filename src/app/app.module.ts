import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequirementListComponent } from './requirement-list/requirement-list.component';
import { AddRequirementComponent } from './add-requirement/add-requirement.component';
import { FormsModule } from '@angular/forms';
import { UpdateRequirementComponent } from './update-requirement/update-requirement.component';

@NgModule({
  declarations: [
    AppComponent,
    RequirementListComponent,
    AddRequirementComponent,
    UpdateRequirementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
