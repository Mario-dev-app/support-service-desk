import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {

    this.data1 = {
      labels: ['Cosultor 1', 'Consultor 2'],
      datasets: [
        {
          data: [ 300, 400],
          backgroundColor: [
            "#FF6384",
            "#36A2EB"
        ],
        hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB"
        ]
        }
      ]
    }

    this.data2 = {
      labels: ['Tipo 1', 'Tipo 2', 'Tipo 3', 'Tipo 4'],
      datasets: [
        {
          label: 'Enero',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [20, 45, 65, 34]
        },
        {
          label: 'Febrero',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 19]
      }
      ]
    }

   }

  ngOnInit(): void {

  }

  data1 : any;

  data2 : any;


}
