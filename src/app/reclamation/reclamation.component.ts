import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../services/reclamation/reclamation.service';
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

  month_1: any = [];
  month_2: any = [];
  month_3: any = [];
  month_4: any = [];

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
  barchartxAxisLabel = 'Anneé ' + new Date().getFullYear();
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
    let today = new Date();
    let i = today.getMonth();
    let actual_year = today.getFullYear();
    let str = '' + actual_year;
    let res = str.substring(2, 4);

    this.reclamations.getAllReclamations().subscribe(
      (result) => {
        i = i + (actual_year - 2020) * 12;
        this.month_1 = result[i - 3];
        this.month_2 = result[i - 2];
        this.month_3 = result[i - 1];
        this.month_4 = result[i];
      },
      (error) => {
        console.log(error);
      }
    );

    this.reclamations.getReclamation(actual_year).subscribe(
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

        let resolved_chart = [
          {
            name: 'Jan/' + res,
            value: result[0].nb_resolved,
          },
          {
            name: 'Feb/' + res,
            value: result[1].nb_resolved,
          },
          {
            name: 'Marz/' + res,
            value: result[2].nb_resolved,
          },
          {
            name: 'Apr/' + res,
            value: result[3].nb_resolved,
          },
          {
            name: 'Mai/' + res,
            value: result[4].nb_resolved,
          },
          {
            name: 'Jun/' + res,
            value: result[5].nb_resolved,
          },
          {
            name: 'Jul/' + res,
            value: result[6].nb_resolved,
          },
          {
            name: 'Aug/' + res,
            value: result[7].nb_resolved,
          },
          {
            name: 'Sep/' + res,
            value: result[8].nb_resolved,
          },
          {
            name: 'Okt/' + res,
            value: result[9].nb_resolved,
          },
          {
            name: 'Nou/' + res,
            value: result[10].nb_resolved,
          },
          {
            name: 'Dez/' + res,
            value: result[11].nb_resolved,
          },
        ];

        let not_resolved_chart = [
          {
            name: 'Jan/20',
            value: result[0].nb_not_resolved,
          },
          {
            name: 'Feb/20',
            value: result[1].nb_not_resolved,
          },
          {
            name: 'Marz/20',
            value: result[2].nb_not_resolved,
          },
          {
            name: 'Apr/20',
            value: result[3].nb_not_resolved,
          },
          {
            name: 'Mai/20',
            value: result[4].nb_not_resolved,
          },
          {
            name: 'Jun/20',
            value: result[5].nb_not_resolved,
          },
          {
            name: 'Jul/20',
            value: result[6].nb_not_resolved,
          },
          {
            name: 'Aug/20',
            value: result[7].nb_not_resolved,
          },
          {
            name: 'Sep/20',
            value: result[8].nb_not_resolved,
          },
          {
            name: 'Okt/20',
            value: result[9].nb_not_resolved,
          },
          {
            name: 'Nou/20',
            value: result[10].nb_not_resolved,
          },
          {
            name: 'Dez/20',
            value: result[11].nb_not_resolved,
          },
        ];

        let infected_chart = [
          {
            name: 'Nombre des Réclamation Non résolues',
            series: [
              {
                name: 'Jan/20',
                value: result[0].nb_not_resolved,
              },
              {
                name: 'Feb/20',
                value: result[1].nb_not_resolved,
              },
              {
                name: 'Marz/20',
                value: result[2].nb_not_resolved,
              },
              {
                name: 'Apr/20',
                value: result[3].nb_not_resolved,
              },
              {
                name: 'Mai/20',
                value: result[4].nb_not_resolved,
              },
              {
                name: 'Jun/20',
                value: result[5].nb_not_resolved,
              },
              {
                name: 'Jul/20',
                value: result[6].nb_not_resolved,
              },
              {
                name: 'Aug/20',
                value: result[7].nb_not_resolved,
              },
              {
                name: 'Sep/20',
                value: result[8].nb_not_resolved,
              },
              {
                name: 'Okt/20',
                value: result[9].nb_not_resolved,
              },
              {
                name: 'Nov/20',
                value: result[10].nb_not_resolved,
              },
              {
                name: 'Dez/20',
                value: result[11].nb_not_resolved,
              },
            ],
          },

          {
            name: 'objectifs',
            series: [
              {
                name: 'Jan/20',
                value: result[0].objective,
              },
              {
                name: 'Feb/20',
                value: result[1].objective,
              },
              {
                name: 'Marz/20',
                value: result[2].objective,
              },
              {
                name: 'Apr/20',
                value: result[3].objective,
              },
              {
                name: 'Mai/20',
                value: result[4].objective,
              },
              {
                name: 'Jun/20',
                value: result[5].objective,
              },
              {
                name: 'Jul/20',
                value: result[6].objective,
              },
              {
                name: 'Aug/20',
                value: result[7].objective,
              },
              {
                name: 'Sep/20',
                value: result[8].objective,
              },
              {
                name: 'Okt/20',
                value: result[9].objective,
              },
              {
                name: 'Nov/20',
                value: result[10].objective,
              },
              {
                name: 'Dez/20',
                value: result[11].objective,
              },
            ],
          },
          {
            name: 'max',
            series: [
              {
                name: 'Jan/20',
                value: 30,
              },
              {
                name: 'Feb/20',
                value: 30,
              },
              {
                name: 'Marz/20',
                value: 30,
              },
              {
                name: 'Apr/20',
                value: 30,
              },
              {
                name: 'Mai/20',
                value: 30,
              },
              {
                name: 'Jun/20',
                value: 30,
              },
              {
                name: 'Jul/20',
                value: 30,
              },
              {
                name: 'Aug/20',
                value: 30,
              },
              {
                name: 'Sep/20',
                value: 30,
              },
              {
                name: 'Okt/20',
                value: 30,
              },
              {
                name: 'Nov/20',
                value: 30,
              },
              {
                name: 'Dez/20',
                value: 30,
              },
            ],
          },
        ];

        this.tauxPcInfecte = infected_chart;

        this.nbrReclationNonResolu = not_resolved_chart;
        this.nbrReclationResolu = resolved_chart;

        this.dataTable = data;
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
