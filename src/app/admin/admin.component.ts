import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InfectedPcsService } from '../infected-pcs.service';
import { ReclamationService } from '../reclamation.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = [
    'Id',
    'Year',
    'Month',
    'Nb infected PCs',
    'Nb Pcs',
    'Objective',
  ];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: any = [];
  dataReclamation: any = [];

  //Create form controls for modal
  id = new FormControl('');
  year = new FormControl('');
  month = new FormControl('');
  nb_infected = new FormControl('');
  nb_pcs = new FormControl('');
  objective = new FormControl('');
  nb_not_resolved = new FormControl('');
  nb_resolved = new FormControl('');

  constructor(
    private infected_pcs: InfectedPcsService,
    private reclamationService: ReclamationService
  ) {}

  ngOnInit(): void {
    this.loadpcs();
    this.loadreclamations();
  }

  // Get Infections list
  loadpcs() {
    this.infected_pcs.getAllInfected_pcs().subscribe(
      (result) => {
        this.data = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Get reclamations list
  loadreclamations() {
    this.reclamationService.getAllReclamations().subscribe(
      (result) => {
        this.dataReclamation = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addRow() {
    let infected = {
      year: this.year.value,
      month: this.month.value,
      nb_infected: this.nb_infected.value,
      nb_pcs: this.nb_pcs.value,
      objective: this.objective.value,
    };

    this.infected_pcs.add_infected_pcs(infected).subscribe(() => {
      //refresh data table and reset data forms
      this.loadpcs();
      this.resetForms();
    });
  }

  addReclamation() {
    let reclamation = {
      year: this.year.value,
      month: this.month.value,
      nb_not_resolved: this.nb_not_resolved.value,
      objective: this.objective.value,
      nb_resolved: this.nb_resolved.value,
    };

    this.reclamationService.add_reclamation(reclamation).subscribe(
      () => {
        //refresh data table and reset data forms
        this.loadreclamations();
        this.resetForms();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCurrentInfected(id, apiRoute) {
    this.id = id;
    let infection: any = [];
    // function to extract action by it's id
    function findWithAttr(array, attr, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
          return array[i];
        }
      }
    }

    infection = findWithAttr(this.data, 'id', this.id);
    this.year.setValue(infection.year);
    this.month.setValue(infection.month);
    this.nb_infected.setValue(infection.nb_infected);
    this.nb_pcs.setValue(infection.nb_pcs);
    this.objective.setValue(infection.objective);
  }

  getCurrentReclamation(id) {
    this.id = id;
    let reclamation: any = [];
    // function to extract action by it's id
    function findWithAttr(array, attr, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
          return array[i];
        }
      }
    }

    reclamation = findWithAttr(this.dataReclamation, 'id', this.id);
    this.year.setValue(reclamation.year);
    this.month.setValue(reclamation.month);
    this.nb_not_resolved.setValue(reclamation.nb_not_resolved);
    this.objective.setValue(reclamation.objective);
    this.nb_resolved.setValue(reclamation.nb_resolved);
  }

  updateReclamation(id) {
    let newReclamation = {
      id: this.id,
      year: this.year.value,
      month: this.month.value,
      nb_not_resolved: this.nb_not_resolved.value,
      objective: this.objective.value,
      nb_resolved: this.nb_resolved.value,
    };
    this.reclamationService
      .update_reclamation(this.id, newReclamation)
      .subscribe(() => {
        //refresh data table and reset data forms

        this.loadreclamations();
        this.resetForms();
      });
  }

  // update Infection
  updateInfected(apiRoute) {
    let newInfection = {
      id: this.id,
      year: this.year.value,
      month: this.month.value,
      nb_infected: this.nb_infected.value,
      nb_pcs: this.nb_pcs.value,
      objective: this.objective.value,
    };
    this.infected_pcs
      .update_Infected_pc(this.id, newInfection)
      .subscribe(() => {
        //refresh data table and reset data forms

        this.loadpcs();
        this.resetForms();
      });
  }

  // reset all formControl
  resetForms() {
    this.year.reset();
    this.month.reset();
    this.nb_infected.reset();
    this.nb_pcs.reset();
    this.objective.reset();
  }
}
