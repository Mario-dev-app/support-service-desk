import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-ticket',
  templateUrl: './nuevo-ticket.component.html',
  styleUrls: ['./nuevo-ticket.component.css']
})
export class NuevoTicketComponent implements OnInit {

  ticket = {
    asunto: '',
    solicitante: '',
    estado: '',
    prioridad: '',
    descripcion: ''
  }

  estados: any[] = [
    {name: 'Pendiente', value: 'pendiente'},
    {name: 'Solucionado', value: 'solucionado'},
    {name: 'Cerrado', value: 'cerrado'}
  ];

  prioridades: any[] = [
    {name: 'Baja', value: 'baja'},
    {name: 'Alta', value: 'alta'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  registrar(){
    console.log(this.ticket);
  }
}
