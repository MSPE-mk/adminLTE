import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { HomeComponent } from './home/home.component';
import { PlanactionComponent } from './planaction/planaction.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }, // redirect to `first-component`

  { path: 'plan', component: PlanactionComponent },
  { path: 'reclam', component: ReclamationComponent },
  { path: 'table', component: TableComponent },
  { path: 'calender', component: CalenderComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
