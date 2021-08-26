import { Component, OnInit } from '@angular/core';
import { RequirementService } from '../requirement.service';
import { Requirement } from '../requirement';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-requirement',
  templateUrl: './update-requirement.component.html',
  styleUrls: ['./update-requirement.component.css']
})
export class UpdateRequirementComponent implements OnInit {

  resId: number;
  requirement: Requirement = new Requirement();
  constructor(private requirementService: RequirementService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.resId = this.route.snapshot.params['resId'];
  
      this.requirementService.getRequirementByresId(this.resId).subscribe(data => {
        this.requirement = data;
      }, error => console.log(error));
    }
  
    onSubmit(){
      this.requirementService.updateRequirement(this.resId, this.requirement).subscribe( data =>{
        this.goToEmployeeList();
      }
      , error => console.log(error));
    }
  
    goToEmployeeList(){
      this.router.navigate(['/requirements']);
    }
  }
