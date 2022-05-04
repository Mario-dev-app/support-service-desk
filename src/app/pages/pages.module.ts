import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AdministracionComponent } from './administracion/administracion.component';



@NgModule({
  declarations: [
    DashboardComponent,
    TicketsComponent,
    AdministracionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class PagesModule { }
