import { Component } from '@angular/core';
import * as momentTimezone from 'moment-timezone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  dateLocal = `202202271730`;
  date = momentTimezone
    .tz(this.dateLocal, 'YYYYMMDDHHmm', 'Asia/Calcutta')
    .toISOString();

  message = ` Poornima! Poornima! Poornima!
  You are my life, you are my love.
  I LOVE YOU so much my baby. `;

  constructor() {}
}
