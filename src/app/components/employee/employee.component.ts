import { Component, inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, Employee } from '../../model/interface/role';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {

    clientService = inject(ClientService)
    employeeList: Employee[] = [];
    isLoader: boolean = true;
    

    ngOnInit(): void {
      this.getAllEmployee()
    }



     getAllEmployee() {
        this.clientService.getAllEmployee().subscribe((res: APIResponseModel) => {
          this.employeeList = res.data;
          this.isLoader = false;
          console.log(res.data);
          
        })
      }

}
