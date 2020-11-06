import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
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

  constructor() {
    Object.assign(this, { tauxPcInfecte });
    Object.assign(this, { dataTable });
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

  ngOnInit(): void {}
}
