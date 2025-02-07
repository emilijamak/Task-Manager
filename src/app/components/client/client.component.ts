import { ClientService } from './../../services/client.service';
import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { APIResponseModel } from '../../model/interface/role';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe, AsyncPipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit{

  clientObj: Client = new Client();
  clientList: Client[]= [];
  clientService = inject(ClientService)
  isLoader: boolean = true;

  userList$ : Observable<any> = new Observable<any>

  ngOnInit(): void {
    this.loadClient();
    this.userList$ = this.clientService.getAllUsers()
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res:APIResponseModel) => {
      this.clientList= res.data;
      this.isLoader = false;
    })
  }

  onSaveClient() {

    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel)=> {
      if(res.result) {
          alert('Client created successfully')
          this.loadClient();
          this.clientObj = new Client();
      } else {
        alert(res.message)
      }
    })
  }

  onDelete(id: number) {
    
    const isDelete = confirm("Are you sure you want to delete this user?")
    if(isDelete) {
      this.clientService.deleteClientById(id).subscribe((res:APIResponseModel)=> {
        if(res.result) {
            alert('Client deleted successfully')
            this.loadClient();
        } else {
          alert(res.message)
        }
      })
    }
  }

  
  onEdit(data: Client) {
    
    this.clientObj = data;

  }
  

}
