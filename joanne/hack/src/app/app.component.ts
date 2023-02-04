import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hack';
  selected: number = 0;
  error: boolean = false;
  currentTab : String = "daily";

  visible: boolean = false;
  see() 
  {
    this.visible = true;
  }

  submit(value: string) {
     if (value.length < 4 || Number(value) < 501 || Number(value) > 99950) {
        this.error = true;
        return;
     }
  }

  switchTabs(curr : string) {
    this.currentTab = curr;
  }

}
