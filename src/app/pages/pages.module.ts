import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    DashboardComponent,
    TicketsComponent,
    AdministracionComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class PagesModule { }
