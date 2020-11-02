import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {
  HashLocationStrategy,
  Location,
  LocationStrategy,
} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { PlanactionComponent } from './planaction/planaction.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { TableComponent } from './table/table.component';
import { CalenderComponent } from './calender/calender.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { LayoutComponent } from './layout/layout.component';
import { Page404Component } from './page404/page404.component';

import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule,
} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    PlanactionComponent,
    ReclamationComponent,
    LoginComponent,
    TableComponent,
    CalenderComponent,
    LayoutComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    HttpClientModule,
    ReactiveFormsModule,

    AppRoutingModule,
    ToastNoAnimationModule.forRoot(),
  ],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
