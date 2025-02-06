import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, ClientProject, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.scss'
})
export class ClientProjectComponent implements OnInit{

  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployee();
    this.getAllClientProjects();
  }

  clientSrv = inject(ClientService);
  employeeList: Employee[] = [];
  clientList: Client[] = [];

  firstName = signal('Angular Project MIAU')
  projectList = signal<ClientProject[]>([])

  getAllEmployee() {
    this.clientSrv.getAllEmployee().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    })
  }
  getAllClientProjects() {
    this.clientSrv.getAllClientProjects().subscribe((res: APIResponseModel) => {
      this.projectList.set(res.data)
    })
  }
  getAllClients() {
    this.clientSrv.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveProject() {
    const formValue = this.projectForm.value;
    console.log("Submitting Form:", formValue); // Debugging

    this.clientSrv.addClientProjectUpdate(formValue).subscribe((res: APIResponseModel) => {
      if(res.result) {
        alert('Project Created Success')
      } else {
        alert(res.message)
      }
    })
  }

  changeName() {
    this.firstName.set('ReactJs')
  }

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('',[Validators.required, Validators.minLength(4)]),
    startDate: new FormControl('', [Validators.required]),
    expectedEndDate: new FormControl('', [Validators.required]),
    leadByEmpId: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    completedDate: new FormControl(''),
    contactPerson: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(40)]),
    contactPersonContactNo: new FormControl('',[Validators.required, Validators.maxLength(15)]),
    totalEmpWorking: new FormControl('',[Validators.required, Validators.minLength(1), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
    projectCost: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern('^[0-9]*$')]),
    projectDetails: new FormControl('', [Validators.required, Validators.maxLength(200), Validators.minLength(10)]),
    contactPersonEmailId: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    clientId: new FormControl('', [Validators.required]),

  })
}


