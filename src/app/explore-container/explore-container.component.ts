import { Component, OnInit, Input } from '@angular/core';
import { SpeechService } from '../services/speech.service';
import * as momentTimezone from 'moment-timezone';
import * as moment from 'moment';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  @Input() message: string;
  @Input() date: string;

  marriageDate;
  years = 0;
  months = 0;
  days = 0;
  hours = 0;
  mins = 0;
  secs = 0;

  constructor(private _speechService: SpeechService) {}

  ngOnInit() {
    this.marriageDate = momentTimezone
      .tz(this.date, 'YYYYMMDDHHmm', 'Europe/London')
      .toISOString();
    this.getCount();
  }

  onClick() {
    this._speechService.textToSpeech(this.message);
  }

  getCount() {
    const dateNow = new Date(); //grab current date
    let amount = dateNow.getTime() - new Date(this.marriageDate).getTime(); //calc milliseconds between dates
    // delete dateNow;

    // time is already past
    if (amount < 0) {
      document.getElementById('countbox').innerHTML = 'Now!';
    } else {
      amount = Math.floor(amount / 1000); //kill the "milliseconds" so just secs

      this.years = Math.floor(amount / 31556928); //Years
      amount = amount % 31556928;

      this.months = Math.floor(amount / 2629744); //Months
      amount = amount % 2629744;

      this.days = Math.floor(amount / 86400); //days
      amount = amount % 86400;

      this.hours = Math.floor(amount / 3600); //hours
      amount = amount % 3600;

      this.mins = Math.floor(amount / 60); //minutes
      amount = amount % 60;

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
