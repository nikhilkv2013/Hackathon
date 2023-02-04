import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  days : string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  d = new Date();
  today: number = this.d.getDay();
  curDay: number = this.today; 
  // day: string = this.days[this.curDay];

  switchDays(day: number) {
    this.curDay = day;
    // this.day = this.days[day];
  }
}
