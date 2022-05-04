import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }


  items: MenuItem[] = [];

  ngOnInit(): void {

    this.items = [
      {label: 'Dashboard', icon: 'pi pi-chart-bar', routerLink: 'dashboard'},
      {label: 'Tickets', icon: 'pi pi-bookmark', routerLink: 'tickets'},
      {label: 'Administración', icon: 'pi pi-shield', routerLink: 'administracion'}
  ];
  }

}
