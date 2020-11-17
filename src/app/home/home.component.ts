import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { InfectedPcsService } from '../infected-pcs.service';
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
  view: any[];
  september: any[];
  october: any[];
  november: any[];
  december: any[];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Mois';
  yAxisLabel: string = 'Taux de PC infectés';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#51bcda', '#ef8157', '#aba6a6'],
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
    this.infected_pcs.getInfected_pcs(2020).subscribe(
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
}
