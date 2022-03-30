import { Component } from '@angular/core';
import * as momentTimezone from 'moment-timezone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  dateLocal = `202106270000`;
  date = momentTimezone
    .tz(this.dateLocal, 'YYYYMMDDHHmm', 'Europe/London')
    .toISOString();

  message = `Baby!!!. I Love you`;

  constructor() {}
}
