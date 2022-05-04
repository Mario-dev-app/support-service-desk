import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-up-navbar',
  templateUrl: './up-navbar.component.html',
  styleUrls: ['./up-navbar.component.css']
})
export class UpNavbarComponent implements OnInit {

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
        label: 'Añadir ticket',
        icon: 'pi pi-bookmark'
      }
    ]
  }

  cerrarSesion() {
    console.log('Cerrando sesión...')
  }

}
