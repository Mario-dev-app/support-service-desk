import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
    this.data = {
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

   }

  ngOnInit(): void {

  }

  data : any;


}
