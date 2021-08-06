import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { InfectedPcsService } from '../services/infected-pc/infected-pcs.service';
import { tauxPcInfecte, dataTable, tableHeaders } from './data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tauxPcInfecte: any[];
  dataTable: any[];
  tableHeaders: any[];
  infected_chart: any[];
  view: any[];
  month_1: any = [];
  month_2: any = [];
  month_3: any = [];
  month_4: any = [];

  // lineChart options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Mois';
  yAxisLabel: string = 'Nombre des Posts infectés';
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
  barchartxAxisLabel = 'Année ' + new Date().getFullYear();
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

  constructor(private infected_pcs: InfectedPcsService) {
    Object.assign(this, { tauxPcInfecte });
    //    Object.assign(this, { dataTable });
    Object.assign(this, { tableHeaders });
    this.view = [innerWidth / 1.3, 400];
  }

  onSelect(data): void {
    //console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    //console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    //console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onResize(event) {
    this.view = [event.target.innerWidth / 1.35, 400];
  }
  exit() {
    location.reload();
  }

  ngOnInit(): void {
    console.log('hello');

    let today = new Date();
    let i = today.getMonth();
    let actual_year = today.getFullYear();
    this.infected_pcs.getAllInfected_pcs().subscribe(
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
    this.infected_pcs.getInfected_pcs(actual_year).subscribe(
      (result) => {
        var data = [
          {
            rowName: 'Nombre de postes infectés',
            Janvier: result[0].nb_infected,
            Fevrier: result[1].nb_infected,
            Mars: result[2].nb_infected,
            Avril: result[3].nb_infected,
            Mai: result[4].nb_infected,
            Juin: result[5].nb_infected,
            Juillet: result[6].nb_infected,
            Aout: result[7].nb_infected,
            Septembre: result[8].nb_infected,
            Octobre: result[9].nb_infected,
            Novembre: result[10].nb_infected,
            Decembre: result[11].nb_infected,
          },
          {
            rowName: 'Nombre de Pc',
            Janvier: result[0].nb_pcs,
            Fevrier: result[1].nb_pcs,
            Mars: result[2].nb_pcs,
            Avril: result[3].nb_pcs,
            Mai: result[4].nb_pcs,
            Juin: result[5].nb_pcs,
            Juillet: result[6].nb_pcs,
            Aout: result[7].nb_pcs,
            Septembre: result[8].nb_pcs,
            Octobre: result[9].nb_pcs,
            Novembre: result[10].nb_pcs,
            Decembre: result[11].nb_pcs,
          },
          {
            classType: 'bg-primary',
            rowName: 'Taux nbre de PC infectées %',
            Janvier: (result[0].nb_infected / result[0].nb_pcs).toFixed(2),
            Fevrier: (result[1].nb_infected / result[1].nb_pcs).toFixed(2),
            Mars: (result[2].nb_infected / result[2].nb_pcs).toFixed(2),
            Avril: (result[3].nb_infected / result[3].nb_pcs).toFixed(2),
            Mai: (result[4].nb_infected / result[4].nb_pcs).toFixed(2),
            Juin: (result[5].nb_infected / result[5].nb_pcs).toFixed(2),
            Juillet: (result[6].nb_infected / result[6].nb_pcs).toFixed(2),
            Aout: (result[7].nb_infected / result[7].nb_pcs).toFixed(2),
            Septembre: (result[8].nb_infected / result[8].nb_pcs).toFixed(2),
            Octobre: (result[9].nb_infected / result[9].nb_pcs).toFixed(2),
            Novembre: (result[10].nb_infected / result[10].nb_pcs).toFixed(2),
            Decembre: (result[11].nb_infected / result[11].nb_pcs).toFixed(2),
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
        ];

        let str = '' + actual_year;
        let res = str.substring(2, 4);

        let chart = [];
        let infection = [];
        if (
          (result[0].nb_infected == 0 || result[0].nb_infected == NaN) &&
          (result[1].nb_infected == 0 || result[1].nb_infected == NaN) &&
          (result[2].nb_infected == 0 || result[2].nb_infected == NaN) &&
          (result[3].nb_infected == 0 || result[3].nb_infected == NaN) &&
          (result[4].nb_infected == 0 || result[4].nb_infected == NaN) &&
          (result[5].nb_infected == 0 || result[5].nb_infected == NaN) &&
          (result[6].nb_infected == 0 || result[6].nb_infected == NaN) &&
          (result[7].nb_infected == 0 || result[7].nb_infected == NaN) &&
          (result[8].nb_infected == 0 || result[8].nb_infected == NaN) &&
          (result[9].nb_infected == 0 || result[9].nb_infected == NaN) &&
          (result[10].nb_infected == 0 || result[10].nb_infected == NaN) &&
          (result[11].nb_infected == 0 || result[11].nb_infected == NaN) &&
          (result[0].objective == 0 || result[0].objective == NaN) &&
          (result[1].objective == 0 || result[1].objective == NaN) &&
          (result[2].objective == 0 || result[2].objective == NaN) &&
          (result[3].objective == 0 || result[3].objective == NaN) &&
          (result[4].objective == 0 || result[4].objective == NaN) &&
          (result[5].objective == 0 || result[5].objective == NaN) &&
          (result[6].objective == 0 || result[6].objective == NaN) &&
          (result[7].objective == 0 || result[7].objective == NaN) &&
          (result[8].objective == 0 || result[8].objective == NaN) &&
          (result[9].objective == 0 || result[9].objective == NaN) &&
          (result[10].objective == 0 || result[10].objective == NaN) &&
          (result[11].objective == 0 || result[11].objective == NaN)
        ) {
          chart = [
            {
              name: 'Nombre des Réclamation Non résolues',
              series: [
                {
                  name: 'Jan/' + res,
                  value: 0,
                },
                {
                  name: 'Feb/' + res,
                  value: 0,
                },
                {
                  name: 'Marz/' + res,
                  value: 0,
                },
                {
                  name: 'Apr/' + res,
                  value: 0,
                },
                {
                  name: 'Mai/' + res,
                  value: 0,
                },
                {
                  name: 'Jun/' + res,
                  value: 0,
                },
                {
                  name: 'Jul/' + res,
                  value: 0,
                },
                {
                  name: 'Aug/' + res,
                  value: 0,
                },
                {
                  name: 'Sep/' + res,
                  value: 0,
                },
                {
                  name: 'Okt/' + res,
                  value: 0,
                },
                {
                  name: 'Nou/' + res,
                  value: 0,
                },
                {
                  name: 'Dez/' + res,
                  value: 0,
                },
              ],
            },

            {
              name: 'objectifs',
              series: [
                {
                  name: 'Jan/' + res,
                  value: 5,
                },
                {
                  name: 'Feb/' + res,
                  value: 5,
                },
                {
                  name: 'Marz/' + res,
                  value: 5,
                },
                {
                  name: 'Apr/' + res,
                  value: 5,
                },
                {
                  name: 'Mai/' + res,
                  value: 5,
                },
                {
                  name: 'Jun/' + res,
                  value: 5,
                },
                {
                  name: 'Jul/' + res,
                  value: 5,
                },
                {
                  name: 'Aug/' + res,
                  value: 5,
                },
                {
                  name: 'Sep/' + res,
                  value: 5,
                },
                {
                  name: 'Okt/' + res,
                  value: 5,
                },
                {
                  name: 'Nou/' + res,
                  value: 5,
                },
                {
                  name: 'Dez/' + res,
                  value: 5,
                },
              ],
            },
            {
              name: 'max',
              series: [
                {
                  name: 'Jan/' + res,
                  value: 15,
                },
                {
                  name: 'Feb/' + res,
                  value: 15,
                },
                {
                  name: 'Marz/' + res,
                  value: 15,
                },
                {
                  name: 'Apr/' + res,
                  value: 15,
                },
                {
                  name: 'Mai/' + res,
                  value: 15,
                },
                {
                  name: 'Jun/' + res,
                  value: 15,
                },
                {
                  name: 'Jul/' + res,
                  value: 15,
                },
                {
                  name: 'Aug/' + res,
                  value: 15,
                },
                {
                  name: 'Sep/' + res,
                  value: 15,
                },
                {
                  name: 'Okt/' + res,
                  value: 15,
                },
                {
                  name: 'Nou/' + res,
                  value: 15,
                },
                {
                  name: 'Dez/' + res,
                  value: 15,
                },
              ],
            },
          ];

          infection = [
            {
              name: 'Jan/' + res,
              value: 0,
            },
            {
              name: 'Feb/' + res,
              value: 0,
            },
            {
              name: 'Marz/' + res,
              value: 0,
            },
            {
              name: 'Apr/' + res,
              value: 0,
            },
            {
              name: 'Mai/' + res,
              value: 0,
            },
            {
              name: 'Jun/' + res,
              value: 0,
            },
            {
              name: 'Jul/' + res,
              value: 0,
            },
            {
              name: 'Aug/' + res,
              value: 0,
            },
            {
              name: 'Sep/' + res,
              value: 0,
            },
            {
              name: 'Okt/' + res,
              value: 0,
            },
            {
              name: 'Nou/' + res,
              value: 0,
            },
            {
              name: 'Dez/' + res,
              value: 0,
            },
          ];
        } else {
          chart = [
            {
              name: 'Nombre des Réclamation Non résolues',
              series: [
                {
                  name: 'Jan/' + res,
                  value: result[0].nb_infected,
                },
                {
                  name: 'Feb/' + res,
                  value: result[1].nb_infected,
                },
                {
                  name: 'Marz/' + res,
                  value: result[2].nb_infected,
                },
                {
                  name: 'Apr/' + res,
                  value: result[3].nb_infected,
                },
                {
                  name: 'Mai/' + res,
                  value: result[4].nb_infected,
                },
                {
                  name: 'Jun/' + res,
                  value: result[5].nb_infected,
                },
                {
                  name: 'Jul/' + res,
                  value: result[6].nb_infected,
                },
                {
                  name: 'Aug/' + res,
                  value: result[7].nb_infected,
                },
                {
                  name: 'Sep/' + res,
                  value: result[8].nb_infected,
                },
                {
                  name: 'Okt/' + res,
                  value: result[9].nb_infected,
                },
                {
                  name: 'Nou/' + res,
                  value: result[10].nb_infected,
                },
                {
                  name: 'Dez/' + res,
                  value: result[11].nb_infected,
                },
              ],
            },

            {
              name: 'objectifs',
              series: [
                {
                  name: 'Jan/' + res,
                  value: result[0].objective,
                },
                {
                  name: 'Feb/' + res,
                  value: result[1].objective,
                },
                {
                  name: 'Marz/' + res,
                  value: result[2].objective,
                },
                {
                  name: 'Apr/' + res,
                  value: result[3].objective,
                },
                {
                  name: 'Mai/' + res,
                  value: result[4].objective,
                },
                {
                  name: 'Jun/' + res,
                  value: result[5].objective,
                },
                {
                  name: 'Jul/' + res,
                  value: result[6].objective,
                },
                {
                  name: 'Aug/' + res,
                  value: result[7].objective,
                },
                {
                  name: 'Sep/' + res,
                  value: result[8].objective,
                },
                {
                  name: 'Okt/' + res,
                  value: result[9].objective,
                },
                {
                  name: 'Nou/' + res,
                  value: result[10].objective,
                },
                {
                  name: 'Dez/' + res,
                  value: result[11].objective,
                },
              ],
            },
            {
              name: 'max',
              series: [
                {
                  name: 'Jan/' + res,
                  value: 15,
                },
                {
                  name: 'Feb/' + res,
                  value: 15,
                },
                {
                  name: 'Marz/' + res,
                  value: 15,
                },
                {
                  name: 'Apr/' + res,
                  value: 15,
                },
                {
                  name: 'Mai/' + res,
                  value: 15,
                },
                {
                  name: 'Jun/' + res,
                  value: 15,
                },
                {
                  name: 'Jul/' + res,
                  value: 15,
                },
                {
                  name: 'Aug/' + res,
                  value: 15,
                },
                {
                  name: 'Sep/' + res,
                  value: 15,
                },
                {
                  name: 'Okt/' + res,
                  value: 15,
                },
                {
                  name: 'Nou/' + res,
                  value: 15,
                },
                {
                  name: 'Dez/' + res,
                  value: 15,
                },
              ],
            },
          ];

          infection = [
            {
              name: 'Jan/' + res,
              value: result[0].nb_infected,
            },
            {
              name: 'Feb/' + res,
              value: result[1].nb_infected,
            },
            {
              name: 'Marz/' + res,
              value: result[2].nb_infected,
            },
            {
              name: 'Apr/' + res,
              value: result[3].nb_infected,
            },
            {
              name: 'Mai/' + res,
              value: result[4].nb_infected,
            },
            {
              name: 'Jun/' + res,
              value: result[5].nb_infected,
            },
            {
              name: 'Jul/' + res,
              value: result[6].nb_infected,
            },
            {
              name: 'Aug/' + res,
              value: result[7].nb_infected,
            },
            {
              name: 'Sep/' + res,
              value: result[8].nb_infected,
            },
            {
              name: 'Okt/' + res,
              value: result[9].nb_infected,
            },
            {
              name: 'Nou/' + res,
              value: result[10].nb_infected,
            },
            {
              name: 'Dez/' + res,
              value: result[11].nb_infected,
            },
          ];
        }

        this.infected_chart = infection;

        this.tauxPcInfecte = chart;
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
}
