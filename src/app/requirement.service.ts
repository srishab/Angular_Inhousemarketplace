import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requirement } from './requirement';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {
  private baseURL = "http://localhost:2021/getallrequirements";
  private URL1 = "http://localhost:2021/addRequirement";
  private URL2 = "http://localhost:2021/updatereq";
  private URL3 = "http://localhost:2021/getreq{resId}";

  


  constructor(private httpClient: HttpClient) { }

  getRequirementList(): Observable<Requirement[]>{
    return this.httpClient.get<Requirement[]>(`${this.baseURL}`)
  }

  addRequirement(requirement: Requirement): Observable<Object>{
    return this.httpClient.post(`${this.URL1}`, requirement);
  }

  getRequirementByresId(resId: number): Observable<Requirement>{
    return this.httpClient.get<Requirement>(`${this.URL3}/${resId}`);
  }

  updateRequirement(resId: number, requirement: Requirement): Observable<Object>{
    return this.httpClient.put(`${this.URL2}/${resId}`, requirement);
  }
}
