import { Component } from '@angular/core';
import * as momentTimezone from 'moment-timezone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  dateLocal = `202204062349`;
  date = momentTimezone
    .tz(this.dateLocal, 'YYYYMMDDHHmm', 'Asia/Calcutta')
    .toISOString();

  message = `Baby!!!. I Love you`;

  constructor() {}
}
