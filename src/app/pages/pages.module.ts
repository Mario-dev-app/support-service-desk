import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { NuevoTicketComponent } from './nuevo-ticket/nuevo-ticket.component';



@NgModule({
  declarations: [
    DashboardComponent,
    TicketsComponent,
    AdministracionComponent,
    NuevoTicketComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class PagesModule { }
