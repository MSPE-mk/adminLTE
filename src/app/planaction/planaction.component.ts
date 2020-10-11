import { Component, OnInit } from '@angular/core';
import { LocalApiService } from './local-api.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-planaction',
  templateUrl: './planaction.component.html',
  styleUrls: ['./planaction.component.css']
})
export class PlanactionComponent implements OnInit {

  displayedColumns: string[] = ['Mois', 'ProblemAnalyse', 'Massnahmen', 'Verantwortlich', 'Termin', 'Abarbeitungsstatus'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: any = [];

  mois = new FormControl('');
  problem = new FormControl('');
  mass = new FormControl('');
  veran = new FormControl('');
  termin = new FormControl('');
  abar = new FormControl('');

  addRow() {


    // let lastItemIndex = this.data.length-1; 
    // console.log(this.data[lastItemIndex]);
    let newAction = {
      'id':null,
      'Mois': this.mois.value,
      'ProblemAnalyse': this.problem.value,
      'Massnahmen': this.mass.value,
      'Verantwortlich': this.veran.value,
      'Termin': this.termin.value,
      'Abarbeitungsstatus': this.abar.value
    };


    this.localApi.createAction(newAction).subscribe(() => {
      console.log("action added succefully!");
      this.loadActions();
    })
  }

  // Get employees list
  loadActions() {
    return this.localApi.getActions().subscribe((data: {}) => {
      this.data = data;
    })
  }

  constructor(private localApi: LocalApiService) { }

  ngOnInit(): void {
    this.loadActions();
  }


}
