// import { Component } from '@angular/core';
// import { BarChartModule } from '@swimlane/ngx-charts';
// import { MatCard, MatCardContent } from '@angular/material/card';
// import { map, mergeMap, of, switchMap, toArray } from 'rxjs';
//
// @Component({
//   selector: 'app-monthly-recovered-chart',
//   standalone: true,
//   imports: [BarChartModule, MatCard, MatCardContent],
//   templateUrl: './monthly-recovered-chart.component.html',
// })
// export class MonthlyRecoveredChartComponent {
//   monthlyStats: any = [];
//
//   constructor(
//   ) {
//     this.assignValues();
//   }
//
//
//   values() {
//     return of([
//       {
//         name: 'JANUARY',
//         value: 150,
//       },
//       {
//         name: 'FEBRUARY',
//         value: 180,
//       },
//       {
//         name: 'MARCH',
//         value: 200,
//       },
//       {
//         name: 'APRIL',
//         value: 170,
//       },
//       {
//         name: 'MAY',
//         value: 190,
//       },
//       {
//         name: 'JUNE',
//         value: 160,
//       },
//       {
//         name: 'JULY',
//         value: 190,
//       },
//       {
//         name: 'AUGUST',
//         value: 0,
//       },
//       {
//         name: 'SEPTEMBER',
//         value: 0,
//       },
//       {
//         name: 'OCTOBER',
//         value: 0,
//       },
//       {
//         name: 'NOVEMBER',
//         value: 0,
//       },
//       {
//         name: 'NOVEMBER',
//         value: 0,
//       },
//     ])
//   }
//
//   assignValues = () => {
//     this.monthlyStats = this.values();
//   }
// }
