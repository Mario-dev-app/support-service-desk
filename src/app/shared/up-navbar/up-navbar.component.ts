import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-up-navbar',
  templateUrl: './up-navbar.component.html',
  styleUrls: ['./up-navbar.component.css']
})
export class UpNavbarComponent implements OnInit {

  visible: boolean = false;

  constructor() { }

  profileItems: MenuItem[] = [];
  addItems: MenuItem[] = [];

  ngOnInit(): void {

    this.profileItems = [
      {
        label: 'Acciones',
        items: [
          {
            label: 'Salir',
            icon: 'pi pi-power-off',
            command: () => {
              this.cerrarSesion();
            }
          },
          {
            label: 'Configuración',
            icon: 'pi pi-cog'
          }
        ]
      }
    ];

    this.addItems = [
      {
        label: 'Nuevo ticket',
        icon: 'pi pi-bookmark',
        routerLink: 'nuevo-ticket'
      }
    ]
  }

  cerrarSesion() {
    console.log('Cerrando sesión...')
  }


}
