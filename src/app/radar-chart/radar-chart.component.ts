import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  public radarChartLabels =['Q1','Q2','Q3','Q4'];
  public radarChartData =[
    {data:[120,130,80,165], label:'2017'},
    {data:[180,30,190,125], label:'2018'},
  ];
  public radarChartType = 'radar';

  constructor() { }

  ngOnInit() {
  }

}
