import { Component } from '@angular/core';
import * as momentTimezone from 'moment-timezone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  dateLocal = `202508170615`;
  date = momentTimezone
    .tz(this.dateLocal, 'YYYYMMDDHHmm', 'Europe/London')
    .toISOString();

  // message = ` Varshitha!!!. I Love you`;
  message = `Varshitha, my shining star,
You are the smile in my day and the peace in my heart.
No words can truly express how deeply I love you.
Always remember—wherever you go,
My love will follow you like your shadow. 💫`;

  constructor() {}
}
