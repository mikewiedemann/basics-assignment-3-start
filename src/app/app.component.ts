import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
    .greater4{
      color: white;
    }
` ]
})

export class AppComponent {
  showDetails = false;
  buttonText = 'Show Details';
  buttobClickCount = 0;
  buttonClickHistory = [];

  toggleButton() {
    this.showDetails = !this.showDetails;
    this.buttobClickCount++;
    this.buttonClickHistory.push(this.buttobClickCount)
    if (this.buttonText === 'Show Details') {
        this.buttonText = 'Hide Details';
    } else {
        this.buttonText = 'Show Details';
    }
  }

  getColor(count) {
    return count > 4 ? 'blue' : 'white';
  }
}
