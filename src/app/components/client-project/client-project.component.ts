import { ClientService } from './../../services/client.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, MaxLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { APIResponseModel, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';
import { DatePipe } from '@angular/common';
import { ClientProject } from '../../model/class/ClientProject';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.scss'
})
export class ClientProjectComponent implements OnInit{

  clientProjectObj: ClientProject = new ClientProject();
  clientProjectsList: ClientProject[] = [];
  clientService = inject(ClientService)
  isLoader: boolean = true;

  employeeList: Employee[] = [];
  clientList: Client[] = [];
  employee: Employee[] = []

  projectList$ : Observable<any> = new Observable<any>


  ngOnInit(): void {
    this.loadClientProjects();
    this.getAllClients();
    this.getAllEmployee()
    this.projectList$ = this.clientService.getAllClientProjects()
  }


  loadClientProjects() {
    this.clientService.getAllClientProjects().subscribe((res:APIResponseModel) => {
      this.clientProjectsList= res.data;
      console.log(this.clientProjectsList);
      this.isLoader = false;
    })
  }


  getAllEmployee() {
    this.clientService.getAllEmployee().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;

      
    })
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
      console.log(res.data);
      
    })
  }

  getEmployeeById(id: number) {
    
    this.clientService.getEmployeeById(id).subscribe((res: APIResponseModel) => {
      const employeeData: Employee = res.data;

      this.clientProjectObj.empName = employeeData.empName;
      this.clientProjectObj.empId = employeeData.empId;
      this.clientProjectObj.empCode = employeeData.empCode;
      this.clientProjectObj.empEmailId = employeeData.empEmailId
      console.log(this.clientProjectObj);
      
    })
  }

  onEmployeeChange(empId: number) {
    this.getEmployeeById(empId)
  }


  onSaveClientProject() {

    this.clientService.addClientProjectUpdate(this.clientProjectObj).subscribe((res:APIResponseModel)=> {
      if(res.result) {
        console.log(this.clientProjectObj);
        
          alert('Client created successfully')
          this.loadClientProjects();
          this.clientProjectObj = new ClientProject();
  
      } else {
        alert(res.message)
        console.log(this.clientProjectObj);
      }
    })
  }

  

 
}


