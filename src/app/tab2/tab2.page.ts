import { Component } from '@angular/core';
import * as momentTimezone from 'moment-timezone';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  dateLocal = `202010300900`;
  date = momentTimezone
    .tz(this.dateLocal, 'YYYYMMDDHHmm', 'Asia/Calcutta')
    .toISOString();

  // message = `Haapy Anniversary Poornima!!!.
  // You are my life, you are my love.
  // I LOVE YOU so much my baby.`;

  message = `Happy Anniversary, Poornima!
  You are the heartbeat of my life and the soul of my love.
  Thank you for being mine—I love you deeply, endlessly, and always. 💞`;

  constructor() {}
}
