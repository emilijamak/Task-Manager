import { APIResponseModel, IDesdidgnation } from '../../model/interface/role';
import { MasterService } from './../../services/master.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss'
})
export class DesignationComponent implements OnInit{

  MasterService = inject(MasterService);
  designationList: IDesdidgnation[] = [];
  isLoader: boolean = true;

  ngOnInit(): void {
    this.MasterService.getDesignation().subscribe((res: APIResponseModel) => {
      this.designationList = res.data;
      this.isLoader = false;
    }, error=>{
      alert('API ERROR')
      this.isLoader = false;
    })
  }


  

  

}
