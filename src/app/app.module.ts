import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { PlanactionComponent } from './planaction/planaction.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    PlanactionComponent,
    ReclamationComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
