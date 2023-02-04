import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  d = new Date();
  curDay: number = this.d.getDay(); 

  switchDays(day: number) {
    this.curDay = day;
  }
}
