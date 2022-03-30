import { Component } from '@angular/core';
import * as momentTimezone from 'moment-timezone';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  dateLocal = `202010300900`;
  date = momentTimezone.tz(this.dateLocal, 'YYYYMMDDHHmm', 'Asia/Calcutta');

  message = `Haapy Anniversary!!!.`;

  constructor() {}
}
