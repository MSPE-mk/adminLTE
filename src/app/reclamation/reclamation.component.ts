import { Component, OnInit } from '@angular/core';
import { nbrReclationNonResolu,nbrReclationResolu,dataTable,tableHeaders,tauxPcInfecte} from './data';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  tauxPcInfecte : any[];
  dataTable : any[];
  tableHeaders : any[];
  view:any[];

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
    domain: ['#51bcda', '#ef8157','#aba6a6']
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
    domain: ['#249fc1', '#249fc1', '#249fc1', '#249fc1','#249fc1', '#249fc1', '#249fc1']
  };
  
  constructor() { 
    Object.assign(this, { nbrReclationNonResolu });
    Object.assign(this, { nbrReclationResolu });
    Object.assign(this, { dataTable });
    Object.assign(this, { tableHeaders });
    Object.assign(this, { tauxPcInfecte });
    this.view = [innerWidth / 1.3, 400];
  }

  ngOnInit(): void {

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

}
