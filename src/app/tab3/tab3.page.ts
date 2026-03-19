import { Component } from '@angular/core';
import * as momentTimezone from 'moment-timezone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  dateLocal = `202204062349`;
  date = momentTimezone
    .tz(this.dateLocal, 'YYYYMMDDHHmm', 'Asia/Calcutta')
    .toISOString();

  // message = `Vedhika!!!. I Love you`;
  message = `Vedhika, my precious girl,
You are the light in my life and the joy in my heart.
Every moment with you is a gift, and I love you more than words can ever say. 💖`;

  constructor() { }
}
