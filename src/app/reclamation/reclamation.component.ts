import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../reclamation.service';
import {
  nbrReclationNonResolu,
  nbrReclationResolu,
  dataTable,
  tableHeaders,
  tauxPcInfecte,
} from './data';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css'],
})
export class ReclamationComponent implements OnInit {
  tauxPcInfecte: any[];
  dataTable: any[];
  tableHeaders: any[];
  view: any[];

  september: [];
  october: [];
  november: [];
  december: [];

  nbrReclationNonResolu: any[];
  nbrReclationResolu: any[];

  // lineChart options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Mois';
  yAxisLabel: string = 'Nombre des Réclamation non résolues';
  timeline: boolean = true;
  colorScheme = {
    domain: ['#51bcda', '#ef8157', '#aba6a6'],
  };

  // Barchart options
  barchartshowXAxis = true;
  barchartshowYAxis = true;
  barchartgradient = false;
  barchartshowLegend = false;
  barchartshowXAxisLabel = true;
  barchartxAxisLabel = 'Anneé 2020';
  barchartshowYAxisLabel = true;
  barchartyAxisLabel = 'Nombre des Réclamation résolues';
  barchartcolorScheme = {
    domain: [
      '#249fc1',
      '#249fc1',
      '#249fc1',
      '#249fc1',
      '#249fc1',
      '#249fc1',
      '#249fc1',
    ],
  };

  constructor(private reclamations: ReclamationService) {
    Object.assign(this, { nbrReclationNonResolu });
    Object.assign(this, { nbrReclationResolu });
    Object.assign(this, { dataTable });
    Object.assign(this, { tableHeaders });
    Object.assign(this, { tauxPcInfecte });
    this.view = [innerWidth / 1.3, 400];

    //this.september = [];
    //this.october = [];
    //this.november = [];
    //this.december = [];
  }

  ngOnInit(): void {
    this.reclamations.getReclamation(2020).subscribe(
      (result) => {
        var data = [
          {
            classType: 'bg-primary',
            rowName: 'Nombre des Réclamtions Non résolues',
            Janvier: result[0].nb_not_resolved,
            Fevrier: result[1].nb_not_resolved,
            Mars: result[2].nb_not_resolved,
            Avril: result[3].nb_not_resolved,
            Mai: result[4].nb_not_resolved,
            Juin: result[5].nb_not_resolved,
            Juillet: result[6].nb_not_resolved,
            Aout: result[7].nb_not_resolved,
            Septembre: result[8].nb_not_resolved,
            Octobre: result[9].nb_not_resolved,
            Novembre: result[10].nb_not_resolved,
            Decembre: result[11].nb_not_resolved,
          },
          {
            classType: 'bg-danger',
            rowName: 'Objectifs',
            Janvier: result[0].objective,
            Fevrier: result[1].objective,
            Mars: result[2].objective,
            Avril: result[3].objective,
            Mai: result[4].objective,
            Juin: result[5].objective,
            Juillet: result[6].objective,
            Aout: result[7].objective,
            Septembre: result[8].objective,
            Octobre: result[9].objective,
            Novembre: result[10].objective,
            Decembre: result[11].objective,
          },
          {
            classType: 'bg-success',
            rowName: 'Nombre des Réclamtions résolues',
            Janvier: result[0].nb_resolved,
            Fevrier: result[1].nb_resolved,
            Mars: result[2].nb_resolved,
            Avril: result[3].nb_resolved,
            Mai: result[4].nb_resolved,
            Juin: result[5].nb_resolved,
            Juillet: result[6].nb_resolved,
            Aout: result[7].nb_resolved,
            Septembre: result[8].nb_resolved,
            Octobre: result[9].nb_resolved,
            Novembre: result[10].nb_resolved,
            Decembre: result[11].nb_resolved,
          },
        ];

        this.dataTable = data;

        this.september = result[8];
        this.october = result[9];
        this.november = result[10];
        this.december = result[11];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  barchartOnSelect(event) {
    console.log(event);
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onResize(event) {
    this.view = [event.target.innerWidth / 1.35, 400];
  }
  exit() {
    location.reload();
  }
}
