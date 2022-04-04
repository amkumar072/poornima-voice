import { Component, OnInit, Input } from '@angular/core';
import { SpeechService } from '../services/speech.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  @Input() message: string;
  @Input() date: string;

  years = 0;
  months = 0;
  days = 0;
  hours = 0;
  mins = 0;
  secs = 0;

  // calc value
  yearCalc = 31556962;
  // monthCalc = 2630400;
  monthCalc = 2629744;
  dayCalc = 86400;
  hourCalc = 3600;
  minCalc = 60;

  millisecCalc = 1000;

  constructor(private _speechService: SpeechService) {}

  ngOnInit() {
    this.getCount();
  }

  onClick() {
    this._speechService.textToSpeech(this.message);
  }

  getCount() {
    const dateNow = new Date(); //grab current date
    let amount = dateNow.getTime() - new Date(this.date).getTime(); //calc milliseconds between dates

    // time is already past
    if (amount < 0) {
      document.getElementById('countbox').innerHTML = 'Now!';
    } else {
      amount = Math.floor(amount / this.millisecCalc); //kill the "milliseconds" so just secs
      const finalMillisec = amount;

      this.years = Math.floor(amount / this.yearCalc); //Years
      amount = amount % this.yearCalc;

      this.months = Math.floor(amount / this.monthCalc); //Months
      amount = amount % this.monthCalc;

      this.days = Math.floor(amount / this.dayCalc); //days
      amount = finalMillisec % this.dayCalc;

      this.hours = Math.floor(amount / this.hourCalc); //hours
      amount = amount % this.hourCalc;

      this.mins = Math.floor(amount / this.minCalc); //minutes
      amount = amount % this.minCalc;

      this.secs = Math.floor(amount); //seconds

      // if (days != 0) { out += days + " day" + ((days != 1) ? "s" : "") + ", "; }
      // if (days != 0 || hours != 0) { out += hours + " hour" + ((hours != 1) ? "s" : "") + ", "; }
      // if (days != 0 || hours != 0 || mins != 0) { out += mins + " minute" + ((mins != 1) ? "s" : "") + ", "; }
      // out += secs + " seconds";
      // document.getElementById('countbox').innerHTML = out;

      setTimeout(() => {
        this.getCount();
      }, 1000);
    }
  }
}
