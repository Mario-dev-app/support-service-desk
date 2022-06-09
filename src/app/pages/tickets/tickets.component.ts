import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: any[] = [
    {
      asunto: 'Activar Office',
      solicitante: {
        nombre: 'Mario Peralta',
        avatar: 'M',
        color: {'background-color':'var(--blue-100)', 'color': '#ffffff'}
      },
      estado: {
        etiqueta: 'Pendiente',
        icono: 'pi pi-clock'
      },
      severity: 'warning',
      prioridad: {
        etiqueta: 'Baja',
        icono: 'pi pi-arrow-down'
      }
    },
    {
      asunto: 'Configurar Correo',
      solicitante: {
        nombre: 'Taryn Estrada',
        avatar: 'T',
        color: {'background-color':'var(--pink-100)', 'color': '#ffffff'}
      },
      estado: {
        etiqueta: 'Solucionado',
        icono: 'pi pi-check'
      },
      severity: 'success',
      prioridad: {
        etiqueta: 'Alta',
        icono: 'pi pi-arrow-up'
      }
    }
  ];

  estado: string = 'todos';

  prioridades: any[] = [
    {name: 'Baja', value: 'baja'}, {name: 'Alta', value: 'alta'}
  ];

  prioridadSelected: any[] = [
    {name: 'Baja', value: 'baja'}, {name: 'Alta', value: 'alta'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  filtrar(){
    console.log('Estado: ', this.estado)
    console.log(this.prioridadSelected);
  }

}
