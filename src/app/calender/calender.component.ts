import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfectedPcsService } from '../services/infected-pc/infected-pcs.service';
import { tauxPcInfecte, dataTable, tableHeaders } from './data';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent implements OnInit {
  calanderForm: FormGroup;
  tauxPcInfecte: any[];
  dataTable: any[];
  tableHeaders: any[];

  data: any[];

  constructor(
    private router: Router,
    private infected_pcs: InfectedPcsService,
    private formBuilder: FormBuilder
  ) {
    let formControls = {
      start: new FormControl('', [Validators.required]),
      end: new FormControl('', [Validators.required]),
    };

    this.calanderForm = this.formBuilder.group(formControls);

    Object.assign(this, { tauxPcInfecte });
    Object.assign(this, { dataTable });
    Object.assign(this, { tableHeaders });
  }

  ngOnInit(): void {}

  choose() {
    //location.reload();
    //this.router.navigate(['/dashboard']);
    this.infected_pcs.getAllInfected_pcs().subscribe(
      (result) => {
        let info = this.calanderForm.value;
        // const startDate: Date = new Date(2019,01,02, 12,34,56);<
        // const endDate: Date = new Date(2019,01,02, 12,34,56);<
        const startDate = new Date(info.start);
        const endDate = new Date(info.end);
        console.log(startDate);
        let startmonth = startDate.getMonth();
        let startyear = startDate.getFullYear();
        if (startyear > 2020) {
          startmonth = startmonth + 12 * (startyear - 2020);
        }

        let tableHeaders = [
          'rowName',
          result[startmonth].month,
          result[startmonth + 1].month,
          result[startmonth + 2].month,
          result[startmonth + 3].month,
          result[startmonth + 4].month,
          result[startmonth + 5].month,
          result[startmonth + 6].month,
          result[startmonth + 7].month,
          result[startmonth + 8].month,
          result[startmonth + 9].month,
          result[startmonth + 10].month,
          result[startmonth + 11].month,
        ];

        let data = [];

        if (tableHeaders[1] == 'January') {
          data = [
            {
              rowName: 'Nombre de postes infectés',
              January: result[startmonth].nb_infected,
              February: result[startmonth + 1].nb_infected,
              Mars: result[startmonth + 2].nb_infected,
              April: result[startmonth + 3].nb_infected,
              May: result[startmonth + 4].nb_infected,
              June: result[startmonth + 5].nb_infected,
              July: result[startmonth + 6].nb_infected,
              August: result[startmonth + 7].nb_infected,
              September: result[startmonth + 8].nb_infected,
              October: result[startmonth + 9].nb_infected,
              November: result[startmonth + 10].nb_infected,
              December: result[startmonth + 11].nb_infected,
            },
            {
              rowName: 'Nombre de Pc',
              January: result[startmonth].nb_pcs,
              February: result[startmonth + 1].nb_pcs,
              Mars: result[startmonth + 2].nb_pcs,
              April: result[startmonth + 3].nb_pcs,
              May: result[startmonth + 4].nb_pcs,
              June: result[startmonth + 5].nb_pcs,
              July: result[startmonth + 6].nb_pcs,
              August: result[startmonth + 7].nb_pcs,
              September: result[startmonth + 8].nb_pcs,
              October: result[startmonth + 9].nb_pcs,
              November: result[startmonth + 10].nb_pcs,
              December: result[startmonth + 11].nb_pcs,
            },
            {
              classType: 'bg-primary',
              rowName: 'Taux nbre de PC infectées %',
              January: (
                result[startmonth].nb_infected / result[startmonth].nb_pcs
              ).toFixed(2),
              February: (
                result[startmonth + 1].nb_infected /
                result[startmonth + 1].nb_pcs
              ).toFixed(2),
              Mars: (
                result[startmonth + 2].nb_infected /
                result[startmonth + 2].nb_pcs
              ).toFixed(2),
              April: (
                result[startmonth + 3].nb_infected /
                result[startmonth + 3].nb_pcs
              ).toFixed(2),
              May: (
                result[startmonth + 4].nb_infected /
                result[startmonth + 4].nb_pcs
              ).toFixed(2),
              June: (
                result[startmonth + 5].nb_infected /
                result[startmonth + 5].nb_pcs
              ).toFixed(2),
              July: (
                result[startmonth + 6].nb_infected /
                result[startmonth + 6].nb_pcs
              ).toFixed(2),
              August: (
                result[startmonth + 7].nb_infected /
                result[startmonth + 7].nb_pcs
              ).toFixed(2),
              September: (
                result[startmonth + 8].nb_infected /
                result[startmonth + 8].nb_pcs
              ).toFixed(2),
              October: (
                result[startmonth + 9].nb_infected /
                result[startmonth + 9].nb_pcs
              ).toFixed(2),
              November: (
                result[startmonth + 10].nb_infected /
                result[startmonth + 10].nb_pcs
              ).toFixed(2),
              December: (
                result[startmonth + 11].nb_infected /
                result[startmonth + 11].nb_pcs
              ).toFixed(2),
            },
            {
              classType: 'bg-danger',
              rowName: 'Objectifs',
              January: result[startmonth].objective,
              February: result[startmonth + 1].objective,
              Mars: result[startmonth + 2].objective,
              April: result[startmonth + 3].objective,
              May: result[startmonth + 4].objective,
              June: result[startmonth + 5].objective,
              July: result[startmonth + 6].objective,
              August: result[startmonth + 7].objective,
              September: result[startmonth + 8].objective,
              October: result[startmonth + 9].objective,
              November: result[startmonth + 10].objective,
              December: result[startmonth + 11].objective,
            },
          ];
        } else if (tableHeaders[1] == 'February') {
          data = [
            {
              rowName: 'Nombre de postes infectés',
              February: result[startmonth].nb_infected,
              Mars: result[startmonth + 1].nb_infected,
              April: result[startmonth + 2].nb_infected,
              May: result[startmonth + 3].nb_infected,
              June: result[startmonth + 4].nb_infected,
              July: result[startmonth + 5].nb_infected,
              August: result[startmonth + 6].nb_infected,
              September: result[startmonth + 7].nb_infected,
              October: result[startmonth + 8].nb_infected,
              November: result[startmonth + 9].nb_infected,
              December: result[startmonth + 10].nb_infected,
              January: result[startmonth + 11].nb_infected,
            },
            {
              rowName: 'Nombre de Pc',
              February: result[startmonth].nb_pcs,
              Mars: result[startmonth + 1].nb_pcs,
              April: result[startmonth + 2].nb_pcs,
              May: result[startmonth + 3].nb_pcs,
              June: result[startmonth + 4].nb_pcs,
              July: result[startmonth + 5].nb_pcs,
              August: result[startmonth + 6].nb_pcs,
              September: result[startmonth + 7].nb_pcs,
              October: result[startmonth + 8].nb_pcs,
              November: result[startmonth + 9].nb_pcs,
              December: result[startmonth + 10].nb_pcs,
              January: result[startmonth + 11].nb_pcs,
            },
            {
              classType: 'bg-primary',
              rowName: 'Taux nbre de PC infectées %',
              February: (
                result[startmonth].nb_infected / result[startmonth].nb_pcs
              ).toFixed(2),
              Mars: (
                result[startmonth + 1].nb_infected /
                result[startmonth + 1].nb_pcs
              ).toFixed(2),
              April: (
                result[startmonth + 2].nb_infected /
                result[startmonth + 2].nb_pcs
              ).toFixed(2),
              May: (
                result[startmonth + 3].nb_infected /
                result[startmonth + 3].nb_pcs
              ).toFixed(2),
              June: (
                result[startmonth + 4].nb_infected /
                result[startmonth + 4].nb_pcs
              ).toFixed(2),
              July: (
                result[startmonth + 5].nb_infected /
                result[startmonth + 5].nb_pcs
              ).toFixed(2),
              August: (
                result[startmonth + 6].nb_infected /
                result[startmonth + 6].nb_pcs
              ).toFixed(2),
              September: (
                result[startmonth + 7].nb_infected /
                result[startmonth + 7].nb_pcs
              ).toFixed(2),
              October: (
                result[startmonth + 8].nb_infected /
                result[startmonth + 8].nb_pcs
              ).toFixed(2),
              November: (
                result[startmonth + 9].nb_infected /
                result[startmonth + 9].nb_pcs
              ).toFixed(2),
              December: (
                result[startmonth + 10].nb_infected /
                result[startmonth + 10].nb_pcs
              ).toFixed(2),
              January: (
                result[startmonth + 11].nb_infected /
                result[startmonth + 11].nb_pcs
              ).toFixed(2),
            },
            {
              classType: 'bg-danger',
              rowName: 'Objectifs',
              February: result[startmonth].objective,
              Mars: result[startmonth + 1].objective,
              April: result[startmonth + 2].objective,
              May: result[startmonth + 3].objective,
              June: result[startmonth + 4].objective,
              July: result[startmonth + 5].objective,
              August: result[startmonth + 6].objective,
              September: result[startmonth + 7].objective,
              October: result[startmonth + 8].objective,
              November: result[startmonth + 9].objective,
              December: result[startmonth + 10].objective,
              January: result[startmonth + 11].objective,
            },
          ];
        } else if (tableHeaders[1] == 'Mars') {
          data = [
            {
              rowName: 'Nombre de postes infectés',
              Mars: result[startmonth].nb_infected,
              April: result[startmonth + 1].nb_infected,
              May: result[startmonth + 2].nb_infected,
              June: result[startmonth + 3].nb_infected,
              July: result[startmonth + 4].nb_infected,
              August: result[startmonth + 5].nb_infected,
              September: result[startmonth + 6].nb_infected,
              October: result[startmonth + 7].nb_infected,
              November: result[startmonth + 8].nb_infected,
              December: result[startmonth + 9].nb_infected,
              January: result[startmonth + 10].nb_infected,
              February: result[startmonth + 11].nb_infected,
            },
            {
              rowName: 'Nombre de Pc',
              Mars: result[startmonth].nb_pcs,
              April: result[startmonth + 1].nb_pcs,
              May: result[startmonth + 2].nb_pcs,
              June: result[startmonth + 3].nb_pcs,
              July: result[startmonth + 4].nb_pcs,
              August: result[startmonth + 5].nb_pcs,
              September: result[startmonth + 6].nb_pcs,
              October: result[startmonth + 7].nb_pcs,
              November: result[startmonth + 8].nb_pcs,
              December: result[startmonth + 9].nb_pcs,
              January: result[startmonth + 10].nb_pcs,
              February: result[startmonth + 11].nb_pcs,
            },
            {
              classType: 'bg-primary',
              rowName: 'Taux nbre de PC infectées %',
              Mars: (
                result[startmonth].nb_infected / result[startmonth].nb_pcs
              ).toFixed(2),
              April: (
                result[startmonth + 1].nb_infected /
                result[startmonth + 1].nb_pcs
              ).toFixed(2),
              May: (
                result[startmonth + 2].nb_infected /
                result[startmonth + 2].nb_pcs
              ).toFixed(2),
              June: (
                result[startmonth + 3].nb_infected /
                result[startmonth + 3].nb_pcs
              ).toFixed(2),
              July: (
                result[startmonth + 4].nb_infected /
                result[startmonth + 4].nb_pcs
              ).toFixed(2),
              August: (
                result[startmonth + 5].nb_infected /
                result[startmonth + 5].nb_pcs
              ).toFixed(2),
              September: (
                result[startmonth + 6].nb_infected /
                result[startmonth + 6].nb_pcs
              ).toFixed(2),
              October: (
                result[startmonth + 7].nb_infected /
                result[startmonth + 7].nb_pcs
              ).toFixed(2),
              November: (
                result[startmonth + 8].nb_infected /
                result[startmonth + 8].nb_pcs
              ).toFixed(2),
              December: (
                result[startmonth + 9].nb_infected /
                result[startmonth + 9].nb_pcs
              ).toFixed(2),
              January: (
                result[startmonth + 10].nb_infected /
                result[startmonth + 10].nb_pcs
              ).toFixed(2),
              February: (
                result[startmonth + 11].nb_infected /
                result[startmonth + 11].nb_pcs
              ).toFixed(2),
            },
            {
              classType: 'bg-danger',
              rowName: 'Objectifs',
              Mars: result[startmonth].objective,
              April: result[startmonth + 1].objective,
              May: result[startmonth + 2].objective,
              June: result[startmonth + 3].objective,
              July: result[startmonth + 4].objective,
              August: result[startmonth + 5].objective,
              September: result[startmonth + 6].objective,
              October: result[startmonth + 7].objective,
              November: result[startmonth + 8].objective,
              December: result[startmonth + 9].objective,
              January: result[startmonth + 10].objective,
              February: result[startmonth + 11].objective,
            },
          ];
        } else if (tableHeaders[1] == 'April') {
          data = [
            {
              rowName: 'Nombre de postes infectés',
              April: result[startmonth].nb_infected,
              May: result[startmonth + 1].nb_infected,
              June: result[startmonth + 2].nb_infected,
              July: result[startmonth + 3].nb_infected,
              August: result[startmonth + 4].nb_infected,
              September: result[startmonth + 5].nb_infected,
              October: result[startmonth + 6].nb_infected,
              November: result[startmonth + 7].nb_infected,
              December: result[startmonth + 8].nb_infected,
              January: result[startmonth + 9].nb_infected,
              February: result[startmonth + 10].nb_infected,
              Mars: result[startmonth + 11].nb_infected,
            },
            {
              rowName: 'Nombre de Pc',
              April: result[startmonth].nb_pcs,
              May: result[startmonth + 1].nb_pcs,
              June: result[startmonth + 2].nb_pcs,
              July: result[startmonth + 3].nb_pcs,
              August: result[startmonth + 4].nb_pcs,
              September: result[startmonth + 5].nb_pcs,
              October: result[startmonth + 6].nb_pcs,
              November: result[startmonth + 7].nb_pcs,
              December: result[startmonth + 8].nb_pcs,
              January: result[startmonth + 9].nb_pcs,
              February: result[startmonth + 10].nb_pcs,
              Mars: result[startmonth + 11].nb_pcs,
            },
            {
              classType: 'bg-primary',
              rowName: 'Taux nbre de PC infectées %',
              April: (
                result[startmonth].nb_infected / result[startmonth].nb_pcs
              ).toFixed(2),
              May: (
                result[startmonth + 1].nb_infected /
                result[startmonth + 1].nb_pcs
              ).toFixed(2),
              June: (
                result[startmonth + 2].nb_infected /
                result[startmonth + 2].nb_pcs
              ).toFixed(2),
              July: (
                result[startmonth + 3].nb_infected /
                result[startmonth + 3].nb_pcs
              ).toFixed(2),
              August: (
                result[startmonth + 4].nb_infected /
                result[startmonth + 4].nb_pcs
              ).toFixed(2),
              September: (
                result[startmonth + 5].nb_infected /
                result[startmonth + 5].nb_pcs
              ).toFixed(2),
              October: (
                result[startmonth + 6].nb_infected /
                result[startmonth + 6].nb_pcs
              ).toFixed(2),
              November: (
                result[startmonth + 7].nb_infected /
                result[startmonth + 7].nb_pcs
              ).toFixed(2),
              December: (
                result[startmonth + 8].nb_infected /
                result[startmonth + 8].nb_pcs
              ).toFixed(2),
              January: (
                result[startmonth + 9].nb_infected /
                result[startmonth + 9].nb_pcs
              ).toFixed(2),
              February: (
                result[startmonth + 10].nb_infected /
                result[startmonth + 10].nb_pcs
              ).toFixed(2),
              Mars: (
                result[startmonth + 11].nb_infected /
                result[startmonth + 11].nb_pcs
              ).toFixed(2),
            },
            {
              classType: 'bg-danger',
              rowName: 'Objectifs',
              April: result[startmonth].objective,
              May: result[startmonth + 1].objective,
              June: result[startmonth + 2].objective,
              July: result[startmonth + 3].objective,
              August: result[startmonth + 4].objective,
              September: result[startmonth + 5].objective,
              October: result[startmonth + 6].objective,
              November: result[startmonth + 7].objective,
              December: result[startmonth + 8].objective,
              January: result[startmonth + 9].objective,
              February: result[startmonth + 10].objective,
              Mars: result[startmonth + 11].objective,
            },
          ];
        } else if (tableHeaders[1] == 'May') {
          data = [
            {
              rowName: 'Nombre de postes infectés',
              May: result[startmonth].nb_infected,
              June: result[startmonth + 1].nb_infected,
              July: result[startmonth + 2].nb_infected,
              August: result[startmonth + 3].nb_infected,
              September: result[startmonth + 4].nb_infected,
              October: result[startmonth + 5].nb_infected,
              November: result[startmonth + 6].nb_infected,
              December: result[startmonth + 7].nb_infected,
              January: result[startmonth + 8].nb_infected,
              February: result[startmonth + 9].nb_infected,
              Mars: result[startmonth + 10].nb_infected,
              April: result[startmonth + 11].nb_infected,
            },
            {
              rowName: 'Nombre de Pc',
              May: result[startmonth].nb_pcs,
              June: result[startmonth + 1].nb_pcs,
              July: result[startmonth + 2].nb_pcs,
              August: result[startmonth + 3].nb_pcs,
              September: result[startmonth + 4].nb_pcs,
              October: result[startmonth + 5].nb_pcs,
              November: result[startmonth + 6].nb_pcs,
              December: result[startmonth + 7].nb_pcs,
              January: result[startmonth + 8].nb_pcs,
              February: result[startmonth + 9].nb_pcs,
              Mars: result[startmonth + 10].nb_pcs,
              April: result[startmonth + 11].nb_pcs,
            },
            {
              classType: 'bg-primary',
              rowName: 'Taux nbre de PC infectées %',
              May: (
                result[startmonth].nb_infected / result[startmonth].nb_pcs
              ).toFixed(2),
              June: (
                result[startmonth + 1].nb_infected /
                result[startmonth + 1].nb_pcs
              ).toFixed(2),
              July: (
                result[startmonth + 2].nb_infected /
                result[startmonth + 2].nb_pcs
              ).toFixed(2),
              August: (
                result[startmonth + 3].nb_infected /
                result[startmonth + 3].nb_pcs
              ).toFixed(2),
              September: (
                result[startmonth + 4].nb_infected /
                result[startmonth + 4].nb_pcs
              ).toFixed(2),
              October: (
                result[startmonth + 5].nb_infected /
                result[startmonth + 5].nb_pcs
              ).toFixed(2),
              November: (
                result[startmonth + 6].nb_infected /
                result[startmonth + 6].nb_pcs
              ).toFixed(2),
              December: (
                result[startmonth + 7].nb_infected /
                result[startmonth + 7].nb_pcs
              ).toFixed(2),
              January: (
                result[startmonth + 8].nb_infected /
                result[startmonth + 8].nb_pcs
              ).toFixed(2),
              February: (
                result[startmonth + 9].nb_infected /
                result[startmonth + 9].nb_pcs
              ).toFixed(2),
              Mars: (
                result[startmonth + 10].nb_infected /
                result[startmonth + 10].nb_pcs
              ).toFixed(2),
              April: (
                result[startmonth + 11].nb_infected /
                result[startmonth + 11].nb_pcs
              ).toFixed(2),
            },
            {
              classType: 'bg-danger',
              rowName: 'Objectifs',
              May: result[startmonth].objective,
              June: result[startmonth + 1].objective,
              July: result[startmonth + 2].objective,
              August: result[startmonth + 3].objective,
              September: result[startmonth + 4].objective,
              October: result[startmonth + 5].objective,
              November: result[startmonth + 6].objective,
              December: result[startmonth + 7].objective,
              January: result[startmonth + 8].objective,
              February: result[startmonth + 9].objective,
              Mars: result[startmonth + 10].objective,
              April: result[startmonth + 11].objective,
            },
          ];
        } else if (tableHeaders[1] == 'June') {
          data = [
            {
              rowName: 'Nombre de postes infectés',
              June: result[startmonth].nb_infected,
              July: result[startmonth + 1].nb_infected,
              August: result[startmonth + 2].nb_infected,
              September: result[startmonth + 3].nb_infected,
              October: result[startmonth + 4].nb_infected,
              November: result[startmonth + 5].nb_infected,
              December: result[startmonth + 6].nb_infected,
              January: result[startmonth + 7].nb_infected,
              February: result[startmonth + 8].nb_infected,
              Mars: result[startmonth + 9].nb_infected,
              April: result[startmonth + 10].nb_infected,
              May: result[startmonth + 11].nb_infected,
            },
            {
              rowName: 'Nombre de Pc',
              June: result[startmonth].nb_pcs,
              July: result[startmonth + 1].nb_pcs,
              August: result[startmonth + 2].nb_pcs,
              September: result[startmonth + 3].nb_pcs,
              October: result[startmonth + 4].nb_pcs,
              November: result[startmonth + 5].nb_pcs,
              December: result[startmonth + 6].nb_pcs,
              January: result[startmonth + 7].nb_pcs,
              February: result[startmonth + 8].nb_pcs,
              Mars: result[startmonth + 9].nb_pcs,
              April: result[startmonth + 10].nb_pcs,
              May: result[startmonth + 11].nb_pcs,
            },
            {
              classType: 'bg-primary',
              rowName: 'Taux nbre de PC infectées %',
              June: (
                result[startmonth].nb_infected / result[startmonth].nb_pcs
              ).toFixed(2),
              July: (
                result[startmonth + 1].nb_infected /
                result[startmonth + 1].nb_pcs
              ).toFixed(2),
              August: (
                result[startmonth + 2].nb_infected /
                result[startmonth + 2].nb_pcs
              ).toFixed(2),
              September: (
                result[startmonth + 3].nb_infected /
                result[startmonth + 3].nb_pcs
              ).toFixed(2),
              October: (
                result[startmonth + 4].nb_infected /
                result[startmonth + 4].nb_pcs
              ).toFixed(2),
              November: (
                result[startmonth + 5].nb_infected /
                result[startmonth + 5].nb_pcs
              ).toFixed(2),
              December: (
                result[startmonth + 6].nb_infected /
                result[startmonth + 6].nb_pcs
              ).toFixed(2),
              January: (
                result[startmonth + 7].nb_infected /
                result[startmonth + 7].nb_pcs
              ).toFixed(2),
              February: (
                result[startmonth + 8].nb_infected /
                result[startmonth + 8].nb_pcs
              ).toFixed(2),
              Mars: (
                result[startmonth + 9].nb_infected /
                result[startmonth + 9].nb_pcs
              ).toFixed(2),
              April: (
                result[startmonth + 10].nb_infected /
                result[startmonth + 10].nb_pcs
              ).toFixed(2),
              May: (
                result[startmonth + 11].nb_infected /
                result[startmonth + 11].nb_pcs
              ).toFixed(2),
            },
            {
              classType: 'bg-danger',
              rowName: 'Objectifs',
              June: result[startmonth].objective,
              July: result[startmonth + 1].objective,
              August: result[startmonth + 2].objective,
              September: result[startmonth + 3].objective,
              October: result[startmonth + 4].objective,
              November: result[startmonth + 5].objective,
              December: result[startmonth + 6].objective,
              January: result[startmonth + 7].objective,
              February: result[startmonth + 8].objective,
              Mars: result[startmonth + 9].objective,
              April: result[startmonth + 10].objective,
              May: result[startmonth + 11].objective,
            },
          ];
        } else if (tableHeaders[1] == 'July') {
          data = [
            {
              rowName: 'Nombre de postes infectés',
              July: result[startmonth].nb_infected,
              August: result[startmonth + 1].nb_infected,
              September: result[startmonth + 2].nb_infected,
              October: result[startmonth + 3].nb_infected,
              November: result[startmonth + 4].nb_infected,
              December: result[startmonth + 5].nb_infected,
              January: result[startmonth + 6].nb_infected,
              February: result[startmonth + 7].nb_infected,
              Mars: result[startmonth + 8].nb_infected,
              April: result[startmonth + 9].nb_infected,
              May: result[startmonth + 10].nb_infected,
              June: result[startmonth + 11].nb_infected,
            },
            {
              rowName: 'Nombre de Pc',
              July: result[startmonth].nb_pcs,
              August: result[startmonth + 1].nb_pcs,
              September: result[startmonth + 2].nb_pcs,
              October: result[startmonth + 3].nb_pcs,
              November: result[startmonth + 4].nb_pcs,
              December: result[startmonth + 5].nb_pcs,
              January: result[startmonth + 6].nb_pcs,
              February: result[startmonth + 7].nb_pcs,
              Mars: result[startmonth + 8].nb_pcs,
              April: result[startmonth + 9].nb_pcs,
              May: result[startmonth + 10].nb_pcs,
              June: result[startmonth + 11].nb_pcs,
            },
            {
              classType: 'bg-primary',
              rowName: 'Taux nbre de PC infectées %',
              July: (
                result[startmonth].nb_infected / result[startmonth].nb_pcs
              ).toFixed(2),
              August: (
                result[startmonth + 1].nb_infected /
                result[startmonth + 1].nb_pcs
              ).toFixed(2),
              September: (
                result[startmonth + 2].nb_infected /
                result[startmonth + 2].nb_pcs
              ).toFixed(2),
              October: (
                result[startmonth + 3].nb_infected /
                result[startmonth + 3].nb_pcs
              ).toFixed(2),
              November: (
                result[startmonth + 4].nb_infected /
                result[startmonth + 4].nb_pcs
              ).toFixed(2),
              December: (
                result[startmonth + 5].nb_infected /
                result[startmonth + 5].nb_pcs
              ).toFixed(2),
              January: (
                result[startmonth + 6].nb_infected /
                result[startmonth + 6].nb_pcs
              ).toFixed(2),
              February: (
                result[startmonth + 7].nb_infected /
                result[startmonth + 7].nb_pcs
              ).toFixed(2),
              Mars: (
                result[startmonth + 8].nb_infected /
                result[startmonth + 8].nb_pcs
              ).toFixed(2),
              April: (
                result[startmonth + 9].nb_infected /
                result[startmonth + 9].nb_pcs
              ).toFixed(2),
              May: (
                result[startmonth + 10].nb_infected /
                result[startmonth + 10].nb_pcs
              ).toFixed(2),
              June: (
                result[startmonth + 11].nb_infected /
                result[startmonth + 11].nb_pcs
              ).toFixed(2),
            },
            {
              classType: 'bg-danger',
              rowName: 'Objectifs',
              July: result[startmonth].objective,
              August: result[startmonth + 1].objective,
              September: result[startmonth + 2].objective,
              October: result[startmonth + 3].objective,
              November: result[startmonth + 4].objective,
              December: result[startmonth + 5].objective,
              January: result[startmonth + 6].objective,
              February: result[startmonth + 7].objective,
              Mars: result[startmonth + 8].objective,
              April: result[startmonth + 9].objective,
              May: result[startmonth + 10].objective,
              June: result[startmonth + 11].objective,
            },
          ];
        } else if (tableHeaders[1] == 'August') {
          data = [
            {
              rowName: 'Nombre de postes infectés',
              August: result[startmonth].nb_infected,
              September: result[startmonth + 1].nb_infected,
              October: result[startmonth + 2].nb_infected,
              November: result[startmonth + 3].nb_infected,
              December: result[startmonth + 4].nb_infected,
              January: result[startmonth + 5].nb_infected,
              February: result[startmonth + 6].nb_infected,
              Mars: result[startmonth + 7].nb_infected,
              April: result[startmonth + 8].nb_infected,
              May: result[startmonth + 9].nb_infected,
              June: result[startmonth + 10].nb_infected,
              July: result[startmonth + 11].nb_infected,
            },
            {
              rowName: 'Nombre de Pc',
              August: result[startmonth].nb_pcs,
              September: result[startmonth + 1].nb_pcs,
              October: result[startmonth + 2].nb_pcs,
              November: result[startmonth + 3].nb_pcs,
              December: result[startmonth + 4].nb_pcs,
              January: result[startmonth + 5].nb_pcs,
              February: result[startmonth + 6].nb_pcs,
              Mars: result[startmonth + 7].nb_pcs,
              April: result[startmonth + 8].nb_pcs,
              May: result[startmonth + 9].nb_pcs,
              June: result[startmonth + 10].nb_pcs,
              July: result[startmonth + 11].nb_pcs,
            },
            {
              classType: 'bg-primary',
              rowName: 'Taux nbre de PC infectées %',
              August: (
                result[startmonth].nb_infected / result[startmonth].nb_pcs
              ).toFixed(2),
              September: (
                result[startmonth + 1].nb_infected /
                result[startmonth + 1].nb_pcs
              ).toFixed(2),
              October: (
                result[startmonth + 2].nb_infected /
                result[startmonth + 2].nb_pcs
              ).toFixed(2),
              November: (
                result[startmonth + 3].nb_infected /
                result[startmonth + 3].nb_pcs
              ).toFixed(2),
              December: (
                result[startmonth + 4].nb_infected /
                result[startmonth + 4].nb_pcs
              ).toFixed(2),
              January: (
                result[startmonth + 5].nb_infected /
                result[startmonth + 5].nb_pcs
              ).toFixed(2),
              February: (
                result[startmonth + 6].nb_infected /
                result[startmonth + 6].nb_pcs
              ).toFixed(2),
              Mars: (
                result[startmonth + 7].nb_infected /
                result[startmonth + 7].nb_pcs
              ).toFixed(2),
              April: (
                result[startmonth + 8].nb_infected /
                result[startmonth + 8].nb_pcs
              ).toFixed(2),
              May: (
                result[startmonth + 9].nb_infected /
                result[startmonth + 9].nb_pcs
              ).toFixed(2),
              June: (
                result[startmonth + 10].nb_infected /
                result[startmonth + 10].nb_pcs
              ).toFixed(2),
              July: (
                result[startmonth + 11].nb_infected /
                result[startmonth + 11].nb_pcs
              ).toFixed(2),
            },
            {
              classType: 'bg-danger',
              rowName: 'Objectifs',
              August: result[startmonth].objective,
              September: result[startmonth + 1].objective,
              October: result[startmonth + 2].objective,
              November: result[startmonth + 3].objective,
              December: result[startmonth + 4].objective,
              January: result[startmonth + 5].objective,
              February: result[startmonth + 6].objective,
              Mars: result[startmonth + 7].objective,
              April: result[startmonth + 8].objective,
              May: result[startmonth + 9].objective,
              June: result[startmonth + 10].objective,
              July: result[startmonth + 11].objective,
            },
          ];
        } else if (tableHeaders[1] == 'September') {
          data = [
            {
              rowName: 'Nombre de postes infectés',
              September: result[startmonth].nb_infected,
              October: result[startmonth + 1].nb_infected,
              November: result[startmonth + 2].nb_infected,
              December: result[startmonth + 3].nb_infected,
              January: result[startmonth + 4].nb_infected,
              February: result[startmonth + 5].nb_infected,
              Mars: result[startmonth + 6].nb_infected,
              April: result[startmonth + 7].nb_infected,
              May: result[startmonth + 8].nb_infected,
              June: result[startmonth + 9].nb_infected,
              July: result[startmonth + 10].nb_infected,
              August: result[startmonth + 11].nb_infected,
            },
            {
              rowName: 'Nombre de Pc',
              September: result[startmonth].nb_pcs,
              October: result[startmonth + 1].nb_pcs,
              November: result[startmonth + 2].nb_pcs,
              December: result[startmonth + 3].nb_pcs,
              January: result[startmonth + 4].nb_pcs,
              February: result[startmonth + 5].nb_pcs,
              Mars: result[startmonth + 6].nb_pcs,
              April: result[startmonth + 7].nb_pcs,
              May: result[startmonth + 8].nb_pcs,
              June: result[startmonth + 9].nb_pcs,
              July: result[startmonth + 10].nb_pcs,
              August: result[startmonth + 11].nb_pcs,
            },
            {
              classType: 'bg-primary',
              rowName: 'Taux nbre de PC infectées %',
              September: (
                result[startmonth].nb_infected / result[startmonth].nb_pcs
              ).toFixed(2),
              October: (
                result[startmonth + 1].nb_infected /
                result[startmonth + 1].nb_pcs
              ).toFixed(2),
              November: (
                result[startmonth + 2].nb_infected /
                result[startmonth + 2].nb_pcs
              ).toFixed(2),
              December: (
                result[startmonth + 3].nb_infected /
                result[startmonth + 3].nb_pcs
              ).toFixed(2),
              January: (
                result[startmonth + 4].nb_infected /
                result[startmonth + 4].nb_pcs
              ).toFixed(2),
              February: (
                result[startmonth + 5].nb_infected /
                result[startmonth + 5].nb_pcs
              ).toFixed(2),
              Mars: (
                result[startmonth + 6].nb_infected /
                result[startmonth + 6].nb_pcs
              ).toFixed(2),
              April: (
                result[startmonth + 7].nb_infected /
                result[startmonth + 7].nb_pcs
              ).toFixed(2),
              May: (
                result[startmonth + 8].nb_infected /
                result[startmonth + 8].nb_pcs
              ).toFixed(2),
              June: (
                result[startmonth + 9].nb_infected /
                result[startmonth + 9].nb_pcs
              ).toFixed(2),
              July: (
                result[startmonth + 10].nb_infected /
                result[startmonth + 10].nb_pcs
              ).toFixed(2),
              August: (
                result[startmonth + 11].nb_infected /
                result[startmonth + 11].nb_pcs
              ).toFixed(2),
            },
            {
              classType: 'bg-danger',
              rowName: 'Objectifs',
              September: result[startmonth].objective,
              October: result[startmonth + 1].objective,
              November: result[startmonth + 2].objective,
              December: result[startmonth + 3].objective,
              January: result[startmonth + 4].objective,
              February: result[startmonth + 5].objective,
              Mars: result[startmonth + 6].objective,
              April: result[startmonth + 7].objective,
              May: result[startmonth + 8].objective,
              June: result[startmonth + 9].objective,
              July: result[startmonth + 10].objective,
              August: result[startmonth + 11].objective,
            },
          ];
        } else if (tableHeaders[1] == 'September') {
          data = [
            {
              rowName: 'Nombre de postes infectés',
              September: result[startmonth].nb_infected,
              October: result[startmonth + 1].nb_infected,
              November: result[startmonth + 2].nb_infected,
              December: result[startmonth + 3].nb_infected,
              January: result[startmonth + 4].nb_infected,
              February: result[startmonth + 5].nb_infected,
              Mars: result[startmonth + 6].nb_infected,
              April: result[startmonth + 7].nb_infected,
              May: result[startmonth + 8].nb_infected,
              June: result[startmonth + 9].nb_infected,
              July: result[startmonth + 10].nb_infected,
              August: result[startmonth + 11].nb_infected,
            },
            {
              rowName: 'Nombre de Pc',
              September: result[startmonth].nb_pcs,
              October: result[startmonth + 1].nb_pcs,
              November: result[startmonth + 2].nb_pcs,
              December: result[startmonth + 3].nb_pcs,
              January: result[startmonth + 4].nb_pcs,
              February: result[startmonth + 5].nb_pcs,
              Mars: result[startmonth + 6].nb_pcs,
              April: result[startmonth + 7].nb_pcs,
              May: result[startmonth + 8].nb_pcs,
              June: result[startmonth + 9].nb_pcs,
              July: result[startmonth + 10].nb_pcs,
              August: result[startmonth + 11].nb_pcs,
            },
            {
              classType: 'bg-primary',
              rowName: 'Taux nbre de PC infectées %',
              September: (
                result[startmonth].nb_infected / result[startmonth].nb_pcs
              ).toFixed(2),
              October: (
                result[startmonth + 1].nb_infected /
                result[startmonth + 1].nb_pcs
              ).toFixed(2),
              November: (
                result[startmonth + 2].nb_infected /
                result[startmonth + 2].nb_pcs
              ).toFixed(2),
              December: (
                result[startmonth + 3].nb_infected /
                result[startmonth + 3].nb_pcs
              ).toFixed(2),
              January: (
                result[startmonth + 4].nb_infected /
                result[startmonth + 4].nb_pcs
              ).toFixed(2),
              February: (
                result[startmonth + 5].nb_infected /
                result[startmonth + 5].nb_pcs
              ).toFixed(2),
              Mars: (
                result[startmonth + 6].nb_infected /
                result[startmonth + 6].nb_pcs
              ).toFixed(2),
              April: (
                result[startmonth + 7].nb_infected /
                result[startmonth + 7].nb_pcs
              ).toFixed(2),
              May: (
                result[startmonth + 8].nb_infected /
                result[startmonth + 8].nb_pcs
              ).toFixed(2),
              June: (
                result[startmonth + 9].nb_infected /
                result[startmonth + 9].nb_pcs
              ).toFixed(2),
              July: (
                result[startmonth + 10].nb_infected /
                result[startmonth + 10].nb_pcs
              ).toFixed(2),
              August: (
                result[startmonth + 11].nb_infected /
                result[startmonth + 11].nb_pcs
              ).toFixed(2),
            },
            {
              classType: 'bg-danger',
              rowName: 'Objectifs',
              September: result[startmonth].objective,
              October: result[startmonth + 1].objective,
              November: result[startmonth + 2].objective,
              December: result[startmonth + 3].objective,
              January: result[startmonth + 4].objective,
              February: result[startmonth + 5].objective,
              Mars: result[startmonth + 6].objective,
              April: result[startmonth + 7].objective,
              May: result[startmonth + 8].objective,
              June: result[startmonth + 9].objective,
              July: result[startmonth + 10].objective,
              August: result[startmonth + 11].objective,
            },
          ];
        } else if (tableHeaders[1] == 'October') {
          data = [
            {
              rowName: 'Nombre de postes infectés',
              October: result[startmonth].nb_infected,
              November: result[startmonth + 1].nb_infected,
              December: result[startmonth + 2].nb_infected,
              January: result[startmonth + 3].nb_infected,
              February: result[startmonth + 4].nb_infected,
              Mars: result[startmonth + 5].nb_infected,
              April: result[startmonth + 6].nb_infected,
              May: result[startmonth + 7].nb_infected,
              June: result[startmonth + 8].nb_infected,
              July: result[startmonth + 9].nb_infected,
              August: result[startmonth + 10].nb_infected,
              September: result[startmonth + 11].nb_infected,
            },
            {
              rowName: 'Nombre de Pc',
              October: result[startmonth].nb_pcs,
              November: result[startmonth + 1].nb_pcs,
              December: result[startmonth + 2].nb_pcs,
              January: result[startmonth + 3].nb_pcs,
              February: result[startmonth + 4].nb_pcs,
              Mars: result[startmonth + 5].nb_pcs,
              April: result[startmonth + 6].nb_pcs,
              May: result[startmonth + 7].nb_pcs,
              June: result[startmonth + 8].nb_pcs,
              July: result[startmonth + 9].nb_pcs,
              August: result[startmonth + 10].nb_pcs,
              September: result[startmonth + 11].nb_pcs,
            },
            {
              classType: 'bg-primary',
              rowName: 'Taux nbre de PC infectées %',
              October: (
                result[startmonth].nb_infected / result[startmonth].nb_pcs
              ).toFixed(2),
              November: (
                result[startmonth + 1].nb_infected /
                result[startmonth + 1].nb_pcs
              ).toFixed(2),
              December: (
                result[startmonth + 2].nb_infected /
                result[startmonth + 2].nb_pcs
              ).toFixed(2),
              January: (
                result[startmonth + 3].nb_infected /
                result[startmonth + 3].nb_pcs
              ).toFixed(2),
              February: (
                result[startmonth + 4].nb_infected /
                result[startmonth + 4].nb_pcs
              ).toFixed(2),
              Mars: (
                result[startmonth + 5].nb_infected /
                result[startmonth + 5].nb_pcs
              ).toFixed(2),
              April: (
                result[startmonth + 6].nb_infected /
                result[startmonth + 6].nb_pcs
              ).toFixed(2),
              May: (
                result[startmonth + 7].nb_infected /
                result[startmonth + 7].nb_pcs
              ).toFixed(2),
              June: (
                result[startmonth + 8].nb_infected /
                result[startmonth + 8].nb_pcs
              ).toFixed(2),
              July: (
                result[startmonth + 9].nb_infected /
                result[startmonth + 9].nb_pcs
              ).toFixed(2),
              August: (
                result[startmonth + 10].nb_infected /
                result[startmonth + 10].nb_pcs
              ).toFixed(2),
              September: (
                result[startmonth + 11].nb_infected /
                result[startmonth + 11].nb_pcs
              ).toFixed(2),
            },
            {
              classType: 'bg-danger',
              rowName: 'Objectifs',
              October: result[startmonth].objective,
              November: result[startmonth + 1].objective,
              December: result[startmonth + 2].objective,
              January: result[startmonth + 3].objective,
              February: result[startmonth + 4].objective,
              Mars: result[startmonth + 5].objective,
              April: result[startmonth + 6].objective,
              May: result[startmonth + 7].objective,
              June: result[startmonth + 8].objective,
              July: result[startmonth + 9].objective,
              August: result[startmonth + 10].objective,
              September: result[startmonth + 11].objective,
            },
          ];
        } else if (tableHeaders[1] == 'November') {
          data = [
            {
              rowName: 'Nombre de postes infectés',
              November: result[startmonth].nb_infected,
              December: result[startmonth + 1].nb_infected,
              January: result[startmonth + 2].nb_infected,
              February: result[startmonth + 3].nb_infected,
              Mars: result[startmonth + 4].nb_infected,
              April: result[startmonth + 5].nb_infected,
              May: result[startmonth + 6].nb_infected,
              June: result[startmonth + 7].nb_infected,
              July: result[startmonth + 8].nb_infected,
              August: result[startmonth + 9].nb_infected,
              September: result[startmonth + 10].nb_infected,
              October: result[startmonth + 11].nb_infected,
            },
            {
              rowName: 'Nombre de Pc',
              November: result[startmonth].nb_pcs,
              December: result[startmonth + 1].nb_pcs,
              January: result[startmonth + 2].nb_pcs,
              February: result[startmonth + 3].nb_pcs,
              Mars: result[startmonth + 4].nb_pcs,
              April: result[startmonth + 5].nb_pcs,
              May: result[startmonth + 6].nb_pcs,
              June: result[startmonth + 7].nb_pcs,
              July: result[startmonth + 8].nb_pcs,
              August: result[startmonth + 9].nb_pcs,
              September: result[startmonth + 10].nb_pcs,
              October: result[startmonth + 11].nb_pcs,
            },
            {
              classType: 'bg-primary',
              rowName: 'Taux nbre de PC infectées %',
              November: (
                result[startmonth].nb_infected / result[startmonth].nb_pcs
              ).toFixed(2),
              December: (
                result[startmonth + 1].nb_infected /
                result[startmonth + 1].nb_pcs
              ).toFixed(2),
              January: (
                result[startmonth + 2].nb_infected /
                result[startmonth + 2].nb_pcs
              ).toFixed(2),
              February: (
                result[startmonth + 3].nb_infected /
                result[startmonth + 3].nb_pcs
              ).toFixed(2),
              Mars: (
                result[startmonth + 4].nb_infected /
                result[startmonth + 4].nb_pcs
              ).toFixed(2),
              April: (
                result[startmonth + 5].nb_infected /
                result[startmonth + 5].nb_pcs
              ).toFixed(2),
              May: (
                result[startmonth + 6].nb_infected /
                result[startmonth + 6].nb_pcs
              ).toFixed(2),
              June: (
                result[startmonth + 7].nb_infected /
                result[startmonth + 7].nb_pcs
              ).toFixed(2),
              July: (
                result[startmonth + 8].nb_infected /
                result[startmonth + 8].nb_pcs
              ).toFixed(2),
              August: (
                result[startmonth + 9].nb_infected /
                result[startmonth + 9].nb_pcs
              ).toFixed(2),
              September: (
                result[startmonth + 10].nb_infected /
                result[startmonth + 10].nb_pcs
              ).toFixed(2),
              October: (
                result[startmonth + 11].nb_infected /
                result[startmonth + 11].nb_pcs
              ).toFixed(2),
            },
            {
              classType: 'bg-danger',
              rowName: 'Objectifs',
              November: result[startmonth].objective,
              December: result[startmonth + 1].objective,
              January: result[startmonth + 2].objective,
              February: result[startmonth + 3].objective,
              Mars: result[startmonth + 4].objective,
              April: result[startmonth + 5].objective,
              May: result[startmonth + 6].objective,
              June: result[startmonth + 7].objective,
              July: result[startmonth + 8].objective,
              August: result[startmonth + 9].objective,
              September: result[startmonth + 10].objective,
              October: result[startmonth + 11].objective,
            },
          ];
        } else {
          data = [
            {
              rowName: 'Nombre de postes infectés',
              December: result[startmonth].nb_infected,
              January: result[startmonth + 1].nb_infected,
              February: result[startmonth + 2].nb_infected,
              Mars: result[startmonth + 3].nb_infected,
              April: result[startmonth + 4].nb_infected,
              May: result[startmonth + 5].nb_infected,
              June: result[startmonth + 6].nb_infected,
              July: result[startmonth + 7].nb_infected,
              August: result[startmonth + 8].nb_infected,
              September: result[startmonth + 9].nb_infected,
              October: result[startmonth + 10].nb_infected,
              November: result[startmonth + 11].nb_infected,
            },
            {
              rowName: 'Nombre de Pc',
              December: result[startmonth].nb_pcs,
              January: result[startmonth + 1].nb_pcs,
              February: result[startmonth + 2].nb_pcs,
              Mars: result[startmonth + 3].nb_pcs,
              April: result[startmonth + 4].nb_pcs,
              May: result[startmonth + 5].nb_pcs,
              June: result[startmonth + 6].nb_pcs,
              July: result[startmonth + 7].nb_pcs,
              August: result[startmonth + 8].nb_pcs,
              September: result[startmonth + 9].nb_pcs,
              October: result[startmonth + 10].nb_pcs,
              November: result[startmonth + 11].nb_pcs,
            },
            {
              classType: 'bg-primary',
              rowName: 'Taux nbre de PC infectées %',
              December: (
                result[startmonth].nb_infected / result[startmonth].nb_pcs
              ).toFixed(2),
              January: (
                result[startmonth + 1].nb_infected /
                result[startmonth + 1].nb_pcs
              ).toFixed(2),
              February: (
                result[startmonth + 2].nb_infected /
                result[startmonth + 2].nb_pcs
              ).toFixed(2),
              Mars: (
                result[startmonth + 3].nb_infected /
                result[startmonth + 3].nb_pcs
              ).toFixed(2),
              April: (
                result[startmonth + 4].nb_infected /
                result[startmonth + 4].nb_pcs
              ).toFixed(2),
              May: (
                result[startmonth + 5].nb_infected /
                result[startmonth + 5].nb_pcs
              ).toFixed(2),
              June: (
                result[startmonth + 6].nb_infected /
                result[startmonth + 6].nb_pcs
              ).toFixed(2),
              July: (
                result[startmonth + 7].nb_infected /
                result[startmonth + 7].nb_pcs
              ).toFixed(2),
              August: (
                result[startmonth + 8].nb_infected /
                result[startmonth + 8].nb_pcs
              ).toFixed(2),
              September: (
                result[startmonth + 9].nb_infected /
                result[startmonth + 9].nb_pcs
              ).toFixed(2),
              October: (
                result[startmonth + 10].nb_infected /
                result[startmonth + 10].nb_pcs
              ).toFixed(2),
              November: (
                result[startmonth + 11].nb_infected /
                result[startmonth + 11].nb_pcs
              ).toFixed(2),
            },
            {
              classType: 'bg-danger',
              rowName: 'Objectifs',
              December: result[startmonth].objective,
              January: result[startmonth + 1].objective,
              February: result[startmonth + 2].objective,
              Mars: result[startmonth + 3].objective,
              April: result[startmonth + 4].objective,
              May: result[startmonth + 5].objective,
              June: result[startmonth + 6].objective,
              July: result[startmonth + 7].objective,
              August: result[startmonth + 8].objective,
              September: result[startmonth + 9].objective,
              October: result[startmonth + 10].objective,
              November: result[startmonth + 11].objective,
            },
          ];
        }

        this.tableHeaders = tableHeaders;
        this.dataTable = data;
        console.log(endDate);
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
