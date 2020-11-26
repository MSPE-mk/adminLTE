import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InfectedPcsService } from '../infected-pcs.service';
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
  dataCorrective: any = [];

  //Create form controls for modal
  year = new FormControl('');
  month = new FormControl('');
  nb_infected = new FormControl('');
  nb_pcs = new FormControl('');
  objective = new FormControl('');

  constructor(private infected_pcs: InfectedPcsService) {}

  ngOnInit(): void {
    this.loadpcs();
  }

  // Get posts list
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

  // reset all formControl
  resetForms() {
    this.year.reset();
    this.month.reset();
    this.nb_infected.reset();
    this.nb_pcs.reset();
    this.objective.reset();
  }
}
