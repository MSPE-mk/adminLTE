import { Component, OnInit } from '@angular/core';
import { LocalApiService } from './local-api.service';

@Component({
  selector: 'app-planaction',
  templateUrl: './planaction.component.html',
  styleUrls: ['./planaction.component.css']
})
export class PlanactionComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'author'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: any = [];

  addColumn() {
    let id = 6;
    let newAction = { id: id, title: "json-server2", author: "typicode2" };
    this.localApi.createEmployee(newAction).subscribe(()=>{
      console.log("action added succefully!");
    })
    id ++;
  }

   // Get employees list
   loadEmployees() {
    return this.localApi.getActions().subscribe((data: {}) => {
      this.data = data;
    })
  }

  constructor(private localApi :LocalApiService ) { }

  ngOnInit(): void {
    this.loadEmployees();
  }


}
