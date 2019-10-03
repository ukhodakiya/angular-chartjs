import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartOptions ={
    scaleShowVerticalLines:false,
    responsive:true
 };

 public barChartLabels = ['2006','2007','2008','2009','2010','2011','2012'];
 public barChartType = 'bar';
 public barChartLegend = true;

 public barChartData = [
   {data: [65,59,80,81,56,55,48], label: 'Series A'},
   {data: [75,51,30,41,66,15,38], label: 'Series B'}
 ];

  constructor() { }

  ngOnInit() {
  }

}
