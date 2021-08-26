import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-add-requirement',
  templateUrl: './add-requirement.component.html',
  styleUrls: ['./add-requirement.component.css']
})
export class AddRequirementComponent implements OnInit {
  requirement: Requirement = new Requirement();

  constructor(private requirementService: RequirementService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveRequirement(){
    this.requirementService.addRequirement(this.requirement).subscribe(data =>{
      console.log(data);
      this.goToRequirementList();
    },
    error => console.log(error));
  }

  goToRequirementList(){
    this.router.navigate(['/requirements'])

  }

  onSubmit(){
    console.log(this.requirement);
    this.saveRequirement();
  }

}
