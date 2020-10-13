import { Component, OnInit } from '@angular/core';
import { LocalApiService } from './local-api.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-planaction',
  templateUrl: './planaction.component.html',
  styleUrls: ['./planaction.component.css']
})
export class PlanactionComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition: '';
  disabled = false;
  idAction: number;
  //set table haders names and data for our data Table
  displayedColumns: string[] = ['Mois', 'ProblemAnalyse', 'Massnahmen', 'Verantwortlich', 'Termin', 'Abarbeitungsstatus'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: any = [];

  //Create form controls for modal
  mois = new FormControl('');
  problem = new FormControl('');
  mass = new FormControl('');
  veran = new FormControl('');
  termin = new FormControl('');
  abar = new FormControl('');

  constructor(private localApi: LocalApiService) { }

  ngOnInit(): void {
    this.loadActions();
  }

  addRow() {
    let newAction = {
      'id': null,
      'Mois': this.mois.value,
      'ProblemAnalyse': this.problem.value,
      'Massnahmen': this.mass.value,
      'Verantwortlich': this.veran.value,
      'Termin': this.termin.value,
      'Abarbeitungsstatus': this.labelPosition
    };

    this.localApi.createAction(newAction).subscribe(() => {
      //refresh data table and reset data forms
      this.loadActions();
      this.resetForms();
    })
  }
  // reset all formControl
  resetForms() {
    this.idAction = null;
    this.mois.reset();
    this.problem.reset();
    this.mass.reset();
    this.veran.reset();
    this.termin.reset();
    this.abar.reset();
    this.labelPosition = '';
  }

  // Get action list
  loadActions() {
    return this.localApi.getActions().subscribe((data: {}) => {
      this.data = data;
    })
  }
  //delete Action
  deleteAction(id) {
    this.localApi.deleteAction(id).subscribe(() => {
      this.loadActions();
    });
  }

  getIdAction(id) {
    this.idAction = id;
  }

  setProgressAction() {
    let action = this.data[this.idAction - 1];
    action.Abarbeitungsstatus = this.labelPosition;
    this.localApi.updateAction(this.idAction, action).subscribe(() => {
      //refresh data table and reset data forms
      this.loadActions();
      this.resetForms();
    });
  }

  getCurrentActionInformation(id){
    this.idAction = id;
    let action = this.data[this.idAction - 1];
    this.mois.setValue(action.Mois)   ;
    this.problem.setValue(action.ProblemAnalyse) ;
    this.mass.setValue(action.Massnahmen)  ;
    this.termin.setValue(action.Termin)  ;
    this.veran.setValue(action.Verantwortlich);
    this.labelPosition = action.Abarbeitungsstatus ;
  }
  // update Action
  updateAction(){
    let newAction = {
      'id': this.idAction,
      'Mois': this.mois.value,
      'ProblemAnalyse': this.problem.value,
      'Massnahmen': this.mass.value,
      'Verantwortlich': this.veran.value,
      'Termin': this.termin.value,
      'Abarbeitungsstatus': this.labelPosition
    };
    this.localApi.updateAction(this.idAction, newAction).subscribe(() => {
      //refresh data table and reset data forms
      this.loadActions();
      this.resetForms();
    });
    
  }

}
