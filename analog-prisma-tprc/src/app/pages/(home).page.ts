import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'analog-prisma-tprc-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: ` <analog-prisma-tprc-analog-welcome /> `,
})
export default class HomeComponent {}
