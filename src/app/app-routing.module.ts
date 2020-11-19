import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { CalenderComponent } from './calender/calender.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { PlanactionComponent } from './planaction/planaction.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // redirect to `first-component`
  {
    path: 'dashboard',
    component: LayoutComponent, // this is the component with the <router-outlet> in the template
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

      {
        path: 'plan',
        component: PlanactionComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'reclam',
        component: ReclamationComponent,
        canActivate: [AuthGuard],
      },
      { path: 'table', component: TableComponent, canActivate: [AuthGuard] },
      {
        path: 'calender',
        component: CalenderComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
