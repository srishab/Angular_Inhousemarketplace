import { Component, OnInit } from '@angular/core';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requirement-list',
  templateUrl: './requirement-list.component.html',
  styleUrls: ['./requirement-list.component.css']
})
export class  RequirementListComponent implements OnInit {

  requirements:  Requirement[];

  constructor(private  requirementService:  RequirementService,
    private router: Router) { }

  ngOnInit(): void {
    this.getRequirements();
  }

  private getRequirements(){
    this.requirementService.getRequirementList().subscribe(data => {
      this.requirements = data;
    })
  }

  updateRequirement(resId: number){
    this.router.navigate(['update-requirement', resId]);
  }

}
