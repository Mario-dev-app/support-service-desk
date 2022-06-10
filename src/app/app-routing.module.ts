import { NuevoTicketComponent } from './pages/nuevo-ticket/nuevo-ticket.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'tickets',
    component: TicketsComponent
  },
  {
    path: 'administracion',
    component: AdministracionComponent
  },
  {
    path: 'nuevo-ticket',
    component: NuevoTicketComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
