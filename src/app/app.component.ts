import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: MenuItem[] = [];

  title = 'prototipo';

  ngOnInit() {
    this.items = [
      {
        label: 'Acciones',
        items: [{
          label: 'Salir',
          icon: 'pi pi-power-off',
          command: () => {
            this.cerrarSesion();
          }
        }]
      }
    ];
}

cerrarSesion() {
  console.log('Cerrando sesión...')
}


}
